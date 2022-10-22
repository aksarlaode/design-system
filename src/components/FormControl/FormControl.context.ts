import React from 'react';
import { DEFAULT_FORM_STATE } from './FormControl.constants';
import {
  FieldState,
  FormControlBaseProps,
  FormControlState,
  UseFormControlProps,
} from './FormControl.types';

export const FormControlContext = React.createContext<
  | [FormControlState, React.Dispatch<React.SetStateAction<FormControlState>>]
  | undefined
>(undefined);
FormControlContext.displayName = 'FormControlContext';

if (process.env.NODE_ENV !== 'production') {
  FormControlContext.displayName = 'FormControlContext';
}

/**
 * To be use within the supported FormControls (e.g. Input, TextArea, Select, Checkbox, Radio) or in you own form controls.
 * @param the control props
 * @returns [string, FormControlState]  the id to use in the control and form state derived from the props.
 */
export function useFormControl<Props extends UseFormControlProps>({
  id, //: providedId,
  disabled = DEFAULT_FORM_STATE.disabled,
  required = DEFAULT_FORM_STATE.required,
  error = DEFAULT_FORM_STATE.error,
  valid = DEFAULT_FORM_STATE.valid,
  ...props
}: Props): [
  string,
  FormControlState,
  Omit<Props, 'id' | keyof FormControlBaseProps>
] {
  const formControlId = React.useId();
  const context = React.useContext(FormControlContext);

  const resolvedState = React.useMemo(() => {
    let state: FieldState = undefined;
    if (!disabled) {
      if (valid) {
        state = 'valid';
      }
      if (error) {
        state = 'invalid';
      }
    }

    return {
      formControlId,
      disabled,
      required,
      error,
      valid,
      state,
    };
  }, [formControlId, disabled, required, error, valid]);

  React.useLayoutEffect(() => {
    if (context !== undefined) {
      const [, setFormControlSate] = context;
      setFormControlSate(resolvedState);
    }
  }, [context, resolvedState]);

  return [formControlId, resolvedState, props];
}

/**
 * For use in components that can be used outside the FormControl component.
 */
export function usePossibleFormControlState(): FormControlState | undefined {
  const context = React.useContext(FormControlContext);
  return context ? context[0] : undefined;
}

/**
 * For use in internal FormControl components to get the current form control state.
 */
export function useFormControlState(): FormControlState {
  const context = React.useContext(FormControlContext);
  if (context === undefined) {
    throw new Error(`useFormControlState must be used within a FormControl`);
  }
  return context[0];
}
