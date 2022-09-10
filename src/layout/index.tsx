import Header from '@/layout/Header';
import Navigation from '@/layout/Navigation';
import React from 'react';
import * as S from './styles';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <S.PageContainer>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.NavigationWrapper>
        <Navigation />
      </S.NavigationWrapper>
      <S.MainWrapper>{children}</S.MainWrapper>
    </S.PageContainer>
  );
};

export default Layout;
