import React from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <Input type="text" placeholder="search" />
      <div>
        <Button aria-label="mode">mode</Button>
        <Button aria-label="login">Login</Button>
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
