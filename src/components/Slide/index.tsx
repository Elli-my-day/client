import React from 'react';
import * as S from './styles';

interface IProps {
  key: number;
  content: number; // content
  center: number; // current center index
  index: number;
}

const Slide = ({ key, center, index, content }: IProps) => {
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
    <S.Container key={key} location={location()}>
      {content}
    </S.Container>
  );
};

export default Slide;
