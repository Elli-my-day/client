import React, { useMemo, useState } from 'react';
import Slide from '@/components/Slide';
import * as S from './styles';

const Slider = () => {
  const list = [1, 2, 3, 4, 5];

  const [center, setCenter] = useState(0); // 가운데 오는 index

  const handleClickLeftBtn = () => {
    setCenter((prev) => (prev <= 0 ? prev : prev - 1));
  };

  const handleClickRightBtn = () => {
    setCenter((prev) => (prev + 1 >= list.length ? prev : prev + 1));
  };

  const translate = useMemo(() => center * -40 + 30, [center]);

  const sliderStyle = {
    transform: `translate(${translate}%)`,
  } as const;

  return (
    <S.Container>
      <S.Slider data-testid="slider" style={sliderStyle}>
        {list.map((ele, index) => {
          return <Slide key={ele} center={center} index={index} content={ele} />;
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
