import React, { useState } from 'react';
import ModalHeader from '@/base/ModalHeader';
import ModalFooter from '@/base/ModalFooter';
import Field from '@/base/Field';
import CalendarMethods from '@/lib/calendar';
import { ICalendarModalProps } from '@/components/Calendar';
import { IDate } from '@/types/calendar';
import * as S from './styles';

const CalendarUpdater = ({ calendarRef, closeModal, eventId }: ICalendarModalProps) => {
  const eventTitle = CalendarMethods.getEventById(calendarRef.current, eventId)?.title;
  const eventStart = CalendarMethods.getEventById(calendarRef.current, eventId)?.startStr as IDate;
  const eventEnd = CalendarMethods.getEventById(calendarRef.current, eventId)?.endStr as IDate;

  const [title, setTitle] = useState(eventTitle);
  const [start, setStart] = useState<IDate>(eventStart);
  const [end, setEnd] = useState<IDate>(eventEnd);

  const clickClose = () => {
    closeModal();
  };

  const updateEvent = () => {
    CalendarMethods.updateEvent(calendarRef.current, eventId, { title, start, end });
    closeModal();
  };

  return (
    <S.Container>
      <ModalHeader title="Event Updater" clickClose={clickClose} />

      <S.Content>
        <Field label="start">
          <input
            type="date"
            value={start}
            onChange={(e) => {
              const { value } = e.target;

              setStart(value as IDate);
            }}
          />
        </Field>
        <Field label="end">
          <input
            type="date"
            value={end}
            onChange={(e) => {
              const { value } = e.target;
              setEnd(value as IDate);
            }}
          />
        </Field>
        <Field label="title">
          <input
            type="text"
            value={title}
            autoFocus
            onChange={(e) => {
              setTitle(() => e.target.value);
            }}
            // onKeyDown={(e) => {
            //   if (e.key === 'Enter') {
            //     saveEvent();
            //   }
            // }}
          />
        </Field>
      </S.Content>

      <ModalFooter clickCancel={clickClose} clickSave={updateEvent} />
    </S.Container>
  );
};

export default CalendarUpdater;
