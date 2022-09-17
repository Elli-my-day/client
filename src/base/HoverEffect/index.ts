import { css } from 'styled-components';

export const HoverEffect = css`
  transition: all 150ms;
  &:hover {
    background-color: ${(props) => props.theme.palette.action.hover};
  }
  &::selection {
    background-color: ${(props) => props.theme.palette.action.selected};
  }
  &:active {
    background-color: ${(props) => props.theme.palette.action.active};
  }
`;
