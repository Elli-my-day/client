import React from 'react';
import * as S from './styles';

const Navigation = () => {
  return (
    <S.NavigationContainer>
      <S.NavigationListItem>일기</S.NavigationListItem>
      <S.NavigationListItem>도서관</S.NavigationListItem>
    </S.NavigationContainer>
  );
};

export default Navigation;
