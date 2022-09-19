import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
`;

export const Slider = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  transition: transform 150ms;
`;

export const Slide = styled.div<{ middle: boolean }>`
  /* min-width: 30rem; */
  min-width: 40%;
  height: 50%;
  border: 1px solid black;
  ${({ middle }) => {
    if (middle) {
      return css`
        transform: scale(1);
      `;
    } else {
      return css`
        transform: scale(0.8);
      `;
    }
  }}
`;

export const LeftButton = styled.button`
  position: absolute;
  top: 50%;
  left: 5%;
`;

export const RightButton = styled.button`
  position: absolute;
  top: 50%;
  right: 5%;
`;
