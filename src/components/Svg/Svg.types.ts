import type { ComponentProps } from 'react';
import type { CSS } from 'src/lib/stitches.config';
import { DEFAULT_TAG } from './Svg.constants';
import type { SvgVariants } from './Svg.styles';

export type SvgProps = Omit<ComponentProps<typeof DEFAULT_TAG>, 'fr'> &
  CSS &
  SvgVariants & {
    /** Add a title to the svg */
    title?: string;
    /** Add the given svg path  */
    path?: string;
    /**
     * The fr attribute defines the radius of the focal point for the radial gradient.
     *
     * Forced optional due to ts bug
     */
    fr?: string;
  };
