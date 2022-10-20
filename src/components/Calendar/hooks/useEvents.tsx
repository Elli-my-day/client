import React, { useState } from 'react';
import { IEvent, IDate } from '@/types/calendar';

const useEvents = () => {
  const [calendarEvents, setEvents] = useState<IEvent[]>([]);

  const addEvent = (id: string, title: string, startStr: IDate, endStr: IDate) => {
    setEvents((prev) => [...prev, { id, title, start: startStr, end: endStr }]);
  };

  const removeEvent = (id: string) => {
    setEvents((prev) => [...prev.filter((ele) => ele.id !== id)]);
  };

  const updateEvent = (id: string, title: string) => {
    setEvents((prev) => [...prev.map((ele) => (ele.id === id ? { ...ele, title } : ele))]);
  };

  return { calendarEvents, addEvent, removeEvent, updateEvent };
};

export default useEvents;
