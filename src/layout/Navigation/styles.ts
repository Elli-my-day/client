import styled from 'styled-components';

export const NavigationContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-right: 1px solid ${(props) => props.theme.palette.border};
  position: sticky;
  top: 0;
`;
