import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw`flex flex-col w-screen p-4 sm:w-96 p-0`}
`;

export const Content = styled.div``;

export const Field = styled.div`
  ${tw`flex items-center mb-4`}
`;

export const Label = styled.div`
  ${tw`w-1/5 text-gray-color-darker text-xl`}
`;

export const Input = styled.div<{ disabled?: boolean }>`
  ${tw`w-4/5`}

  input {
    ${tw`
		w-full border border-gray-color-dark rounded-lg px-2 py-4 
		hover:border-gray-color-darker
		read-only:border-gray-color-dark read-only:select-none read-only:pointer-events-none
		focus:outline-none
		`}
  }
`;
