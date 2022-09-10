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

    const heading = screen.getAllByRole('heading', {
      name: /welcome to next\.j!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
