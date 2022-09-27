import React, { useMemo, useState } from 'react';
import Slide from '@/components/Slide';
import * as S from './styles';
import { IDiary } from '@/types/diary';

const Slider = () => {
  const list: IDiary[] = [
    {
      status: 'sunny',
      date: 20220921,
      image: '',
      summary: 'hi to all, 09 21',
    },
    {
      status: 'cloudy',
      date: 20220922,
      image: '',
      summary: 'hi to all , 09 22',
    },
    {
      status: 'rainy',
      date: 20220923,
      image: '',
      summary: 'hi to all , 09 23',
    },
    {
      status: 'sunny',
      date: 20220924,
      image: '',
      summary: 'hi to all , 09 24',
    },
  ];

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
        {list.map((content, index) => {
          return <Slide key={content.date} center={center} index={index} content={content} />;
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
