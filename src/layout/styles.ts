import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.theme.size.height?.header};
  position: fixed;
`;

export const NavigationWrapper = styled.div`
  width: ${(props) => props.theme.size.width?.navigation};
  height: ${(props) => `calc(100% - ${props.theme.size.height?.header})`};
  top: ${(props) => props.theme.size.height?.header};
  position: fixed;
`;

export const MainWrapper = styled.div``;
