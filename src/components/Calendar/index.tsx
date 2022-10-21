import React, { useRef, useState } from 'react';
import FullCalendar, { type DateSelectArg, EventClickArg } from '@fullcalendar/react'; // must go before plugins
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import CalendarAdder from '@/components/CalendarAdder';
import CalendarUpdater from '@/components/CalendarUpdater';
import Modal from '@/base/Modal';
import useModal from '@/base/Modal/useModal';
import useWheel from '@/components/Calendar/hooks/useWheel';
import useUrlSync from '@/components/Calendar/hooks/useUrlSync';
import { IDate } from '@/types/calendar';
import CalendarMethods from '@/lib/calendar';
import * as S from './styles';

export interface ICalendarRef {
  calendarRef: React.RefObject<FullCalendar>;
  calendarWrapperRef: React.RefObject<HTMLDivElement>;
}

export interface ICalendarModalProps {
  calendarRef: React.RefObject<FullCalendar>;
  closeModal: () => void;
  eventId: string;
}

// calendarRef를 context에 넣어서 사용할까..?

const Calendar = () => {
  const calendarWrapperRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<FullCalendar>(null);

  const [selectedEventId, setSelectedEventId] = useState<string>('');

  const selectDate = (arg: DateSelectArg) => {
    const id = Date.now().toString();
    const title = '오늘 뭐하지?';
    const start = arg.startStr as IDate;
    const end = arg.endStr as IDate;

    setSelectedEventId(() => id);

    CalendarMethods.addEvent(calendarRef.current, id, title, start, end);
    openAddModal();
  };

  const clickEvent = (info: EventClickArg) => {
    const id = info.event.id;

    const event = CalendarMethods.getEventById(calendarRef.current, id);

    if (event) {
      setSelectedEventId(() => event.id);
    }

    openUpdateModal();
  };

  const stopAddEvent = () => {
    CalendarMethods.removeEvent(calendarRef.current, selectedEventId);
    closeAddModal();
  };

  /* Custom Hooks */
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
      <Modal isOpen={isAddModalOpen} requestClose={stopAddEvent}>
        <CalendarAdder
          calendarRef={calendarRef}
          closeModal={closeAddModal}
          eventId={selectedEventId}
        />
      </Modal>
      <Modal isOpen={isUpdateModalOpen} requestClose={closeUpdateModal}>
        <CalendarUpdater
          calendarRef={calendarRef}
          closeModal={closeUpdateModal}
          eventId={selectedEventId}
        />
      </Modal>
    </S.CalendarWrapper>
  );
};

export default Calendar;
