import React from 'react';

interface VerticalProgressProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
  children: React.ReactNode;
}

const VerticalProgress: React.FC<VerticalProgressProps> = ({ currentStep, totalSteps, steps, children }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200" style={{ top: '0' }} />
      {steps.map((step, index) => (
        <div key={index} className="flex items-center mb-12 relative">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index < currentStep ? 'bg-blue-600 text-white' : index === currentStep - 1 ? 'bg-blue-100 border-2 border-blue-600' : 'bg-gray-200'
            } z-10`}
          >
            {index < currentStep ? '✓' : index + 1}
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-lg font-semibold text-gray-900">{step}</h2>
            {React.Children.map(children, (child, i) => index === i && child)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalProgress;