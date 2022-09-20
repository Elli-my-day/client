import styled from 'styled-components';

export const NavigationContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-right: 1px solid ${(props) => props.theme.palette.border};
  position: sticky;
  top: 0;
`;

export const TopNav = styled.div`
  width: 100%;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.theme.size.height?.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const BottomNav = styled.div`
  width: 100%;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.theme.size.height?.header};
  border: 1px solid black;
`;
