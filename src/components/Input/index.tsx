import React from 'react';
import type { InputType } from './type';
import * as S from './styles';

interface IProps {
  type?: InputType;
  placeholder?: string;
}

const Input = ({ type, placeholder }: IProps) => {
  return (
    <S.InputContainer>
      <input type={type} placeholder={placeholder} />
    </S.InputContainer>
  );
};

export default Input;
