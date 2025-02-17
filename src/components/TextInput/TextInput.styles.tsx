import { styled } from 'src/lib/stitches.config';

export const StyledInput = styled('input', {
  $$padding: '8px 40px 8px 16px',
  $$border: 'var(--laodeaksar-form-input-border)',
  $$background: 'var(--laodeaksar-form-input-background)',

  appearance: 'none',

  width: '$full',
  outline: 'none',
  position: 'relative',
  display: 'block',
  margin: 0,
  padding: '$$padding',
  cursor: 'text',

  fontSize: '$2',
  fontFamily: 'inherit',
  lineHeight: '26px',
  color: 'var(--laodeaksar-colors-typeface-primary)',

  borderRadius: '$1',
  border: '1px solid $$border',
  background: '$$background',

  transition: 'border-color 0.3s, box-shadow 0.3s',

  '&::placeholder': {
    color: 'var(--laodeaksar-colors-typeface-tertiary)',
    opacity: 0.5,
  },

  '&::-webkit-autofill': {
    background: 'transparent',
  },

  '&:disabled': {
    $$background: 'var(--laodeaksar-form-input-disabled)',
    cursor: 'not-allowed',
    opacity: 0.65,

    '& + label': {
      cursor: 'not-allowed',
    },
  },

  variants: {
    variant: {
      email: {
        $$padding: '8px 16px 8px 40px',
      },

      password: {},
      search: {},
      text: {},
      url: {},
      number: {},
    },
  },
});

export const StyledInputWrapper = styled('div', {
  $$stroke: 'var(--laodeaksar-form-input-border)',
  $$shadow: 'none',

  display: 'inline-block',
  position: 'relative',
  width: '$full',

  $$primary: '0 2px 20px -2px var(--laodeaksar-form-input-focus)',

  svg: {
    display: 'block',
    position: 'absolute',
    fill: 'none',
    stroke: '$$stroke',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.6,
    transition: 'stroke 0.3s',
  },

  input: {
    boxShadow: '$$shadow',

    '&:not(:placeholder-shown)': {
      '&:not(:disabled)': {
        '&:not(:focus)': {
          '& + svg': {
            $$stroke: 'var(--laodeaksar-form-input-active)',
          },

          '& + button': {
            svg: {
              $$stroke: 'var(--laodeaksar-form-input-active)',
            },
          },
        },
      },
    },
  },

  '&:hover': {
    input: {
      '&:not(:disabled)': {
        $$shadow: '$$primary',
        $$border: 'var(--laodeaksar-form-input-active)',

        '& + svg': {
          $$stroke: 'var(--laodeaksar-form-input-active)',
        },

        '& + button': {
          svg: {
            $$stroke: 'var(--laodeaksar-form-input-active)',
          },
        },
      },
    },
  },

  '&:focus-within': {
    $$border: 'var(--laodeaksar-form-input-active)',
    $$stroke: 'var(--laodeaksar-form-input-active)',
    $$shadow: '$$primary',
  },

  variants: {
    variant: {
      email: {
        svg: {
          top: '12px',
          left: '12px',
        },

        '&.valid': {
          '--at-sign': '150',
          '--at-sign-delay': '0s',
          '--tick': '0',
          '--tick-delay': '0.5s',
          $$stroke: 'hsl(var(--palette-green-65))',
        },
      },

      password: {
        button: {
          position: 'absolute',
          appearance: 'none',
          size: '22px',
          top: '12px',
          right: '14px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '$round',
          outline: 'none',
          transition: 'box-shadow 0.2s',
          padding: '0px',

          '&:focus-visible': {
            boxShadow: '0 0 0 2px var(--laodeaksar-colors-brand)',
          },

          '&:disabled': {
            cursor: 'not-allowed',
          },

          svg: {
            position: 'initial',
          },

          '&.clicked': {
            '--eye': '0',
            '--eye-delay': '0s',
            '--strike': '24',
            '--strike-delay': '0s',
          },
        },
      },

      search: {},
      text: {},
      url: {},
      number: {},
    },
  },
});
