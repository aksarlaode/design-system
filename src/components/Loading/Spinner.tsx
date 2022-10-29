import React from 'react';

import type { NormalSizes, NormalColors } from './Loading.types';
import { CSS } from 'src/lib/stitches.config';
import { clsx } from './utils';

import {
  StyledSpinner,
  StyledSpinnerContainer,
  StyledSpinnerSpan,
  StyledLoadingLabel,
  SpinnerVariantsProps,
} from './Loading.styles';

interface Props {
  size?: NormalSizes;
  color?: NormalColors;
  textColor?: NormalColors;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;
export type SpinnerProps = Props &
  NativeAttrs &
  SpinnerVariantsProps & { css?: CSS };

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({
  children,
  size,
  color,
  textColor,
  className,
  ...props
}) => {
  const isValidChildren = Array.isArray(children)
    ? children?.length > 1 && children[0] !== undefined
    : children !== undefined;

  const ariaLabel = children && isValidChildren ? '' : 'Loading';

  return (
    <StyledSpinner
      className={clsx('nextui-spinner', className)}
      color={color}
      size={size}
      {...props}
    >
      <StyledSpinnerContainer
        aria-label={ariaLabel}
        className="nextui-spinner-container"
      >
        {[...new Array(12)].map((_, index) => (
          <StyledSpinnerSpan key={`nextui-spinner-${index}`} />
        ))}
      </StyledSpinnerContainer>
      {children && (
        <StyledLoadingLabel color={textColor} size={size}>
          {children}
        </StyledLoadingLabel>
      )}
    </StyledSpinner>
  );
};

export default Spinner;
