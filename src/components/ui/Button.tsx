import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link' | 'dynamic';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  color?: string
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  icon,
  className,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-colors focus:outline-none';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-blue-500 text-blue-600 hover:bg-blue-50',
    link: 'text-blue-600 hover:underline',
    dynamic: `bg-${props.color}-500 text-white hover:bg-${props.color}-700`,
  };
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}  ${sizeStyles[size]} `}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {icon}
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;