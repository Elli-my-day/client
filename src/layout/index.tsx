import Header from '@/layout/Header';
import Navigation from '@/layout/Navigation';
import useNavOpen from '@/hooks/useNavOpen';
import React from 'react';
import * as S from './styles';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { navOpen, handleNavOpen } = useNavOpen();

  return (
    <S.PageContainer>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      {navOpen ? (
        <S.NavigationWrapper>
          <Navigation />
        </S.NavigationWrapper>
      ) : (
        <></>
      )}

      <S.MainWrapper>
        <button onClick={handleNavOpen}>nav</button>
        {children}
      </S.MainWrapper>
    </S.PageContainer>
  );
};

export default Layout;
