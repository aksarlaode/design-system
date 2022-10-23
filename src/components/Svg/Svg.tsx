import React from 'react';
import { DEFAULT_TAG } from './Svg.constants';
import { StyledSvg } from './Svg.styles';
import { SvgProps } from './Svg.types';

const Svg = React.forwardRef<React.ElementRef<typeof DEFAULT_TAG>, SvgProps>(
  ({ title, path, children, ...props }, forwardedRef) => (
    <StyledSvg
      focusable="false"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      {title ? <title>{title}</title> : null}
      {path ? <path d={path} /> : null}
      {children}
    </StyledSvg>
  )
);

Svg.displayName = 'Svg';

export default Svg;
