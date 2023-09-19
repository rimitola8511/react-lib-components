import React  from 'react';
import { IButton } from './types';

const Button = ({ children, ...props }: IButton) => {
  return <button {...props}>{children}</button>;
};

export default Button;
