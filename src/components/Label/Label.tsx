import Text from 'src/components/Typography';
import { usePossibleFormControlState } from '../FormControl';

const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  const { children, ...rest } = props;
  const context = usePossibleFormControlState();
  const contextProps: { id?: string; disabled?: boolean } = {};
  if (context) {
    contextProps.id = `label-${context.formControlId}`;
    contextProps.disabled = context.disabled;
  }
  return (
    <Text
      as="label"
      css={{
        display: 'inline-block',
        cursor: 'pointer',
        userSelect: 'none',
        marginRight: '8px',
        marginBottom: '0px',
        letterSpacing: '0px',
        verticalAlign: 'top',
      }}
      {...contextProps}
      variant="secondary"
      size="1"
      weight="3"
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Label;

export const LabelOptional: React.FC<{ text?: string }> = ({
  text = '(optional)',
}) => (
  <>
    {' '}
    <Text
      as="label"
      css={{
        display: 'inline-block',
        cursor: 'pointer',
        userSelect: 'none',
        marginRight: '8px',
        marginBottom: '0px',
        letterSpacing: '0px',
        verticalAlign: 'top',
      }}
      variant="secondary"
      size="1"
      weight="1"
    >
      {text}
    </Text>
  </>
);
