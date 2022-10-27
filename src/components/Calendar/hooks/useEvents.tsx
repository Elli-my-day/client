import React, { useState } from 'react';
import { IEvent } from '@/types/calendar';

const useEvents = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  // console.log('🚀 ~ file: useEvents.tsx ~ line 6 ~ useEvents ~ events', events);

  const getEvent = (eventId: string) => {
    return events.find((event) => event.id === eventId);
  };

  const addEvent = ({ id, title, start, end }: IEvent) => {
    setEvents((prev) => [...prev, { id, title, start, end }]);
  };

  const removeEvent = (eventId: string) => {
    setEvents((prev) => [...prev.filter(({ id }) => id !== eventId)]);
  };

  const updateEvent = ({ id, title }: { id: string; title: string }) => {
    setEvents((prev) => [
      ...prev.map((event) => {
        if (event.id === id) {
          return {
            ...event,
            title,
          };
        } else {
          return event;
        }
      }),
    ]);
  };

  return { events, getEvent, addEvent, removeEvent, updateEvent };
};

export default useEvents;
