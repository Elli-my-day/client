import React from 'react';
import Button from '@/components/Button';
import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <div data-testid="logo">로고</div>
      <div>
        <input type="text" placeholder="search" />
        <Button aria-label="change mode">mode</Button>
        <Button aria-label="login">Login</Button>
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
