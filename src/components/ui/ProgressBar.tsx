interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
  }
  
  const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
    const progressPercentage = (currentStep / totalSteps) * 100;
  
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;