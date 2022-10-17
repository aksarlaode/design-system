import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import * as Styled from './Dialog.styles';
import * as TDialog from './Dialog.types';

import Button from '../Button';
import Icon from '../Icon';

const DialogContent = React.forwardRef(
  (props: TDialog.ContentProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { description, title, children } = props;

    return (
      <DialogPrimitive.Portal>
        <Styled.Overlay />
        <Styled.Content {...props} ref={ref}>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Description>{description}</Styled.Description>
          {children}
        </Styled.Content>
      </DialogPrimitive.Portal>
    );
  }
);

DialogContent.displayName = 'DialogContent';

const Dialog = (props: TDialog.Props) => {
  const { children } = props;

  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
};

Dialog.Content = DialogContent;
Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Close = DialogPrimitive.Close;
Dialog.displayName = 'Dialog';

export default Dialog;
