import React from 'react';
import { IDate } from '@/types/calendar';

interface IProps {
  closeModal: () => void;
  start: IDate;
  end: IDate;
}

const CalendarUpdater = ({ closeModal, start, end }: IProps) => {
  return (
    <div>
      <h2>Calendar Adder</h2>
      <div>from : {start}</div>
      <div>to : {end}</div>
      <div>title</div>
      <button>cancel</button>
      <button>ok</button>
    </div>
  );
};

export default CalendarUpdater;
