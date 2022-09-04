import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';

interface IProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
