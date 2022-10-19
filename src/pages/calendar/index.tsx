import React, { useEffect, useRef, useState } from 'react';
import FullCalendar, { type DateSelectArg } from '@fullcalendar/react'; // must go before plugins
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { IEvent, IDate } from '@/types/calendar';

const Calendar = () => {
  const calRef = useRef<FullCalendar>(null);

  const [calendarEvents, setEvents] = useState<IEvent[]>([]);

  const calendarYear = calRef.current?.getApi().view.currentStart.toISOString().slice(0, 4);
  const calendarMonth = calRef.current?.getApi().view.currentStart.toISOString().slice(5, 7);

  const addEvent = (arg: DateSelectArg) => {
    console.log('add new event');
    const id = Date.now().toString();
    setEvents((prev) => [
      ...prev,
      { id, title: 'aa', start: arg.startStr as IDate, end: arg.endStr as IDate },
    ]);
  };
  return (
    <>
      <FullCalendar
        ref={calRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable
        editable
        droppable
        events={calendarEvents}
        select={addEvent}
        eventClick={(info) => {
          console.log(info.event.id);
        }}
      />
    </>
  );
};

export default Calendar;
