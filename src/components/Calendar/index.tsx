import React, { useEffect, useRef, useState } from 'react';
import FullCalendar, { type DateSelectArg, EventClickArg } from '@fullcalendar/react'; // must go before plugins
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import CalendarAdder from '@/components/CalendarAdder';
import CalendarUpdater from '@/components/CalendarUpdater';
import Modal from '@/base/Modal';
import useModal from '@/base/Modal/useModal';
import useWheel from '@/components/Calendar/hooks/useWheel';
import useUrlSync from '@/components/Calendar/hooks/useUrlSync';
import { IDate, IEvent } from '@/types/calendar';
import * as S from './styles';
import useEvents from './hooks/useEvents';

export interface ICalendarRef {
  calendarRef: React.RefObject<FullCalendar>;
  calendarWrapperRef: React.RefObject<HTMLDivElement>;
}

export interface ICalendarModalProps {
  // calendarRef: React.RefObject<FullCalendar>;
  closeModal: () => void;
  eventId: string;
  getEvent: (eventId: string) => IEvent | undefined;
  removeEvent: (eventId: string) => void;
  updateEvent: ({
    id,
    title,
    start,
    end,
  }: {
    id: string;
    title: string;
    start?: IDate;
    end?: IDate;
  }) => void;
}

const Calendar = () => {
  const calendarWrapperRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<FullCalendar>(null);

  const [selectedEventId, setSelectedEventId] = useState<string>('');

  const { events, getEvent, addEvent, removeEvent, updateEvent } = useEvents();

  /**
   * select Date
   * @param {DateSelectArg} arg
   */
  const selectDate = (arg: DateSelectArg) => {
    const id = Date.now().toString();
    const title = '오늘 뭐하지?';
    const start = arg.startStr as IDate;
    const end = arg.endStr as IDate;

    setSelectedEventId(() => id);
    addEvent({ id, title, start, end });

    openAddModal();
  };

  /**
   * click event
   * @param {EventClickArg} info
   */
  const clickEvent = (info: EventClickArg) => {
    const id = info.event.id;

    const event = getEvent(id);

    if (event) {
      setSelectedEventId(() => event.id);

      openUpdateModal();
    }
  };

  /**
   * stop adding event
   */
  const stopAddEvent = () => {
    removeEvent(selectedEventId);

    closeAddModal();
  };

  /* Custom Hooks */
  useWheel({ calendarRef, calendarWrapperRef });

  const { calendarYear, calendarMonth, detectMonthChange } = useUrlSync({ calendarRef });

  /* Modal */
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
        // 이러한 방법을 사용하면 단순 event click, month change에도 trigger됨.
        // events에 별도의 react query data로 하는 것이 더 정신건강에 좋을 듯.
        events={events}
        eventBackgroundColor="#a78bfa"
        eventBorderColor="#a78bfa"
        select={selectDate}
        eventClick={clickEvent}
        datesSet={detectMonthChange}
      />
      <Modal isOpen={isAddModalOpen} requestClose={stopAddEvent}>
        <CalendarAdder
          closeModal={closeAddModal}
          eventId={selectedEventId}
          getEvent={getEvent}
          removeEvent={removeEvent}
          updateEvent={updateEvent}
        />
      </Modal>
      <Modal isOpen={isUpdateModalOpen} requestClose={closeUpdateModal}>
        <CalendarUpdater
          closeModal={closeUpdateModal}
          eventId={selectedEventId}
          getEvent={getEvent}
          removeEvent={removeEvent}
          updateEvent={updateEvent}
        />
      </Modal>
    </S.CalendarWrapper>
  );
};

export default Calendar;
