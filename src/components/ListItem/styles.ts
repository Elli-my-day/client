import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div<{ height: string }>`
  height: ${(props) => props.height};
  ${tw`w-full relative flex items-center cursor-pointer
	hover:text-primary-color hover:bg-gray-color 
	focus:text-primary-color`}
`;
