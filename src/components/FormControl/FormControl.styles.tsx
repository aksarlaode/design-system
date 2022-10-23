import { styled } from 'src/lib/stitches.config';
import { DEFAULT_TAG } from './FormControl.constants';
import Text from '../Typography';

export const Root = styled(DEFAULT_TAG, {
  // Reset
  boxSizing: 'border-box',
  outline: 'none',

  display: 'flex',
  flexDirection: 'column',
});

export const StyledFormControlText = styled(Text, {
  variants: {
    state: {
      invalid: {
        color: '$error',
      },
      valid: {
        color: '$success',
      },
      disabled: {
        color: '$grey9',
      },
    },
    size: {}, // to avoid ts-error
  },
  defaultVariants: {
    size: '-1',
  },
});
