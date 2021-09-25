import '@fontsource/rajdhani/500.css';
import '@fontsource/rajdhani/600.css';

import { Global } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={() => ({
      '*': {
        boxSizing: 'border-box',
      },
      p: {
        margin: 0,
      },
      'h1, h2, h3, h4, h5, h6': {
        margin: 0,
      },
      body: {
        fontSize: '14px',
        fontFamily: 'Rajdhani, sans-serif',
        fontWeight: 500,
        margin: 0,
      },
    })}
  />
);

export default GlobalStyles;
