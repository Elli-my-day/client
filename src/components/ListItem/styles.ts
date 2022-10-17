import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div<{ height: string }>`
  height: ${(props) => props.height};
  ${tw`w-full relative flex items-center cursor-pointer hover:bg-gray-100 p-4`}
`;
