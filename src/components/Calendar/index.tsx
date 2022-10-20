import React, { useRef, useState } from 'react';
import FullCalendar, { type DateSelectArg, EventClickArg } from '@fullcalendar/react'; // must go before plugins
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import CalendarAdder from '@/components/CalendarAdder';
import CalendarUpdater from '@/components/CalendarUpdater';
import Modal from '@/base/Modal';
import useModal from '@/base/Modal/useModal';
import { IEvent, IDate } from '@/types/calendar';
import * as S from './styles';
import useWheel from '@/components/Calendar/hooks/useWheel';
import useUrlSync from '@/components/Calendar/hooks/useURLSync';
import useEvents from '@/components/Calendar/hooks/useEvents';

export interface ICalendarRef {
  calendarRef: React.RefObject<FullCalendar>;
  calendarWrapperRef: React.RefObject<HTMLDivElement>;
}

const Calendar = () => {
  const calendarWrapperRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<FullCalendar>(null);

  const { calendarEvents, addEvent, removeEvent, updateEvent } = useEvents();

  const [temporaryEvent, setTemporaryEvent] = useState<{
    id: string;
    start: IDate;
    end: IDate;
    title: string;
  }>({
    id: '',
    start: '1990-01-01',
    end: '1990-01-01',
    title: '',
  });

  // select할 때 임시 event 넣어주는 방향으로 가야 하나??
  const selectDate = (arg: DateSelectArg) => {
    const id = Date.now().toString();
    const title = '오늘 뭐하지?';

    const start = arg.startStr as IDate;
    const end = arg.endStr as IDate;

    setTemporaryEvent(() => ({
      id,
      title,
      start,
      end,
    }));
    addEvent(id, title, start, end);
    openAddModal();
  };

  const clickEvent = (info: EventClickArg) => {
    // removeEvent(info.event.id);
    openUpdateModal();
  };

  const ignoreAdd = () => {
    const { id } = temporaryEvent;

    removeEvent(id);
    closeAddModal();
  };

  const saveAdd = () => {
    const { id, title } = temporaryEvent;

    updateEvent(id, title);
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
        events={calendarEvents}
        eventBackgroundColor="#a78bfa"
        eventBorderColor="#a78bfa"
        select={selectDate}
        eventClick={clickEvent}
        datesSet={detectMonthChange}
      />
      <Modal isOpen={isAddModalOpen} requestClose={ignoreAdd}>
        <CalendarAdder
          temporaryEvent={temporaryEvent}
          setTemporaryEvent={setTemporaryEvent}
          ignore={ignoreAdd}
          save={saveAdd}
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
