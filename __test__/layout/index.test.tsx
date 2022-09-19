import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  beforeEach(() => {
    render(<Component></Component>);
  });

  it('should return light mode / dark mode button', () => {
    const modeChangeButton = screen.getByRole('button', {
      name: /mode/i,
    });

    expect(modeChangeButton).toBeInTheDocument();
  });

  it('should return search bar', () => {
    const searchBar = screen.getByPlaceholderText('search');

    expect(searchBar).toBeInTheDocument();
  });

  it('should return login button', () => {
    const loginButton = screen.getByRole('button', {
      name: /login/i,
    });

    expect(loginButton).toBeInTheDocument();
  });
});

describe('Navigation Component', () => {
  beforeEach(() => {
    render(<Component></Component>);
  });

  it('should return logo text', () => {
    const logo = screen.getByTestId('logo');

    expect(logo).toBeInTheDocument();
  });

  it('should return "open" when close button clicked and vice versa', async () => {
    const close = screen.getByRole('button', { name: '닫기' });

    await userEvent.click(close);

    const open = screen.getByRole('button', { name: '열기' });

    expect(open).toBeInTheDocument();

    await userEvent.click(open);

    expect(close).toBeInTheDocument();
  });

  it('should return diary', () => {
    const diaryList = screen.getByText('일기');

    expect(diaryList).toBeInTheDocument();
  });

  it('should return library', () => {
    const libraryList = screen.getByText('도서관');

    expect(libraryList).toBeInTheDocument();
  });
});
