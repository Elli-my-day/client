import React from 'react';
import ListItem from '@/components/ListItem';
import * as S from './styles';
import useNavOpen from '@/hooks/useNavOpen';

const Navigation = () => {
  const { handleNavOpen } = useNavOpen();

  return (
    <S.NavigationContainer>
      <S.LogoWrapper>
        <div data-testid="logo">로고</div>
        <div onClick={handleNavOpen}>닫기</div>
      </S.LogoWrapper>

      <ListItem>일기</ListItem>
      <ListItem>도서관</ListItem>
    </S.NavigationContainer>
  );
};

export default Navigation;
