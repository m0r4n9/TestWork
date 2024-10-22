import './Button.scss';

import * as React from 'react';

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (props, ref) => {
    const { children, iconLeft, className } = props;
    return (
      <button {...props} ref={ref} className={`button-component ${className}`}>
        {iconLeft && <div className='btn-left-icon'>{iconLeft}</div>}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
