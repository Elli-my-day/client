import React from 'react';
import * as S from './styles';

interface IProps {
  content: number; // content
  center: number; // current center index
  index: number;
}

const Slide = ({ center, index, content }: IProps) => {
  const location = () => {
    if (index < center) {
      return 'left';
    } else if (index > center) {
      return 'right';
    } else {
      return 'center';
    }
  };

  return (
    <S.Container location={location()}>
      <div title="date"></div>
      <img src="" alt="background" />
      <div title="summary"></div>
    </S.Container>
  );
};

export default Slide;
