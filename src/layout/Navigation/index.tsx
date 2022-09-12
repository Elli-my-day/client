import React from 'react';
import ListItem from '@/components/ListItem';
import * as S from './styles';

const Navigation = () => {
  return (
    <S.NavigationContainer>
      <S.LogoWrapper>
        <div data-testid="logo">로고</div>
        <div>닫기</div>
      </S.LogoWrapper>

      <ListItem>일기</ListItem>
      <ListItem>도서관</ListItem>
    </S.NavigationContainer>
  );
};

export default Navigation;
