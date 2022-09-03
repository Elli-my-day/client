import 'styled-components';
interface IPalette {
  main: string;
  light: string;
  dark: string;
  contrastText?: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark';
    borderRadius?: string;
    palette: {
      common?: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary?: IPalette;
    };
  }
}
