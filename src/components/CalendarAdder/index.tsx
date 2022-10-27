import React, { useState } from 'react';
import ModalHeader from '@/base/ModalHeader';
import ModalFooter from '@/base/ModalFooter';
import Field from '@/base/Field';
import * as S from './styles';
import { ICalendarModalProps } from '@/components/Calendar';

// selected Date 분리 필요성

const CalendarAdder = ({
  closeModal,
  eventId,
  getEvent,
  removeEvent,
  updateEvent,
}: ICalendarModalProps) => {
  const eventStart = getEvent(eventId)?.start;
  const eventEnd = getEvent(eventId)?.end;

  const [title, setTitle] = useState('오늘 뭐하지?');

  const clickClose = () => {
    removeEvent(eventId);

    closeModal();
  };

  const saveEvent = () => {
    updateEvent({ id: eventId, title });

    closeModal();
  };

  return (
    <S.Container>
      <ModalHeader title="Event Adder" clickClose={clickClose} />

      <S.Content>
        <Field label="start">
          <input type="date" value={eventStart} readOnly />
        </Field>
        <Field label="end">
          <input type="date" value={eventEnd} readOnly />
        </Field>
        <Field label="title">
          <input
            type="text"
            value={title}
            autoFocus
            onChange={(e) => {
              setTitle(() => e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                saveEvent();
              }
            }}
          />
        </Field>
      </S.Content>

      <ModalFooter clickCancel={clickClose} clickSave={saveEvent} />
    </S.Container>
  );
};

export default CalendarAdder;
