import type { CSS } from '../../lib/stitches.config';
import type { LoadingContainerVariantsProps } from './Loading.styles';

export const tuple = <T extends string[]>(...args: T) => args;

const normalSizes = tuple('xs', 'sm', 'md', 'lg', 'xl');

export const normalColors = tuple(
  'primary',
  'secondary',
  'tertiary',
  'info',
  'danger',
  'success',
  'warning'
);

export const normalLoaders = tuple(
  'default',
  'points',
  'points-opacity',
  'gradient',
  'spinner'
);

export type NormalColors = typeof normalColors[number];
export type NormalSizes = typeof normalSizes[number];
export type NormalLoaders = typeof normalLoaders[number];

interface Props {
  size?: NormalSizes;
  gradientBackground?: string | null;
  type?: NormalLoaders;
  loadingCss?: CSS;
  as?: keyof JSX.IntrinsicElements;
}

const defaultProps = {
  size: 'md' as NormalSizes,
  type: 'default' as NormalLoaders,
};

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;

export type LoadingProps = Props &
  NativeAttrs &
  LoadingContainerVariantsProps & { css?: CSS };
