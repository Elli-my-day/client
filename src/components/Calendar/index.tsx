import React, { useRef, useState } from 'react';
import FullCalendar, { type DateSelectArg, EventClickArg } from '@fullcalendar/react'; // must go before plugins
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import CalendarAdder from '@/components/CalendarAdder';
import CalendarUpdater from '@/components/CalendarUpdater';
import Modal from '@/base/Modal';
import useModal from '@/base/Modal/useModal';
import useWheel from '@/components/Calendar/hooks/useWheel';
import useUrlSync from '@/components/Calendar/hooks/useURLSync';
import { IDate } from '@/types/calendar';
import CalendarMethods from '@/lib/calendar';
import * as S from './styles';

export interface ICalendarRef {
  calendarRef: React.RefObject<FullCalendar>;
  calendarWrapperRef: React.RefObject<HTMLDivElement>;
}

const Calendar = () => {
  const calendarWrapperRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<FullCalendar>(null);

  const [selectedEventId, setSelectedEventId] = useState<string>('');
  const [selectedEventStart, setSelectedEventStart] = useState<IDate>();
  const [selectedEventEnd, setSelectedEventEnd] = useState<IDate>();

  // event id 만 가지고 있고, getEventById로 관리하면 더 좋을듯?
  // event.setStart같은 함수들 있는데, 안쓰고 setState로 관리하는 것이 맞나??

  const selectDate = (arg: DateSelectArg) => {
    const id = Date.now().toString();
    const title = '오늘 뭐하지?';

    const start = arg.startStr as IDate;
    const end = arg.endStr as IDate;

    setSelectedEventId(() => id);
    setSelectedEventStart(() => start);
    setSelectedEventEnd(() => end);
    CalendarMethods.addEvent(calendarRef.current, id, title, start, end);
    openAddModal();
  };

  const clickEvent = (info: EventClickArg) => {
    // const event = calendarRef.current?.getApi().getEventById(info.event.id);

    // event?.setEnd(new Date(2022, 10, 28));

    // removeEvent(info.event.id);
    openUpdateModal();
  };

  const close = () => {
    CalendarMethods.removeEvent(calendarRef.current, selectedEventId);
    closeAddModal();
  };

  useWheel({ calendarRef, calendarWrapperRef });

  const { detectMonthChange } = useUrlSync({ calendarRef });

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
        events={[]}
        eventBackgroundColor="#a78bfa"
        eventBorderColor="#a78bfa"
        select={selectDate}
        eventClick={clickEvent}
        datesSet={detectMonthChange}
      />
      <Modal isOpen={isAddModalOpen} requestClose={close}>
        <CalendarAdder
          calendarRef={calendarRef}
          closeModal={closeAddModal}
          eventId={selectedEventId}
          eventStart={selectedEventStart}
          eventEnd={selectedEventEnd}
        />
      </Modal>
      <Modal isOpen={isUpdateModalOpen} requestClose={closeUpdateModal}>
        <div>update modal</div>
        {/* <CalendarUpdater
          closeModal={closeUpdateModal}
          eventId={temporaryEvent.id}
          start={temporaryEvent.start}
          end={temporaryEvent.end}
          removeEvent={removeEvent}
        /> */}
      </Modal>
    </S.CalendarWrapper>
  );
};

export default Calendar;
