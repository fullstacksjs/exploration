import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'theme-ui';

import GlobalStyles from '../components/GlobalStyles';
import Meta from '../components/Meta';
import theme from '../lib/theme';

const App: React.FC<AppProps> = ({
  Component,
  pageProps: { session, dehydratedState, ...pageProps },
}) => {
  const queryClient = React.useMemo(() => new QueryClient(), []);

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
