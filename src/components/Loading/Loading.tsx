import React, { useMemo } from 'react';

import type { LoadingProps } from './Loading.types';

import {
  StyledLoadingContainer,
  StyledLoading,
  StyledLoadingLabel,
} from './Loading.styles';
import Spinner from './Spinner';

const preClass = 'loading';

const Loading: React.FC<React.PropsWithChildren<LoadingProps>> = ({
  children,
  size,
  gradientBackground,
  loadingCss,
  type,
  ...props
}) => {
  const ariaLabel = children ? '' : 'Loading';

  const loadingGradientCSS = useMemo(() => {
    return type === 'gradient' ? { '._2': { bg: gradientBackground } } : {};
  }, [gradientBackground, type]);

  return (
    <StyledLoadingContainer {...props}>
      {type === 'spinner' ? (
        <Spinner size={size}>{children}</Spinner>
      ) : (
        <>
          <StyledLoading
            aria-label={ariaLabel}
            className={`${preClass} ${preClass}-${type}`}
            css={{
              ...(loadingCss as any),
              ...loadingGradientCSS,
            }}
            size={size}
            type={type}
          >
            <i className="_1" />
            <i className="_2" />
            <i className="_3" />
          </StyledLoading>
          {children && (
            <StyledLoadingLabel className={`${preClass}-label`} size={size}>
              {children}
            </StyledLoadingLabel>
          )}
        </>
      )}
    </StyledLoadingContainer>
  );
};

const MemoLoading = React.memo(Loading);

export default MemoLoading;

<Loading size="lg" type="spinner" />;
