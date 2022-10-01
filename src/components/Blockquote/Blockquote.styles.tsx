import { styled } from 'src/lib/stitches.config';

export const StyledBlockquote = styled('blockquote', {
  fontWeight: '$2',
  lineHeight: '$relaxed',
  letterSpacing: '$tight',
  fontSize: '$4',
  color: 'var(--laodeaksar-colors-typeface-secondary)',
  position: 'relative',
  margin: '0 0 24px 0',
  isolation: 'isolate',

  '@lg': {
    fontSize: '$6',
  },

  p: {
    marginBottom: 0,
  },

  cite: {
    letterSpacing: '$normal',
    fontSize: '$2',

    '@lg': {
      fontSize: '$3',
    },
  },

  '&::before': {
    content: 'open-quote',
    position: 'absolute',
    fontSize: '20rem',
    fontWeight: 900,
    fontFamily: 'serif',
    color: 'var(--laodeaksar-colors-typeface-primary)',
    zIndex: '-1',
    left: -15,
    top: -25,

    '@md': {
      left: -85,
      top: -15,
    },

    '@lg': {
      top: 0,
    },
  },

  '.quotation': {
    opacity: 0.1,
    size: 80,
    position: 'absolute',
    left: -15,
    top: -25,

    '@md': {
      left: -85,
      top: -15,
    },

    '@lg': {
      top: 0,
    },
  },
});
