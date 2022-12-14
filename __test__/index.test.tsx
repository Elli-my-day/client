import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import ThemeProvider from '@/context/ThemeProvider';
import '@testing-library/jest-dom';

describe('Home Page', () => {
  it('renders', () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    );
  });
});
