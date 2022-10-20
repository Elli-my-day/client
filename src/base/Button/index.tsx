import React from 'react';
import * as S from './styles';

interface IProps {
  children: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick, variant = 'contained' }: IProps) => {
  return (
    <S.ButtonContainer variant={variant} onClick={onClick}>
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
