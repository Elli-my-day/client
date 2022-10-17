import React from 'react';
import Link from 'next/link';
import ListItem from '@/components/ListItem';
import useNavOpen from '@/hooks/useNavOpen';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import { CgMinimizeAlt } from 'react-icons/cg';
import { VscColorMode } from 'react-icons/vsc';

import * as S from './styles';

const Navigation = () => {
  const { navOpen, handleNavOpen } = useNavOpen();

  return (
    <S.NavigationContainer>
      <S.TopNav>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        <ListItem>
          <Link href="/diary">
            <a className="w-full">일기</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/study">
            <a className="w-full">서재</a>
          </Link>
        </ListItem>
      </S.TopNav>
      <S.BottomNav>
        <S.ButtonsWrapper open={navOpen}>
          <IconButton aria-label="mode">
            <VscColorMode size="20" />
          </IconButton>
          <IconButton onClick={handleNavOpen}>
            <CgMinimizeAlt size="20" />
          </IconButton>
        </S.ButtonsWrapper>

        <S.LoginWrapper>
          <Button aria-label="login">Login</Button>
        </S.LoginWrapper>
      </S.BottomNav>
    </S.NavigationContainer>
  );
};

export default Navigation;
