import React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  children: React.ReactNode;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
}

const Paper = ({ children, display, justifyContent, alignItems, width, height }: IProps) => {
  return (
    <StyledDiv
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
      height={height}
    >
      {children}
    </StyledDiv>
  );
};

const StyledDiv = styled.div<
  Pick<IProps, 'display' | 'justifyContent' | 'alignItems' | 'width' | 'height'>
>`
  display: ${(props) => props?.display};
  justify-content: ${(props) => props?.justifyContent};
  align-items: ${(props) => props?.alignItems};
  padding: ${(props) => props.theme.spacing(1)};
  background: ${(props) => props.theme.palette.background.paper};
`;

export default Paper;
