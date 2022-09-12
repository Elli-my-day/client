import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
`;

export const SideWrapper = styled.div<{ open: boolean }>`
  width: ${(props) =>
    props.open
      ? props.theme.size.width?.navigationOpend
      : props.theme.size.width?.navigationClosed};
  transition: width 150ms;
`;

export const MainWrapper = styled.div`
  flex: 1;
`;

export const HeaderWrapper = styled.div`
  height: ${(props) => props.theme.size.height?.header};
  position: sticky;
  top: 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
