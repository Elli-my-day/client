import styled from 'styled-components';
import tw from 'twin.macro';

export const FieldContainer = styled.div`
  ${tw`flex items-center mb-4`}
`;

export const LabelContainer = styled.div`
  ${tw`w-1/5 text-gray-color-darker text-xl`}
`;

export const InputContainer = styled.div`
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
