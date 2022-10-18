import { styled } from 'src/lib/stitches.config';

export const StyledAnchor = styled('a', {
  $$color: 'var(--laodeaksar-colors-brand)',
  $$hover: 'var(--laodeaksar-colors-typeface-primary)',

  fontSize: 'inherit',
  lineHeight: 'inherit',
  color: '$$color',
  fontWeight: '$3',
  wordBreak: 'break-word',
  outline: 'none',
  transition: 'border-color 0.3s ease, color 0.3s ease',

  '&:focus': {
    $$color: '$$hover',
    '--hover-translation-distance': 'var(--arrow-translation, 0)',
  },

  '@hover': {
    '&:hover': {
      $$color: '$$hover',
      '--hover-translation-distance': 'var(--arrow-translation, 0)',
    },
  },

  variants: {
    discreet: {
      true: {
        $$color: 'var(--laodeaksar-colors-typeface-tertiary)',
      },
    },
    arrow: {
      left: {
        '--size': '1.1em',
        '--arrow-direction': -1,
        '--arrow-translation': '-0.25em',
        $$hover: 'unset',

        '&:before': {
          content: '""',
          display: 'inline-block',
          verticalAlign: 'middle',
          size: 'var(--size, 1.05em)',
          maskImage: 'var(--icon)',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: 'currentColor',
          marginRight: '0.18em',
          transition: 'transform 0.4s ease',
          transform:
            'translateY(-1px) translateX(var(--hover-translation-distance, 0px)) scaleX(var(--arrow-direction, 1))',
        },
      },
      right: {
        '--size': '1.1em',
        '--arrow-translation': '0.25em',
        '--arrow-direction': 1,
        $$hover: 'unset',

        '&:after': {
          content: '""',
          display: 'inline-block',
          verticalAlign: 'middle',
          size: 'var(--size, 1.05em)',
          maskImage: 'var(--icon)',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: 'currentColor',
          marginLeft: '0.18em',
          transition: 'transform 0.4s ease',
          transform:
            'translateY(-2px) translateX(var(--hover-translation-distance, 0px)) scaleX(var(--arrow-direction, 1))',
        },
      },
    },

    favicon: {
      true: {
        '--size': '1.1em',

        '&:before': {
          content: '""',
          display: 'inline-block',
          verticalAlign: 'middle',
          size: 'var(--size, 1.05em)',
          maskImage: 'var(--icon)',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: 'currentColor',
          marginRight: '0.18em',
          transform: 'translateY(-2px)',
        },
      },
    },

    underline: {
      true: {
        $$border: 'transparent',

        borderBottom: '2px solid',
        borderColor: '$$border',

        $$hover: 'unset',

        '&:focus': {
          $$border: 'hsl(var(--palette-blue-40))',
        },

        '@hover': {
          '&:hover': {
            $$border: 'hsl(var(--palette-blue-40))',
          },
        },
      },
    },

    hastag: {
      true: {
        '--size': '1.1em',
        border: '2px solid currentColor',
        borderRadius: '$0',
        padding: '$1',

        '&:before': {
          content: '""',
          display: 'inline-block',
          verticalAlign: 'middle',
          size: 'var(--size, 1.05em)',
          maskImage: 'var(--icon)',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: 'currentColor',
          marginRight: '0.18em',
          transform: 'translateY(-2px)',
        },
      },
    },
  },
});
