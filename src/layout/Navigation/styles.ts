import styled from 'styled-components';
import tw from 'twin.macro';

export const NavigationContainer = styled.div`
  ${tw`w-full h-screen flex flex-col justify-between items-start 
	sticky top-0 border-r border-gray-300`}
`;

export const TopNav = styled.div`
  ${tw`w-full`}
`;

export const LogoWrapper = styled.div`
  ${tw`w-full h-20 flex justify-between items-center p-2`}
`;

export const ListLink = styled.a<{ open: boolean }>`
  ${tw`w-full flex justify-center items-center`}
  ${({ open }) => open && tw`justify-start`}
`;

export const BottomNav = styled.div`
  ${tw`w-full`}
`;

export const ButtonsWrapper = styled.div<{ open: boolean }>`
  ${tw`flex justify-around items-center p-2`}
  ${({ open }) => !open && tw`flex-col`}
`;

export const LoginWrapper = styled.div`
  ${tw`w-full h-20 border-t border-gray-300`}
`;
