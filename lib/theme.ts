import { range } from '@fullstacksjs/toolbox';
import type { Theme } from 'theme-ui';

const theme: Theme = {
  colors: {
    primary: {
      __default: 'hsla(150, 80%, 61%, 1)',
    },
    text: {
      __default: '#FFFFFF',
      1: '#A6AFBF',
    },
    accent: {
      __default: '#F39F47',
    },
    background: {
      __default: '#383E4D',
      0: '#242932',
      1: '#313744',
      2: '#383E4D',
      3: '#404859',
    },
  },

  space: range(41).map((i) => i * 5),

  fontSizes: [
    '.75rem', // 12px
    '1rem', // 16px
    '1.5rem', // 24px
    '2rem', // 32px
    '3rem', // 48px
  ],

  radii: {
    base: 4,
    circle: '50%',
  },

  fonts: {
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },

  cards: {
    primary: {
      padding: 6,
      borderRadius: 0,
      display: 'flex',
      background: `
        linear-gradient(to right, transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) top/13px 1px repeat-x,
        linear-gradient(transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) right/1px 13px repeat-y,
        linear-gradient(to right, transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) bottom/13px 1px repeat-x,
        linear-gradient(transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) left/1px 13px repeat-y
      `,
    },
  },

  fontWeights: {
    normal: 500,
    heading: 600,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    heading: '1.3',
    lead: '1.25',
    body: '1.5',
  },

  buttons: {
    primary: {
      fontSize: 1,
      fontFamily: 'inherit',
      fontWeight: 'semibold',
      lineHeight: 'lead',
    },

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
      lineHeight: 'body',
    },

    heading: {
      textTransform: 'uppercase',
      fontWeight: 'heading',
    },

    hero: {
      fontSize: 3,
      lineHeight: 1,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },

    h1: {
      fontSize: 3,
      fontWeight: 'semibold',
    },

    heading2: {
      fontSize: [3, 4],
    },

    heading4: {
      fontWeight: 'heading',
      fontSize: 2,
    },

    body: {
      fontWeight: 'normal',
      fontSize: 1,
      color: 'text.primary',
      lineHeight: 'body',
    },

    small: {
      fontWeight: 'normal',
      fontSize: 0,
      lineHeight: 'heading',
    },

    lead: {
      fontWeight: 'semibold',
      lineHeight: 'lead',
      fontSize: 1,
    },
  },

  images: {
    avatar: {
      borderRadius: '50%',
      border: '2px solid #fff',
    },
  },

  sizes: {
    container: '100%',
  },

  breakpoints: ['576px', '768px', '992px', '1200px', '1440px'],

  layout: {
    container: {
      maxWidth: ['100%', '540px', '720px', '960px', '884px'],
    },
  },
};

export default theme;
