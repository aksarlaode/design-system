export interface RangeProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'label' | 'as' | 'type'
  > {
  id: string;
  label?: React.ReactNode;
  ['aria-label']: string;
  debounce?: number;
  onChange: (value: number) => unknown;
  value: number;
  min: number;
  max: number;
}
