import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  mode: 'light',
  breakpoints: {
    small: 600,
    medium: 768,
    large: 992,
  },
  palette: {
    primary: {
      main: 'red',
      light: 'blue',
      dark: 'green',
    },
    background: {
      paper: 'white',
    },
    border: 'rgba(0, 0, 0, 0.12)',
    action: {
      active: 'rgba(0, 0, 0, 0.30)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
    },
  },
  borderRadius: (unit) => `${unit * 8}px`,
  spacing: (unit) => `${unit * 8}px`,
  size: {
    width: {
      navigationOpend: '20rem',
      navigationClosed: '8rem',
    },
    height: {
      header: '5.2rem',
    },
  },
};

export default theme;
