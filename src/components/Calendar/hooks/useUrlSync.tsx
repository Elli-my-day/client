import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { type DatesSetArg } from '@fullcalendar/common';
import DateMethods from '@/lib/date';
import CalendarMethods from '@/lib/calendar';
import { type ICalendarRef } from '@/components/Calendar';

/**
 * get url query and change calendar to that date
 * @returns detect calendar month change
 */
const useUrlSync = ({ calendarRef }: Pick<ICalendarRef, 'calendarRef'>) => {
  const router = useRouter();
  const { date } = router.query;

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

  const detectMonthChange = (event: DatesSetArg) => {
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
  };

  return { detectMonthChange };
};

export default useUrlSync;
