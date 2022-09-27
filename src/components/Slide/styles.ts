import styled, { css } from 'styled-components';

export const Container = styled.div<{ location: 'center' | 'left' | 'right' }>`
  /* min-width: 30rem; */
  min-width: 40%;
  height: 80%;
  border: 1px solid black;
  transition: transform 500ms;
  ${({ location }) => {
    if (location === 'center') {
      return css`
        transform: scale(1);
      `;
    } else if (location === 'left') {
      return css`
        transform: scale(0.5, 0.5);
        transform-origin: left;
      `;
    } else if (location === 'right') {
      return css`
        transform: scale(0.5, 0.5);
        transform-origin: right;
      `;
    }
  }}
  display : flex;
  flex-direction: column;
  align-items: center;
`;

export const Status = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Date = styled.div`
  width: 8rem;
  height: 4rem;
  border: 1px solid black;
  margin-bottom: 2rem;
`;

export const Background = styled.div`
  width: 80%;
  aspect-ratio: 1/1;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
`;

export const Summary = styled.div`
  width: 100%;
  height: 4rem;
  border: 1px solid black;
  margin-bottom: 2rem;
`;
