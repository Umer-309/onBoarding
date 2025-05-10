import React from "react";
import Button from "./Button";

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  buttonText?: string;
  onContinue?: () => void;
  className?: string;
}

const WelcomeCard: React.FC<CardProps> = ({
  title,
  icon,
  children,
  buttonText,
  onContinue,
  className,
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-200 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="text-gray-600 space-y-2">{children}</div>
      {onContinue && (
        <Button variant="primary" className="w-full mt-6" onClick={onContinue}>
          {buttonText || `Continue as ${title.split(" ")[0]}`}
        </Button>
      )}
    </div>
  );
};

export default WelcomeCard;
