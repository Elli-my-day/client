import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { throttle } from 'lodash';
import FullCalendar, { type DateSelectArg } from '@fullcalendar/react'; // must go before plugins
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { IEvent, IDate, YYYY, MM } from '@/types/calendar';
import CalendarMethods from '@/lib/calendar';
import DateMethods from '@/lib/date';
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
    </S.CalendarWrapper>
  );
};

export default Calendar;
