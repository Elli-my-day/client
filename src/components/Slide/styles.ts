import styled, { css } from 'styled-components';

export const Container = styled.div<{ location: 'center' | 'left' | 'right' }>`
  /* min-width: 30rem; */
  min-width: 40%;
  height: 50%;
  border: 1px solid black;
  ${({ location }) => {
    if (location === 'center') {
      return css`
        transform: scale(1);
      `;
    } else if (location === 'left') {
      return css`
        transform: scale(0.5, 0.8);
        transform-origin: left;
      `;
    } else if (location === 'right') {
      return css`
        transform: scale(0.5, 0.8);
        transform-origin: right;
      `;
    }
  }}
`;
