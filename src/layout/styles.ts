import styled from 'styled-components';
import tw from 'twin.macro';

export const LayoutContainer = styled.div`
  ${tw`w-full h-full relative flex`}
`;

export const SideWrapper = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? '20rem' : '6rem')};
  transition: width 150ms;
`;

export const MainWrapper = styled.div`
  ${tw`w-full h-screen max-w-full max-h-full flex flex-1 overflow-x-hidden relative`}
`;
