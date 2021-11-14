import Meta from '../components/Meta';
import theme from '../lib/theme';
import { ThemeProvider } from 'theme-ui';
import GlobalStyles from '../components/GlobalStyles';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Meta />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default App;
