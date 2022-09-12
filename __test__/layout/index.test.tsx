import { render, screen } from '@testing-library/react';
import ThemeProvider from '@/context/ThemeProvider';
import Layout from '@/layout/index';
import NavOpenProvider from '@/context/NavOpenProvider';

const Component = () => {
  return (
    <ThemeProvider>
      <NavOpenProvider>
        <Layout>
          <div></div>
        </Layout>
      </NavOpenProvider>
    </ThemeProvider>
  );
};

describe('Header Component', () => {
  it('should return light mode / dark mode button', () => {
    render(<Component />);

    const modeChangeButton = screen.getByRole('button', {
      name: /mode/i,
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

describe('Navigation Component', () => {
  it('should return logo text', () => {
    render(<Component />);

    const logo = screen.getByTestId('logo');

    expect(logo).toHaveTextContent('로고');
  });

  it('should return close button', () => {
    render(<Component />);

    const close = screen.getByText('닫기');

    expect(close).toBeInTheDocument();
  });

  it('should return diary', () => {
    render(<Component />);

    const diaryList = screen.getByText('일기');

    expect(diaryList).toBeInTheDocument();
  });

  it('should return library', () => {
    render(<Component />);

    const libraryList = screen.getByText('도서관');

    expect(libraryList).toBeInTheDocument();
  });
});
