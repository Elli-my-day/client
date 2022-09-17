import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid ${(props) => props.theme.palette.border};
`;
