export type TextInputTypes =
  | 'email'
  | 'password'
  | 'search'
  | 'text'
  | 'url'
  | 'number';

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: TextInputTypes;
  label?: React.ReactNode;
  value?: string;
  //id: string;
  ['aria-label']: string;
  //onChange?: React.FormEventHandler<HTMLInputElement>;
  onValueChange?: (value: string) => void;
  enterKeyHint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send'
    | undefined;
}
