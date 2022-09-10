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
    palette: {
      common?: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary?: IPalette;
      background: {
        paper: string;
      };
    };
    borderRadius: (unit: number) => string;
    spacing: (unit: number) => string;
  }
}
