import Navigation from '@/layout/Navigation';
import useNavOpen from '@/hooks/useNavOpen';
import React from 'react';
import * as S from './styles';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { navOpen } = useNavOpen();

  return (
    <S.LayoutContainer>
      <S.SideWrapper open={navOpen}>
        <Navigation />
      </S.SideWrapper>
      <S.MainWrapper>{children}</S.MainWrapper>
    </S.LayoutContainer>
  );
};

export default Layout;
