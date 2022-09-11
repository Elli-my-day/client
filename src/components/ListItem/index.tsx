import React from 'react';
import HoverEffect from 'src/base/HoverEffect';
import * as S from './styles';

interface IProps {
  children: React.ReactNode;
  height?: string;
}

const ListItem = ({ children, height = '1.6rem' }: IProps) => {
  return (
    <S.Container height={height}>
      <HoverEffect />
      {children}
    </S.Container>
  );
};

export default ListItem;
