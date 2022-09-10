import { render, screen } from '@testing-library/react';
import ThemeProvider from '@/context/ThemeProvider';
import Header from '@/components/Header';
import '@testing-library/jest-dom';

const Component = () => {
  return (
    <ThemeProvider>
      <Header></Header>
    </ThemeProvider>
  );
};

describe('Header Component', () => {
  it('should return logo text', () => {
    render(<Component />);

    const logo = screen.getByTestId('logo');

    expect(logo).toHaveTextContent('로고');
  });

  it('should return light mode / dark mode button', () => {
    render(<Component />);

    const modeChangeButton = screen.getByRole('button', {
      name: /change mode/i,
    });

    expect(modeChangeButton).toBeInTheDocument();
  });

  it('should return search bar', () => {
    render(<Component />);

    const searchBar = screen.getByPlaceholderText('search');

    expect(searchBar).toBeInTheDocument();
  });

  it('should return login button', () => {
    render(<Component />);

    const loginButton = screen.getByRole('button', {
      name: /login/i,
    });

    expect(loginButton).toBeInTheDocument();
  });
});
