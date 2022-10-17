import styled from 'styled-components';

export const Container = styled.div<{ height: string }>`
  width: 100%;
  height: ${(props) => props.height};
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
