import FullCalendar from '@fullcalendar/react';

class CalendarMethods {
  calendar: FullCalendar | null;

  constructor(calendar: FullCalendar | null) {
    this.calendar = calendar;
  }

  public getCalendarYear() {
    return this.calendar?.getApi().view.currentStart.toISOString().slice(0, 4);
  }

  public getCalendarMonth() {
    return this.calendar?.getApi().view.currentStart.toISOString().slice(5, 7);
  }

  public setCalendarNext() {
    this.calendar?.getApi().getCurrentData().calendarApi.next();
  }

  public setCalendarPrev() {
    this.calendar?.getApi().getCurrentData().calendarApi.prev();
  }
}

export default CalendarMethods;
