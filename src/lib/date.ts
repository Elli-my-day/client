import { MM, YYYY } from '@/types/calendar';

class DateMethods {
  public getYear(d: Date) {
    return d.getFullYear().toString() as YYYY;
  }

  public getMonth(d: Date) {
    return (d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : (d.getMonth() + 1).toString()) as MM;
  }

  public validateYear(year: string) {
    const yearRegex = /^(19\d\d|2\d\d\d)$/;

    return yearRegex.test(year);
  }

  public validateMonth(month: string) {
    const monthRegex = /^(0[1-9]|1[0-2])$/;

    return monthRegex.test(month);
  }
}

export default new DateMethods();
