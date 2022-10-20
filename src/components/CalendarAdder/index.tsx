import React from 'react';
import ModalHeader from '@/base/ModalHeader';
import ModalFooter from '@/base/ModalFooter';
import { IEvent } from '@/types/calendar';
import * as S from './styles';

// selected Date 분리 필요성
interface IProps {
  temporaryEvent: IEvent;
  setTemporaryEvent: React.Dispatch<React.SetStateAction<IEvent>>;
  ignore: () => void;
  save: () => void;
}

const CalendarAdder = ({ temporaryEvent, setTemporaryEvent, ignore, save }: IProps) => {
  return (
    <S.Container>
      <ModalHeader title="Event Adder" clickClose={ignore} />

      <S.Content>
        <S.Field>
          <S.Label>start</S.Label>
          <S.Input>
            <input type="date" value={temporaryEvent.start} readOnly />
          </S.Input>
        </S.Field>

        <S.Field>
          <S.Label>end</S.Label>
          <S.Input>
            <input type="date" value={temporaryEvent.end} readOnly />
          </S.Input>
        </S.Field>

        <S.Field>
          <S.Label>title</S.Label>
          <S.Input>
            <input
              type="text"
              value={temporaryEvent.title}
              autoFocus
              onChange={(e) => {
                setTemporaryEvent((prev) => ({
                  ...prev,
                  title: e.target.value,
                }));
              }}
            />
          </S.Input>
        </S.Field>
      </S.Content>

      <ModalFooter clickCancel={ignore} clickSave={save} />
    </S.Container>
  );
};

export default CalendarAdder;
