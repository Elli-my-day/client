import FullCalendar from '@fullcalendar/react';

class CalendarMethods {
  public getCalendarYear(calendar: FullCalendar | null) {
    return calendar?.getApi().view.currentStart.toISOString().slice(0, 4);
  }

  public getCalendarMonth(calendar: FullCalendar | null) {
    return calendar?.getApi().view.currentStart.toISOString().slice(5, 7);
  }

  public setCalendarNext(calendar: FullCalendar | null) {
    calendar?.getApi().getCurrentData().calendarApi.next();
  }

  public setCalendarPrev(calendar: FullCalendar | null) {
    calendar?.getApi().getCurrentData().calendarApi.prev();
  }

  public setCalendarDate(calendar: FullCalendar | null, year: number, month: number, day: number) {
    calendar?.getApi().gotoDate(new Date(year, month, day));
  }
}

export default new CalendarMethods();
