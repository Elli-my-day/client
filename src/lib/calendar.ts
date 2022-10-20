import { IDate } from '@/types/calendar';
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

  public setCalendarDate(calendar: FullCalendar | null, year: string, month: string, day: string) {
    const newYear = Number(year);
    const newMonth = Number(month) - 1;
    const newDay = Number(day);

    calendar?.getApi().gotoDate(new Date(newYear, newMonth, newDay));
  }

  public addEvent(
    calendar: FullCalendar | null,
    id: string,
    title: string,
    startStr: IDate,
    endStr: IDate
  ) {
    calendar?.getApi().addEvent({ id, title, start: startStr, end: endStr });
  }

  public removeEvent(calendar: FullCalendar | null, id: string) {
    const event = calendar?.getApi().getEventById(id);
    event?.remove();
  }

  public updateEvent(calendar: FullCalendar | null, id: string, title: string) {
    const event = calendar?.getApi().getEventById(id);
    event?.setProp('title', title);
  }
}

export default new CalendarMethods();
