import 'styled-components';
interface IPalette {
  main: string;
  light: string;
  dark: string;
  contrastText?: string;
}

interface ISize {
  header?: string;
  navigation?: string;
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
      border: string;
      action: {
        active: string;
        hover: string;
        selected: string;
        disabled: string;
      };
    };
    borderRadius: (unit: number) => string;
    spacing: (unit: number) => string;
    size: {
      width?: ISize;
      height?: ISize;
    };
  }
}
