import { CSS } from '../../lib/stitches.config';

export type FieldState = 'invalid' | 'valid' | undefined;

export interface FormControlBaseProps {
  /** Add to mark an error in the control */
  error: boolean;
  /** Add to mark the control as disabled */
  disabled: boolean;
  /** Add to mark as required */
  required: boolean | undefined;
  /** Add to mark input as valid */
  valid: boolean;
}

export interface UseFormControlProps extends Partial<FormControlBaseProps> {
  /** supply a static id for the control */
  id?: string;
}

export interface FormControlState extends FormControlBaseProps {
  formControlId: string;
  state: FieldState;
}

export type FormControlProps = CSS & {
  children: React.ReactNode;
};

export interface FormControlHelpProps {
  defaultText?: string | null;
  validText?: string | null;
  errorText?: string | null;
}
