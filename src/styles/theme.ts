import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  mode: 'light',
  palette: {
    primary: {
      main: 'red',
      light: 'blue',
      dark: 'green',
    },
    background: {
      paper: 'white',
    },
  },
  borderRadius: (unit) => `${unit * 10}px`,
  spacing: (unit) => `${unit * 8}px`,
  size: {
    width: {
      navigation: '20rem',
    },
    height: {
      header: '5.2rem',
    },
  },
};

export default theme;
