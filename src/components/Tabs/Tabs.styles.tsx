import * as TabsPrimitive from '@radix-ui/react-tabs';

import { styled } from 'src/lib/stitches.config';

export const Tabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
});

export const List = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
});

export const Trigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  padding: '0.25rem 0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$1',
  borderBottom: '1px solid transparent',
  color: 'currentColor',
  cursor: 'pointer',
  userSelect: 'none',

  '&:first-child': {
    borderTopLeftRadius: 6,
  },

  '&:last-child': {
    borderTopRightRadius: 6,
  },

  '&:hover': {
    color: 'var(--laodeaksar-colors-typeface-primary)',
  },

  '&[data-state="active"]': {
    color: 'var(--laodeaksar-colors-brand)',
    borderColor: 'var(--laodeaksar-colors-brand)',
  },
});

export const Content = styled(TabsPrimitive.Content, {
  borderRadius: '0.5rem',

  'pre:first-child': {
    borderRadius: 0,
    mx: 0,
  },
});
