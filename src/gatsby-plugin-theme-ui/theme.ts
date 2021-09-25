import { range } from '@fullstacksjs/toolbox';
import { Theme } from 'theme-ui';

const theme: Theme = {
  colors: {
    primary: {
      __default: 'hsla(150, 80%, 61%, 1)',
    },
    text: {
      __default: '#FFFFFF',
    },
    background: {
      0: '#242932',
      1: '#313744',
      2: '#383E4D',
      3: '#404859',
    },
  },
  space: range(21).map((i) => i * 4),
  fontSizes: [12, '0.875rem', '1.25rem', '2.625rem', 56],
  fonts: {
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    normal: 500,
    bold: 600,
    heading: 600,
  },
  lineHeights: {
    heading: '1.3',
  },
  text: {
    default: {
      fontSize: 1,
      fontWeight: 'normal',
    },
    h1: {
      fontSize: 3,
    },
  },
  breakpoints: ['576px', '768px', '992px', '1200px', '1440px'],
  layout: {
    container: {
      maxWidth: ['100%', '540px', '720px', '960px', '1170px', '1440px'],
    },
  },
};

export default theme;
