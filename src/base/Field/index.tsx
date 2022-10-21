import React from 'react';
import * as S from './styles';

interface IProps {
  children: React.ReactNode;
  label: string;
}

const Field = ({ children, label }: IProps) => {
  return (
    <S.FieldContainer>
      <S.LabelContainer>{label}</S.LabelContainer>
      <S.InputContainer>{children}</S.InputContainer>
    </S.FieldContainer>
  );
};

export default Field;
