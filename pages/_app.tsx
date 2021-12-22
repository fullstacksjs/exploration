import Meta from '../components/Meta';
import theme from '../lib/theme';
import { ThemeProvider } from 'theme-ui';
import GlobalStyles from '../components/GlobalStyles';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const App: React.FC<AppProps> = ({
  Component,
  pageProps: { session, dehydratedState, ...pageProps },
}) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <SessionProvider session={session}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Meta />
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </ThemeProvider>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
