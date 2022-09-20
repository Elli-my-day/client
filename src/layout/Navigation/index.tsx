import React from 'react';
import ListItem from '@/components/ListItem';
import * as S from './styles';
import useNavOpen from '@/hooks/useNavOpen';
import Logo from '@/components/Logo';
import Button from '@/components/Button';

const Navigation = () => {
  const { navOpen, handleNavOpen } = useNavOpen();

  return (
    <S.NavigationContainer>
      <S.TopNav>
        <S.LogoWrapper>
          <Logo />
          <button onClick={handleNavOpen}> {navOpen ? '닫기' : '열기'}</button>
        </S.LogoWrapper>
        <ListItem>일기</ListItem>
        <ListItem>도서관</ListItem>
      </S.TopNav>
      <S.BottomNav>
        <Button aria-label="mode">mode</Button>
        <S.LoginWrapper>
          <Button aria-label="login">Login</Button>
        </S.LoginWrapper>
      </S.BottomNav>
    </S.NavigationContainer>
  );
};

export default Navigation;
