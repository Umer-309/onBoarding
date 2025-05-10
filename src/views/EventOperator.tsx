import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DynamicForm from "../components/forms/DynamicForm";
import Header from "../components/ui/Header";
import { setBusinessData, setCurrentStep } from "../store/onboardingSlice";
import type { RootState } from "../store";
import ProgressBar from "../components/ui/ProgressBar";
import { FaRegEye } from "react-icons/fa6";

const EventOperatorSetup: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const businessData = useSelector(
    (state: RootState) => state.onboarding.businessData
  );

  const fields = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
      placeholder: "Enter first name",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
      placeholder: "Enter last name",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "Enter email address",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      placeholder: "Create password",
      icon: <FaRegEye className="text-gray-400" />,
      
    },
    {
      name: "phone",
      label: "Phone Number (for 2FA)",
      type: "tel",
      required: true,
      placeholder: "Enter phone number",
    },
  ];

  const handleSubmit = (values: Record<string, string>) => {
    dispatch(setBusinessData(values));
    // dispatch(setCurrentStep(3));
    navigate("/business-introduction");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* <Header currentStep={2} totalSteps={5} onBack={handleBack} /> */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Event Operator Setup
        </h2>
        <p className="text-gray-600 mb-6">
          Set up your event operator account by filling in the required fields
        </p>
        <ProgressBar currentStep={2} totalSteps={5} />
        <DynamicForm
          fields={fields}
          initialValues={businessData}
          onSubmit={handleSubmit}
          submitButtonText="Continue"
        />
        <p className="text-gray-500 text-sm mt-8 text-center">
          © 2025 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default EventOperatorSetup;
