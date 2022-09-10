import React from 'react';
import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderContainer display="flex" justifyContent="space-between" alignItems="center">
      <div data-testid="logo">로고</div>
      <div>
        <input type="text" placeholder="search" />
        <button aria-label="change mode">mode</button>
        <button aria-label="login">Login</button>
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
