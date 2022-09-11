import styled from 'styled-components';

export const Container = styled.div<{ height: string }>`
  width: 100%;
  height: ${(props) => props.height};
  position: relative;
  padding: ${(props) => props.theme.spacing(1)};
  display: flex;
  align-items: center;
`;
