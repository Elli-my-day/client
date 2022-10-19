import React from 'react';
import * as S from './styles';

interface IProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ children, onClick }: IProps) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};

export default IconButton;
