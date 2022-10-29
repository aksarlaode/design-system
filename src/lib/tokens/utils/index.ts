import type * as Stitches from '@stitches/react';

import backgroundUtils from './background';
import borderUtils from './border';
import marginUtils from './margin';
import paddingUtils from './padding';

const utils = {
  ...paddingUtils,
  ...marginUtils,
  ...backgroundUtils,
  ...borderUtils,

  insetX: (value: any) => ({
    left: value,
    right: value,
  }),
  insetY: (value: any) => ({
    top: value,
    bottom: value,
  }),
  us: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    MozUserSelect: value,
    MsUserSelect: value,
    userSelect: value,
  }),
  dflex: (value: Stitches.PropertyValue<'alignItems'>) => ({
    display: 'flex',
    alignItems: value,
    justifyContent: value,
  }),
  apperance: (value: Stitches.PropertyValue<'appearance'>) => ({
    WebkitAppearance: value,
    MozAppearance: 'none',
    appearance: value,
  }),

  size: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
    height: value,
  }),
};

export { utils };
