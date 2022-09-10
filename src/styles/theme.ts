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
};

export default theme;
