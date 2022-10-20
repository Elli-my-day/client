import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import ModalHeader from '@/base/ModalHeader';
import ModalFooter from '@/base/ModalFooter';
import CalendarMethods from '@/lib/calendar';
import * as S from './styles';
import { IDate } from '@/types/calendar';

// selected Date 분리 필요성
interface IProps {
  calendarRef: React.RefObject<FullCalendar>;
  closeModal: () => void;
  eventId: string;
  eventStart: IDate | undefined;
  eventEnd: IDate | undefined;
}

const CalendarAdder = ({ calendarRef, closeModal, eventId, eventStart, eventEnd }: IProps) => {
  const [title, setTitle] = useState('오늘 뭐하지?');

  const clickClose = () => {
    CalendarMethods.removeEvent(calendarRef.current, eventId);

    closeModal();
  };

  const clickSave = () => {
    CalendarMethods.updateEvent(calendarRef.current, eventId, title);
    closeModal();
  };

  return (
    <S.Container>
      <ModalHeader title="Event Adder" clickClose={clickClose} />

      <S.Content>
        <S.Field>
          <S.Label>start</S.Label>
          <S.Input>
            <input type="date" value={eventStart} readOnly />
          </S.Input>
        </S.Field>

        <S.Field>
          <S.Label>end</S.Label>
          <S.Input>
            <input type="date" value={eventEnd} readOnly />
          </S.Input>
        </S.Field>

        <S.Field>
          <S.Label>title</S.Label>
          <S.Input>
            <input
              type="text"
              value={title}
              autoFocus
              onChange={(e) => {
                setTitle(() => e.target.value);
              }}
            />
          </S.Input>
        </S.Field>
      </S.Content>

      <ModalFooter clickCancel={clickClose} clickSave={clickSave} />
    </S.Container>
  );
};

export default CalendarAdder;
