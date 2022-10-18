import React from 'react';

import Label from 'src/components/Label';

import { StyledTextArea } from './TextArea.styles';
import type { TextAreaProps } from './TextArea.types';

const TextArea = React.forwardRef(
  (props: TextAreaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    const {
      id,
      disabled,
      label,
      placeholder,
      value,
      resize,
      rows = 10,
      ...rest
    } = props;

    return (
      <fieldset>
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
        <StyledTextArea
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          resize={resize}
          rows={rows}
          value={value}
          ref={ref}
          {...rest}
        />
      </fieldset>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
