import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-lg font-medium transition-colors',
        {
          'bg-purple-600 text-white hover:bg-purple-700': variant === 'primary',
          'bg-gray-100 text-gray-900 hover:bg-gray-200': variant === 'secondary',
          'text-gray-600 hover:bg-gray-100': variant === 'ghost',
        },
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    />
  );
}