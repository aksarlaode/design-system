import { FormControlState } from './FormControl.types';

export const DEFAULT_TAG = 'div';

export const DEFAULT_FORM_STATE: FormControlState = {
  formControlId: '',
  error: false,
  disabled: false,
  required: undefined,
  valid: false,
  state: undefined,
};
