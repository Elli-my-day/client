import React, { useEffect, useMemo, useRef, useState } from 'react';
import { throttle } from 'lodash';
import FullCalendar, { type DateSelectArg } from '@fullcalendar/react'; // must go before plugins
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { IEvent, IDate } from '@/types/calendar';
import CalendarMethods from '@/lib/calendar';
import * as S from './styles';

const Calendar = () => {
  const calendarWrapperRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<FullCalendar>(null);

  const calendarMethods = new CalendarMethods(calendarRef.current);

  const [calendarEvents, setEvents] = useState<IEvent[]>([]);

  const calendarYear = calendarMethods.getCalendarYear();
  const calendarMonth = calendarMethods.getCalendarMonth();

  const addEvent = (arg: DateSelectArg) => {
    const id = Date.now().toString();
    setEvents((prev) => [
      ...prev,
      { id, title: 'aa', start: arg.startStr as IDate, end: arg.endStr as IDate },
    ]);
  };

  const throttledScroll = useMemo(
    () =>
      throttle((e: WheelEvent) => {
        if (calendarWrapperRef.current?.contains(e.target as Node)) {
          if (e.deltaY > 0) {
            calendarMethods.setCalendarNext();
          }
          if (e.deltaY < 0) {
            calendarMethods.setCalendarPrev();
          }
        }
      }, 800),
    []
  );

  useEffect(() => {
    window.addEventListener('wheel', throttledScroll);

    return () => window.removeEventListener('wheel', throttledScroll);
  }, [throttledScroll]);

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
        select={addEvent}
        eventClick={(info) => {
          console.log(info.event.id);
        }}
      />
    </S.CalendarWrapper>
  );
};

export default Calendar;
