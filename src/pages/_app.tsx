import type { AppProps } from 'next/app';
import Layout from '@/layout/index';
import ThemeProvider from '@/context/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
