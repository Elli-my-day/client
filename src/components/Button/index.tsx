import React from 'react';
import HoverEffect from '@/base/HoverEffect';
import * as S from './styles';

interface IProps {
  children?: React.ReactNode;
}

const Button = ({ children }: IProps) => {
  return (
    <S.ButtonContainer>
      <HoverEffect />
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
