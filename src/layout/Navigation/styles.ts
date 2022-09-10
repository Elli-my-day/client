import styled from 'styled-components';

export const NavigationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const NavigationListItem = styled.div`
  width: 100%;
  height: 3rem;
  padding: ${(props) => props.theme.spacing(1)};
  display: flex;
  align-items: center;
`;
