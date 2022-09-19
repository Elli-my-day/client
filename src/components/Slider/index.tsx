import React, { useMemo, useState } from 'react';
import * as S from './styles';

const Slider = () => {
  const list = [1, 2, 3, 4, 5];

  const [middle, setMiddle] = useState(0); // 가운데 오는 index

  const handleClickLeftBtn = () => {
    setMiddle((prev) => (prev <= 0 ? prev : prev - 1));
  };

  const handleClickRightBtn = () => {
    setMiddle((prev) => (prev + 1 >= list.length ? prev : prev + 1));
  };

  const translate = useMemo(() => middle * -40 + 30, [middle]);

  const sliderStyle = {
    transform: `translate(${translate}%)`,
  } as const;

  return (
    <S.Container>
      <S.Slider data-testid="slider" style={sliderStyle}>
        {list.map((ele, index) => {
          return (
            <S.Slide key={ele} middle={middle === index}>
              {ele}
            </S.Slide>
          );
        })}
      </S.Slider>
      <S.LeftButton aria-label="slider-left-btn" onClick={handleClickLeftBtn}>
        {'<'}
      </S.LeftButton>
      <S.RightButton aria-label="slider-right-btn" onClick={handleClickRightBtn}>
        {'>'}
      </S.RightButton>
    </S.Container>
  );
};

export default Slider;