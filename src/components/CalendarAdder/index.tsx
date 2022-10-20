import React from 'react';
import ModalHeader from '@/base/ModalHeader';
import ModalFooter from '@/base/ModalFooter';
import { IDate } from '@/types/calendar';
import * as S from './styles';

interface IProps {
  start: IDate;
  end: IDate;
  ignore: () => void;
  save: () => void;
}

const CalendarAdder = ({ start, end, ignore, save }: IProps) => {
  return (
    <S.Container>
      <ModalHeader title="Event Adder" clickClose={ignore} />

      <S.Content>
        <div>from : {start}</div>
        <div>to : {end}</div>
        <div>title</div>
      </S.Content>

      <ModalFooter clickCancel={ignore} clickSave={save} />
    </S.Container>
  );
};

export default CalendarAdder;
