import React from 'react';

import Box from 'src/components/Box';
import Label from 'src/components/Label';

import { AtSignIcon, EyeIcon, Tick } from './TextInputIcons';
import { StyledInput, StyledInputWrapper } from './TextInput.styles';
import type { TextInputProps } from './TextInput.types';
import { validateEmail } from './utils';

const TextInput = React.forwardRef(
  (props: TextInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      id,
      disabled,
      label,
      type = 'text',
      placeholder,
      value,
      ...rest
    } = props;

    const [showPassword, setShowPassword] = React.useState(false);
    const isValid = React.useMemo(() => validateEmail(value || ''), [value]);

    const computedType = React.useCallback(() => {
      if (type === 'password' && showPassword) {
        return 'text';
      }

      return type;
    }, [showPassword, type]);

    return (
      <StyledInputWrapper className={isValid ? 'valid' : ''} variant={type}>
        {label && (
          <Label
            htmlFor={id}
            style={{
              marginBottom: '8px',
            }}
          >
            {label}
          </Label>
        )}
        <Box css={{ position: 'relative' }}>
          <StyledInput
            id={id}
            className={isValid ? 'valid' : ''}
            disabled={disabled}
            // TODO cleanup variants: variants != types
            variant={computedType()}
            type={computedType()}
            placeholder={placeholder}
            value={value}
            ref={ref}
            {...rest}
          />
          {type === 'email' && (
            <>
              <AtSignIcon />
              <Tick />
            </>
          )}

          {type === 'password' && (
            <button
              aria-label="Reveal Password"
              className={showPassword ? 'clicked' : ''}
              disabled={disabled}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <EyeIcon />
            </button>
          )}
        </Box>
      </StyledInputWrapper>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput as (
  props: TextInputProps & { ref?: React.ForwardedRef<HTMLInputElement> }
) => JSX.Element;
