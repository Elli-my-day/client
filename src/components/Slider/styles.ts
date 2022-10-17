import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
`;

export const Slider = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  transition: transform 700ms;
`;

export const LeftButton = styled.button`
  position: absolute;
  top: 50%;
  left: 5%;
`;

export const RightButton = styled.button`
  position: absolute;
  top: 50%;
  right: 5%;
`;

export const Heading = styled.h1`
  ${tw`font-bold text-4xl text-blue-100 font-sans`}
`;
