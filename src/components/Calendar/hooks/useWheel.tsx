import React, { useMemo, useEffect } from 'react';
import { throttle } from 'lodash';
import CalendarMethods from '@/lib/calendar';
import { type ICalendarRef } from '@/components/Calendar';

/**
 * detect wheel event and change calendar month
 * @returns
 */
const useWheel = ({ calendarRef, calendarWrapperRef }: ICalendarRef) => {
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

  return;
};

export default useWheel;
