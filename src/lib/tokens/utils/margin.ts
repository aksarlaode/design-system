import type * as Stitches from '@stitches/react';
import { createUtil } from './create';

type Margin = Stitches.PropertyValue<'margin'>;

const marginUtils = {
  mt: createUtil<Margin>(['marginTop']),
  mr: createUtil<Margin>(['marginRight']),
  mb: createUtil<Margin>(['marginBottom']),
  ml: createUtil<Margin>(['marginLeft']),
  mx: createUtil<Margin>(['marginLeft', 'marginRight']),
  my: createUtil<Margin>(['marginTop', 'marginBottom']),
  spaceX: createUtil<Margin>(
    ['marginLeft'],
    '& > :not([hidden])~:not([hidden])'
  ),
  spaceY: createUtil<Margin>(
    ['marginTop'],
    '& > :not([hidden])~:not([hidden])'
  ),
};

export default marginUtils;
