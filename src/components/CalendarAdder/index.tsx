import React from 'react';
import { IDate } from '@/types/calendar';
import * as S from './styles';

interface IProps {
  closeModal: () => void;
  eventId: string;
  start: IDate;
  end: IDate;
  removeEvent: (id: string) => void;
}

const CalendarAdder = ({ closeModal, eventId, start, end, removeEvent }: IProps) => {
  return (
    <S.Container>
      <h2>Calendar Adder</h2>
      <div>from : {start}</div>
      <div>to : {end}</div>
      <div>title</div>
      <button
        onClick={() => {
          removeEvent(eventId);
          closeModal();
        }}
      >
        cancel
      </button>
      <button onClick={closeModal}>ok</button>
    </S.Container>
  );
};

export default CalendarAdder;
