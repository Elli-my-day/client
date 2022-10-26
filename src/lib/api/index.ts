import CalendarApi from './calendar';

class Api {
  calendar: CalendarApi;

  constructor() {
    this.calendar = new CalendarApi();
  }
}

export default new Api();
