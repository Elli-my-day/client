import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  const calRef = useRef(null);

  const _events = [
    { title: 'event 1', start: '2022-10-01', end: '2022-10-03' },
    { title: 'event 2', start: '2022-10-04', end: '2022-10-06' },
  ];

  const [calendarEvents, setEvents] = useState(_events);

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
        select={(arg) => {
          console.log(arg);
          if (calRef.current) {
            const cal = calRef.current;
          }
        }}
      />
    </>
  );
};

export default Calendar;
