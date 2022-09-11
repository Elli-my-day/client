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
    action: {
      active: 'rgba(0, 0, 0, 0.30)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
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
