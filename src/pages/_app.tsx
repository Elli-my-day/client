import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/layout/index';
import NavOpenProvider from '@/context/NavOpenProvider';
import GlobalStyle from '@/styles/GlobalStyle';
import '@fullcalendar/common/main.css'; // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/daygrid/main.css'; // @fullcalendar/timegrid imports @fullcalendar/daygrid
import '@/styles/global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 300000, // 5 min
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavOpenProvider>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavOpenProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
