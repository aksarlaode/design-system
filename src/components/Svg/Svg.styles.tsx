import { styled, VariantProps } from 'src/lib/stitches.config';
import { DEFAULT_TAG } from './Svg.constants';

export const StyledSvg = styled(DEFAULT_TAG, {
  // Reset
  boxSizing: 'border-box',
  //
  display: 'inline-block',
  flexShrink: 0,
  userSelect: 'none',
  fill: 'currentColor',
  color: 'inherit',
});

export type SvgVariants = VariantProps<typeof StyledSvg>;
