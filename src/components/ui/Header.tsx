import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../store";
import { setCurrentStep } from "../../store/onboardingSlice";
import { IoIosArrowBack } from "react-icons/io";

interface HeaderProps {
  next?: string;
}
const Header: React.FC<HeaderProps> = ({ next }) => {
  const { currentStep, totalSteps } = useSelector(
    (state: RootState) => state.onboarding
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stepToRoute: Record<number, string> = {
    1: "/",
    2: "/event-operator-setup",
    3: "/business-introduction",
    4: "/payment-setup",
    5: "/team-invitations",
    6: "/assignment-completed",
  };

  const handleBack = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      const prevRoute = stepToRoute[prevStep] || "/";
      navigate(prevRoute);
    }
  };

  const handleContinue = () => {
    const nextStep = currentStep + 1;
    const nextRoute = stepToRoute[nextStep] || "/";
    navigate(nextRoute);
  };

  return (
    <div className="w-full mb-6 p-4 bg-white shadow">
      <div className="flex justify-between items-center">
        <Button
          variant="link"
          onClick={handleBack}
          className="text-blue-600 flex items-center"
          icon={<IoIosArrowBack />}
        >
          Back
        </Button>
        {currentStep === 2 && (
          <span className="text-sm text-gray-600">
            Step {currentStep} of {totalSteps}
          </span>
        )}
        {currentStep >= 3 && (
          <Button
            variant="primary"
            className="p-2 ml-auto"
            onClick={handleContinue}
          >
            {next}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
