import React from 'react';
import * as S from './styles';

interface IProps {
  children?: React.ReactNode;
}

const Button = ({ children }: IProps) => {
  return <S.ButtonContainer>{children}</S.ButtonContainer>;
};

export default Button;
