import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { throttle } from 'lodash';
import FullCalendar, { type DateSelectArg, EventClickArg } from '@fullcalendar/react'; // must go before plugins
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import CalendarAdder from '@/components/CalendarAdder';
import CalendarUpdater from '@/components/CalendarUpdater';
import Modal from '@/base/Modal';
import useModal from '@/base/Modal/useModal';
import CalendarMethods from '@/lib/calendar';
import DateMethods from '@/lib/date';
import { IEvent, IDate } from '@/types/calendar';
import * as S from './styles';

const Calendar = () => {
  const calendarWrapperRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<FullCalendar>(null);

  const router = useRouter();
  const { date } = router.query;

  const [calendarEvents, setEvents] = useState<IEvent[]>([]);

  // URL => calendar
  useEffect(() => {
    if (date?.length === 2) {
      // ['2022', '10']
      const routeYear = date[0];
      const routeMonth = date[1];

      const yearOk = DateMethods.validateYear(routeYear);
      const monthOk = DateMethods.validateMonth(routeMonth);

      if (yearOk && monthOk) {
        CalendarMethods.setCalendarDate(calendarRef.current, routeYear, routeMonth, '01');
      }
    }
  }, [date]);

  const [selectedDate, setSelectedDate] = useState<{
    id: string;
    start: IDate;
    end: IDate;
  }>({
    id: '',
    start: '1990-01-01',
    end: '1990-01-01',
  });

  const selectDate = (arg: DateSelectArg) => {
    const id = Date.now().toString();
    setSelectedDate(() => ({ id, start: arg.startStr as IDate, end: arg.endStr as IDate }));
    addEvent(id, arg.startStr as IDate, arg.endStr as IDate);
    openAddModal();
  };

  const clickEvent = (info: EventClickArg) => {
    console.log(info.event.id);
    // removeEvent(info.event.id);
    openUpdateModal();
  };

  const addEvent = (id: string, startStr: IDate, endStr: IDate) => {
    setEvents((prev) => [...prev, { id, title: 'aa', start: startStr, end: endStr }]);
  };

  const removeEvent = (id: string) => {
    setEvents((prev) => [...prev.filter((ele) => ele.id !== id)]);
  };

  const updateEvent = (id: string, title: string) => {
    setEvents((prev) => [...prev.map((ele) => (ele.id === id ? { ...ele, title } : ele))]);
  };

  const throttledScroll = useMemo(
    () =>
      throttle((e: WheelEvent) => {
        if (calendarWrapperRef.current?.contains(e.target as Node)) {
          if (e.deltaY > 0) {
            CalendarMethods.setCalendarNext(calendarRef.current);
          }
          if (e.deltaY < 0) {
            CalendarMethods.setCalendarPrev(calendarRef.current);
          }
        }
      }, 800),
    []
  );

  useEffect(() => {
    window.addEventListener('wheel', throttledScroll);

    return () => window.removeEventListener('wheel', throttledScroll);
  }, [throttledScroll]);

  const { isOpen: isAddModalOpen, openModal: openAddModal, closeModal: closeAddModal } = useModal();

  const {
    isOpen: isUpdateModalOpen,
    openModal: openUpdateModal,
    closeModal: closeUpdateModal,
  } = useModal();

  return (
    <S.CalendarWrapper ref={calendarWrapperRef}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable
        editable
        droppable
        events={calendarEvents}
        select={selectDate}
        eventClick={clickEvent}
        datesSet={(event) => {
          // detect year, month change
          const midDate = new Date((event.start.getTime() + event.end.getTime()) / 2);
          const year = DateMethods.getYear(midDate);
          const month = DateMethods.getMonth(midDate);

          // 맨처음 달력나올때, default today. url에 날짝 적혀있어도 해당 이벤트 발생해서 today로 회귀.
          // today로 갔다가 이동하려해도 url에는 아직 없어서 url도 같이 안 바뀜.?
          // 보장이 안되서 좀 불안.
          if (date && date.length === 2) {
            const routeYear = date[0];
            const routeMonth = date[1];

            const yearOk = DateMethods.validateYear(routeYear);
            const monthOk = DateMethods.validateMonth(routeMonth);

            if (yearOk && monthOk) {
              router.replace(`/calendar/${year}/${month}`);
            }
          }
        }}
      />
      <Modal isOpen={isAddModalOpen} requestClose={closeAddModal}>
        <CalendarAdder
          closeModal={closeAddModal}
          eventId={selectedDate.id}
          start={selectedDate.start}
          end={selectedDate.end}
          removeEvent={removeEvent}
        />
      </Modal>
      <Modal isOpen={isUpdateModalOpen} requestClose={closeUpdateModal}>
        <div>update modal</div>
        {/* <CalendarUpdater
          closeModal={closeUpdateModal}
          eventId={selectedDate.id}
          start={selectedDate.start}
          end={selectedDate.end}
          removeEvent={removeEvent}
        /> */}
      </Modal>
    </S.CalendarWrapper>
  );
};

export default Calendar;
