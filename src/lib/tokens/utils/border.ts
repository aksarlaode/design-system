import type * as Stitches from '@stitches/react';

import { createUtil } from './create';

type Radii = Stitches.PropertyValue<'borderRadius'>;

const borderUtils = {
  borderTopRadius: createUtil<Radii>([
    'borderTopLeftRadius',
    'borderTopRightRadius',
  ]),
  borderBottomRadius: createUtil<Radii>([
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ]),
  borderLeftRadius: createUtil<Radii>([
    'borderBottomLeftRadius',
    'borderTopLeftRadius',
  ]),
  borderRightRadius: createUtil<Radii>([
    'borderBottomRightRadius',
    'borderTopRightRadius',
  ]),
};

export default borderUtils;
