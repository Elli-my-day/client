import React from 'react';
import * as S from './styles';

interface IProps {
  children: React.ReactNode;
  height?: string;
}

const ListItem = ({ children, height = '4rem' }: IProps) => {
  return <S.Container height={height}>{children}</S.Container>;
};

export default ListItem;
