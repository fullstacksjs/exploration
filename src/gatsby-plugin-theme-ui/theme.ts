import { range } from '@fullstacksjs/toolbox';
import { Theme } from 'theme-ui';

const theme: Theme = {
  colors: {
    primary: {
      __default: 'hsla(150, 80%, 61%, 1)',
    },
    text: {
      __default: '#FFFFFF',
      1: '#A6AFBF',
    },
    background: {
      0: '#242932',
      1: '#313744',
      2: '#383E4D',
      3: '#404859',
    },
  },
  space: range(21).map((i) => i * 5),
  fontSizes: [12, '0.875rem', '1.25rem', '2.625rem', 56, '1rem'],
  borderRadiuses: [4, '50%'],
  fonts: {
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  cards: {
    primary: {
      padding: 6,
      borderRadius: 0,
      border: '1px dashed #d4dded41',
    },
  },
  fontWeights: {
    normal: 500,
    bold: 600,
    heading: 600,
  },
  lineHeights: {
    heading: '1.3',
    lead: '20.42px',
    body: '24px',
  },
  buttons: {
    text: {
      color: 'primary',
      bg: 'transparent',
      textTransform: 'uppercase',
    },
  },
  text: {
    default: {
      fontSize: 1,
      fontWeight: 'normal',
    },
    h1: {
      fontSize: 3,
    },
    heading: {
      fontWeight: 'bold',
    },
    body: {
      fontWeight: 'normal',
      fontSize: 5,
      marginTop: 2,
      marginBottom: 2,
      color: 'text.primary',
      lineHeight: 'body',
    },
    small: {
      fontWeight: 'normal',
      fontSize: 0,
      lineHeight: 'heading',
    },
    lead: {
      fontWeight: 'normal',
      lineHeight: 'lead',
    },
  },
  images: {
    cardAvatar: {
      width: 33,
      borderRadius: '50%',
      border: '2px solid #fff',
    },
  },
  lines: {
    line: {
      color: 'transparent',
      borderBottom: '1px dashed #d4dded41',
      position: 'absolute',
      width: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      margin: 0,
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
