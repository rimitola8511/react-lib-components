import React from 'react';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

const Button: FC<Props> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
