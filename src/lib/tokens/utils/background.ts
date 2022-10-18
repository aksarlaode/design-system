import type * as Stitches from '@stitches/react';

const backgroundUtils = {
  bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),
  bgClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
};

export default backgroundUtils;
