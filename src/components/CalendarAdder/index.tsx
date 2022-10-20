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
        <S.Field>
          <S.Label>start</S.Label>
          <S.Input disabled={true}>
            <input type="date" value={start} readOnly />
          </S.Input>
        </S.Field>

        <S.Field>
          <S.Label>end</S.Label>
          <S.Input disabled={true}>
            <input type="date" value={end} readOnly />
          </S.Input>
        </S.Field>

        <S.Field>
          <S.Label>title</S.Label>
          <S.Input>
            <input />
          </S.Input>
        </S.Field>
      </S.Content>

      <ModalFooter clickCancel={ignore} clickSave={save} />
    </S.Container>
  );
};

export default CalendarAdder;