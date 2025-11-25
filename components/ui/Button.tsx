import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'warning';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({ 
  children, 
  variant = 'warning', 
  size = 'md', 
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled = false,
  ...props 
}: ButtonProps) => {
  // Variant styles using design system colors
  const variantStyles = {
    primary: 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] font[--font-primary] text-[var(--color-text-inverse)]',
    secondary: 'bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[var(--color-text-inverse)]',
    outline: 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)]',
    ghost: 'bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]',
    warning: 'bg-[var(--color-warning)] hover:bg-[var(--color-warning-dark)] text-[var(--color-text-inverse)]'
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-5 py-3 text-base gap-3',
    lg: 'px-6 py-4 text-lg gap-4'
  };

  // Base styles
  const baseStyles = 'rounded-[999px] inline-flex justify-center items-center font-semibold font-[--font-primary] leading-6 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]';

  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${widthStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
};

export default Button;
