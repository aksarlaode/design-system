import React from 'react';
import { DEFAULT_FORM_STATE, DEFAULT_TAG } from './FormControl.constants';
import { FormControlContext, useFormControlState } from './FormControl.context';
import { Root, StyledFormControlText } from './FormControl.styles';
import { FormControlHelpProps, FormControlProps } from './FormControl.types';

export const FormControl = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  FormControlProps
>(({ children }, ref) => {
  const value = React.useState(DEFAULT_FORM_STATE);

  return (
    <FormControlContext.Provider value={value}>
      <Root ref={ref}>{children}</Root>
    </FormControlContext.Provider>
  );
});

FormControl.displayName = 'FormControl';

export const FormControlHelp = ({
  defaultText = '',
  errorText,
  validText,
}: FormControlHelpProps): React.ReactElement => {
  const { formControlId, error, valid, disabled } = useFormControlState();
  const ref = React.useRef<HTMLSpanElement>(null);

  // Similar effect as in Radix-ui label
  React.useEffect(() => {
    if (formControlId) {
      const element = document.getElementById(formControlId);
      const label = ref.current;
      if (label && element) {
        const id = `description-${formControlId}`;
        const getAriaDescribed = () => element.getAttribute('aria-describedby');
        const ariaDescribedBy = [id, getAriaDescribed()]
          .filter(Boolean)
          .join(' ');
        element.setAttribute('aria-describedby', ariaDescribedBy);
        label.setAttribute('id', id);
        return () => {
          /**
           * We get the latest attribute value because at the time that this cleanup fires,
           * the values from the closure may have changed.
           */
          const currentAriaDescribedBy = getAriaDescribed()?.replace(
            formControlId,
            ''
          );
          if (currentAriaDescribedBy === '') {
            element.removeAttribute('aria-describedby');
          } else if (currentAriaDescribedBy) {
            element.setAttribute('aria-describedby', currentAriaDescribedBy);
          }
        };
      }
    }
    return undefined;
  }, [formControlId]);

  const text = React.useMemo(() => {
    if (disabled) {
      return defaultText;
    }
    if (error) {
      if (errorText) {
        return errorText;
      } else {
        return defaultText;
      }
    }
    if (valid) {
      if (validText) {
        return validText;
      }
    }
    return defaultText;
  }, [disabled, error, valid, defaultText, errorText, validText]);

  const state = React.useMemo(() => {
    if (disabled) {
      return 'disabled';
    }
    if (error) {
      if (errorText) {
        return 'invalid';
      } else {
        return undefined;
      }
    }
    if (valid) {
      if (validText) {
        return 'valid';
      }
    }
    return undefined;
  }, [disabled, error, valid, errorText, validText]);

  return (
    <StyledFormControlText ref={ref} state={state}>
      {text}
    </StyledFormControlText>
  );
};
