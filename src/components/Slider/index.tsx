import React from 'react';
import * as S from './styles';

const Slider = () => {
  return (
    <S.Container>
      {[1, 2, 3, 4, 5].map((ele) => {
        return <S.Slide key={ele}></S.Slide>;
      })}
    </S.Container>
  );
};

export default Slider;
