import React from 'react';

export interface RadioContextType {
  name: HTMLInputElement['name'];
  onChange: React.FormEventHandler<HTMLInputElement>;
}

export type RadioGroupOptions = {
  direction?: 'vertical' | 'horizontal';
};

export type RadioGroupProps = RadioContextType &
  RadioGroupOptions & {
    children?: React.ReactNode;
    id?: string;
  };

export interface RadioItemProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  id: string;
  ['aria-label']: string;
}
