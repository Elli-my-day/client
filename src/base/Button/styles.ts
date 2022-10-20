import styled from 'styled-components';
import tw from 'twin.macro';

export const ButtonContainer = styled.button<{ variant: 'text' | 'outlined' | 'contained' }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  outline: 0;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  position: relative;
  ${tw`px-6 py-2.5 rounded-lg font-medium text-lg border`}
  ${({ variant }) =>
    variant === 'text' &&
    tw`
			text-gray-color-darker border-transparent
			hover:text-primary-color-dark
	`}
	${({ variant }) =>
    variant === 'outlined' &&
    tw`
			text-primary-color-dark border-primary-color-dark
			hover:text-primary-color-darker hover:border-primary-color-darker
	`}
	${({ variant }) =>
    variant === 'contained' &&
    tw`
			bg-primary-color-dark text-white border-transparent
			hover:bg-primary-color-darker
	`}
`;
