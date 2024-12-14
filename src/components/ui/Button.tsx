import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  children, 
  className, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500';
  
  const variants = {
    primary: 'bg-blue-500 text-white px-6 py-3 hover:bg-blue-600',
    secondary: 'bg-gray-100 text-gray-700 px-4 py-2 hover:bg-gray-200',
    icon: 'text-gray-500 hover:text-gray-700 p-2'
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}