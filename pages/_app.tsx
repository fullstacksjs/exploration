import Meta from '../components/Meta';
import theme from '../lib/theme';
import { ThemeProvider } from 'theme-ui';
import GlobalStyles from '../components/GlobalStyles';
import React from 'react';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Meta />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
