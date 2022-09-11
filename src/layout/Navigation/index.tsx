import React from 'react';
import ListItem from '@/components/ListItem';
import * as S from './styles';

const Navigation = () => {
  return (
    <S.NavigationContainer>
      <ListItem>일기</ListItem>
      <ListItem>도서관</ListItem>
    </S.NavigationContainer>
  );
};

export default Navigation;
