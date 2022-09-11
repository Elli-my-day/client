import { HoverEffect } from '@/base/HoverEffect';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => `${props.theme.spacing(1)} ${props.theme.spacing(1.5)}`};
  margin: 0;
  outline: 0;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius(1)};
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  position: relative;
  ${HoverEffect}
`;
