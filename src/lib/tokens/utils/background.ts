import type * as Stitches from '@stitches/react';

const backgroundUtils = {
  bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),
  linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  radialGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `radial-gradient(${value})`,
  }),
  bgClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
};

export default backgroundUtils;
