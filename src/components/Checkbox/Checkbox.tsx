import Flex from '../Flex';
import Label from '../Label';

import { StyledCheckbox, StyledWrapper } from './Checkbox.styles';
import type { CheckboxProps } from './Checkbox.types';

const Checkbox = (props: CheckboxProps) => {
  const { checked, disabled, id, label, ...rest } = props;

  return (
    <Flex gap={2}>
      <StyledCheckbox
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        aria-checked={checked}
        role="checkbox"
        {...rest}
      />
      {label && <Label htmlFor={id}>{label}</Label>}
    </Flex>
  );
};

export default Checkbox;
