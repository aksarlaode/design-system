import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { styled, keyframes, Shadows } from 'src/lib/stitches.config';

import Icon from '../Icon';

const slideDown = keyframes({
  from: {
    height: 0,
  },
  to: {
    height: 'var(--radix-accordion-content-height)',
  },
});

const slideUp = keyframes({
  from: {
    height: 'var(--radix-accordion-content-height)',
  },
  to: {
    height: 0,
  },
});

export const Accordion = styled(AccordionPrimitive.Root, {
  borderRadius: 6,
  width: 300,
  backgroundColor: 'var(--laodeaksar-colors-foreground)',
  boxShadow: Shadows[1],
});

export const Item = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopRadius: 4,
  },

  '&:last-child': {
    borderBottomRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: Shadows[1],
  },
});

export const Header = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
});

export const Trigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 15,
  lineHeight: 1,
  color: 'var(--laodeaksar-colors-brand)',
  boxShadow: Shadows[1],

  '&[data-state="closed"]': {
    backgroundColor: 'white',
  },

  '&[data-state="open"]': {
    backgroundColor: 'white',
  },

  '&:hover': {
    backgroundColor: 'var(--laodeaksar-colors-body)',
  },
});

export const Content = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontSize: 15,
  color: 'var(--laodeaksar-colors-typeface-primary)',
  backgroundColor: 'var(--laodeaksar-colors-foreground)',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

export const ContentText = styled('div', {
  padding: '15px 20px',
});

export const Chevron = styled(Icon.Arrow, {
  color: 'var(--laodeaksar-colors-brand)',
  transition: 'rotate 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  //transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',

  '[data-state=open] &': {
    rotate: '180deg',
    //transform: 'rotate(180deg)',
  },
});
