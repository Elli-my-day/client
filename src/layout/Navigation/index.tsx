import React from 'react';
import ListItem from '@/components/ListItem';
import * as S from './styles';
import useNavOpen from '@/hooks/useNavOpen';
import Logo from '@/components/Logo';

const Navigation = () => {
  const { navOpen, handleNavOpen } = useNavOpen();

  return (
    <S.NavigationContainer>
      <S.LogoWrapper>
        <Logo />
        <button onClick={handleNavOpen}> {navOpen ? '닫기' : '열기'}</button>
      </S.LogoWrapper>

      <ListItem>일기</ListItem>
      <ListItem>도서관</ListItem>
    </S.NavigationContainer>
  );
};

export default Navigation;
