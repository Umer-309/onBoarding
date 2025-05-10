import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../store";
import { saveProgress, setCurrentStep } from "../../store/onboardingSlice";

interface FooterProps {
  next?: string;
}
const Footer: React.FC<FooterProps>= ({next}) => {
  const { currentStep, totalSteps } = useSelector(
    (state: RootState) => state.onboarding
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stepToRoute: Record<number, string> = {
    1: '/',
    2: '/event-operator-setup',
    3: '/business-introduction',
    4: '/payment-setup',
    5: '/team-invitations',
    6: '/assignment-completed'
  };

  const handleBack = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      const prevRoute = stepToRoute[prevStep] || '/';
      navigate(prevRoute);
    }
  };

  const handleSaveProgress = () => {
    dispatch(saveProgress());
    alert("Progress saved!");
  };

  const handleContinue = () => {
    const nextStep = currentStep + 1;
    const nextRoute = stepToRoute[nextStep] || '/';
    navigate(nextRoute);
  };
if (currentStep <= 2) return null;
  return (
    <div className="w-full p-4 bg-white shadow bottom-0">
      <div className="flex justify-between">
        <Button variant="link" className="text-gray-600" onClick={handleSaveProgress}>
          Save and Continue Later
        </Button>
        <Button variant="primary" onClick={handleContinue}>
          {next}
        </Button>
      </div>
    </div>
  );
};

export default Footer;
