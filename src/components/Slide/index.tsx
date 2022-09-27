import React from 'react';
import Image from 'next/image';
import { IDiary } from '@/types/diary';
import Status from '@/components/Status';
import * as S from './styles';

interface IProps {
  content: IDiary;
  center: number; // current center index
  index: number;
}

const Slide = ({ center, index, content }: IProps) => {
  const { status, date, image, summary } = content;

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
      <S.Status title="status">
        <Status status={status} />
      </S.Status>
      <S.Date title="date">{date}</S.Date>
      <S.Background>
        <Image src="/images/sky.jpg" alt="background" layout="fill" objectFit="cover"></Image>
      </S.Background>
      <S.Summary title="summary">{summary}</S.Summary>
    </S.Container>
  );
};

export default Slide;
