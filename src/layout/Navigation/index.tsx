import React from 'react';
import Link from 'next/link';
import ListItem from '@/components/ListItem';
import useNavOpen from '@/hooks/useNavOpen';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import { CgMinimizeAlt } from 'react-icons/cg';
import { VscColorMode } from 'react-icons/vsc';
import { FiBook } from 'react-icons/fi';
import { HiOutlinePencil } from 'react-icons/hi';
import { AiOutlineCalendar } from 'react-icons/ai';

import * as S from './styles';

const Navigation = () => {
  const { navOpen, handleNavOpen } = useNavOpen();

  return (
    <S.NavigationContainer>
      <S.TopNav>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>

        <ListItem height="5rem">
          <Link href="/diary">
            <S.ListLink open={navOpen}>
              <FiBook size="20" />
              {navOpen && <h2 className="ml-4 text-2xl">일기</h2>}
            </S.ListLink>
          </Link>
        </ListItem>
        <ListItem height="5rem">
          <Link href="/study">
            <S.ListLink open={navOpen}>
              <HiOutlinePencil size="20" />
              {navOpen && <h2 className="ml-4 text-2xl">서재</h2>}
            </S.ListLink>
          </Link>
        </ListItem>
        <ListItem height="5rem">
          <Link href="/calendar">
            <S.ListLink open={navOpen}>
              <AiOutlineCalendar size="20" />
              {navOpen && <h2 className="ml-4 text-2xl">일정</h2>}
            </S.ListLink>
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
