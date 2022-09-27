import { NavigationContainer } from './Navigation/styles';
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
  display: flex;
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
  display: grid;
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  overflow-x: hidden;
  display: flex;
`;
