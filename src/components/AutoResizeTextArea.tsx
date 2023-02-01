import React from 'react';
import { TextareaProps, Textarea } from "@chakra-ui/react";
import ResizeTextarea from 'react-textarea-autosize';

console.info('ResizeTextarea: ', ResizeTextarea);

export const AutoResizeTextarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>((props, ref) => {
  return (
    <Textarea 
      as={ResizeTextarea}
      minH='unset'
      ref={ref}
      {...props}
    />
  );
});