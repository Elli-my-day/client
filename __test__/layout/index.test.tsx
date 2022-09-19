import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeProvider from '@/context/ThemeProvider';
import Layout from '@/layout/index';
import NavOpenProvider from '@/context/NavOpenProvider';

const setup = () => {
  render(
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
    setup();
    const modeChangeButton = screen.getByRole('button', {
      name: /mode/i,
    });

    expect(modeChangeButton).toBeInTheDocument();
  });

  it('should return search bar', () => {
    setup();
    const searchBar = screen.getByPlaceholderText('search');

    expect(searchBar).toBeInTheDocument();
  });

  it('should return login button', () => {
    setup();
    const loginButton = screen.getByRole('button', {
      name: /login/i,
    });

    expect(loginButton).toBeInTheDocument();
  });
});

describe('Navigation Component', () => {
  it('should return logo text', () => {
    setup();
    const logo = screen.getByTestId('logo');

    expect(logo).toBeInTheDocument();
  });

  it('should return "open" when close button clicked and vice versa', async () => {
    setup();
    const close = screen.getByRole('button', { name: '닫기' });

    await userEvent.click(close);

    const open = screen.getByRole('button', { name: '열기' });

    expect(open).toBeInTheDocument();

    await userEvent.click(open);

    expect(close).toBeInTheDocument();
  });

  it('should return diary', () => {
    setup();
    const diaryList = screen.getByText('일기');

    expect(diaryList).toBeInTheDocument();
  });

  it('should return library', () => {
    setup();
    const libraryList = screen.getByText('도서관');

    expect(libraryList).toBeInTheDocument();
  });
});
