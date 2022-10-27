import React, { useState } from 'react';
import ModalHeader from '@/base/ModalHeader';
import ModalFooter from '@/base/ModalFooter';
import Field from '@/base/Field';
import { ICalendarModalProps } from '@/components/Calendar';
import { IDate } from '@/types/calendar';
import * as S from './styles';

const CalendarUpdater = ({ closeModal, eventId, getEvent, updateEvent }: ICalendarModalProps) => {
  const eventTitle = getEvent(eventId)?.title || '';
  const eventStart = getEvent(eventId)?.start as IDate;
  const eventEnd = getEvent(eventId)?.end as IDate;

  const [title, setTitle] = useState(eventTitle);
  const [start, setStart] = useState<IDate>(eventStart);
  const [end, setEnd] = useState<IDate>(eventEnd);

  const clickClose = () => {
    closeModal();
  };

  const update = () => {
    updateEvent({ id: eventId, title, start, end }); // start, end도 가능하게

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

      <ModalFooter clickCancel={clickClose} clickSave={update} />
    </S.Container>
  );
};

export default CalendarUpdater;
