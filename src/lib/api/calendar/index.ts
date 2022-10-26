import axiosIns from '@/lib/axios';
import { AxiosResponse } from 'axios';

class CalendarApi {
  base: string;

  constructor() {
    this.base = '/calendar';
  }

  async getEvents(start: string, end: string): Promise<AxiosResponse<any[]>> {
    return await axiosIns.get(`${this.base}/events`, {
      params: {
        start,
        end,
      },
    });
  }
}

export default CalendarApi;
