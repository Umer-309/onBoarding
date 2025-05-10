import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  parentClassName?: string;
}

const Input: React.FC<InputProps> = ({ label, error, icon, className, ...props }) => {
  return (
    <div className={`flex flex-col gap-1 ${props.parentClassName}`}>
      {label && <label className="text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <div className="relative">
        <input
          className={`border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? 'border-red-500' : 'border-gray-300'
          } ${className}`}
          {...props}
        />
        {icon && <div className="absolute right-3 top-1/2 transform -translate-y-1/2">{icon}</div>}
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Input;