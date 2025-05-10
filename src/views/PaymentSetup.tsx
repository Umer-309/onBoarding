import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import PaymentOptionCard from "../components/ui/PaymentOptionCard";
import { saveProgress, setCurrentStep } from "../store/onboardingSlice";
import type { RootState } from "../store";
import stripeLogo from "../assets/stripe-logo.png";
import { IoIosInformationCircle } from "react-icons/io";
import { useState } from "react";
import Accordion from "../components/ui/Accordion";
import { FaCalendarAlt, FaGlobe, FaHeadset } from "react-icons/fa";
import Card from "../components/ui/Card";
import { MdMonitor } from "react-icons/md";

interface PaymentOption {
  name: string;
  logo: string;
  description: string;
  selected: boolean;
}

const PaymentSetup: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentOptions, setPaymentOptions] = useState<PaymentOption[]>([
    {
      name: "Play'n Sports",
      logo: stripeLogo,
      description: "Recommended payment solution",
      selected: true,
    },
    {
      name: "Stripe",
      logo: stripeLogo,
      description: "Global payment processing",
      selected: false,
    },
    {
      name: "Square",
      logo: stripeLogo,
      description: "In-person & online payments",
      selected: false,
    },
    {
      name: "PayPal",
      logo: stripeLogo,
      description: "Worldwide payments",
      selected: false,
    },
    {
      name: "Quick",
      logo: stripeLogo,
      description: "Quick payment solutions",
      selected: false,
    },
    {
      name: "I'm not sure",
      logo: stripeLogo,
      description: "Undecided",
      selected: false,
    },
  ]);

  const handleSaveProgress = () => {
    const selectedOption = paymentOptions.find((option) => option.selected);
    dispatch(saveProgress());
    console.log("Selected payment option:", selectedOption);
    alert("Progress saved!");
  };

  const handleContinue = () => {
    const selectedOption = paymentOptions.find((option) => option.selected);
    if (selectedOption) {
      navigate("/team-invitations");
      dispatch(setCurrentStep(5));
    } else {
      alert("Please select a payment option before continuing");
    }
  };

  const handleSkip = () => {
    navigate("/team-invitations");
    dispatch(setCurrentStep(5));
  };

  const handleBack = () => {
    navigate("/business-introduction");
  };

  const handlePaymentOptionSelect = (selectedName: string) => {
    setPaymentOptions((prevOptions) =>
      prevOptions.map((option) => ({
        ...option,
        selected: option.name === selectedName,
      }))
    );
  };

  const commonQuestions = [
    {
      title: "How long does it take to start accepting payments?",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas mollitia harum quod modi ratione? Deleniti, id! Possimus natus eos dolores animi exercitationem inventore impedit corrupti praesentium vitae obcaecati, nostrum magnam repellendus quod officiis velit labore porro omnis non molestias voluptatibus vel cupiditate assumenda. Totam nihil vitae tempore sed voluptatem? Reiciendis.",
    },
    {
      title: "What documents do I need to connect a processor?",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas mollitia harum quod modi ratione? Deleniti, id! Possimus natus eos dolores animi exercitationem inventore impedit corrupti praesentium vitae obcaecati, nostrum magnam repellendus quod officiis velit labore porro omnis non molestias voluptatibus vel cupiditate assumenda. Totam nihil vitae tempore sed voluptatem? Reiciendis.",
    },
    {
      title:
        "Do I have to use a credit card processor? Can I connect multiple payment processors?",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas mollitia harum quod modi ratione? Deleniti, id! Possimus natus eos dolores animi exercitationem inventore impedit corrupti praesentium vitae obcaecati, nostrum magnam repellendus quod officiis velit labore porro omnis non molestias voluptatibus vel cupiditate assumenda. Totam nihil vitae tempore sed voluptatem? Reiciendis.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Connect your payment processors
          </h2>
          <p className="text-gray-600 mb-4">
            Set secure payment methods to start accepting payments from your
            customers.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 ">
                Step 5: Select which payment method you want to use
              </h2>
              <p className="text-sm text-gray-600">
                Estimated setup time: 5 min
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {paymentOptions.map((option) => (
                <PaymentOptionCard
                  key={option.name}
                  name={option.name}
                  logo={option.logo}
                  description={option.description}
                  selected={option.selected}
                  onClick={() => handlePaymentOptionSelect(option.name)}
                />
              ))}
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg mb-4">
              <div className="flex text-yellow-800 items-center gap-2">
                <IoIosInformationCircle />
                <p className="text-yellow-800">What happens if you skip?</p>
              </div>
              <p className="text-gray-700">
                You continue setting up your account, but you won't be able to
                accept payments or create paid events until a payment processor
                is connected.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg mb-6 mt-10" />
            <h3 className="text-lg font-semibold mb-2">
              How would you prefer to handle payment processing?
            </h3>
            <div className="p-4 rounded-lg bg-gray-200">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-600 font-semibold">
                    This helps us understand your setup. Just let us know:
                  </p>
                  <p className="text-gray-600">
                    You can adjust this later if needed. This just helps us
                    personalize your experience.
                  </p>
                </div>
                <div className="flex">
                  <div className="mt-2 ">
                    <input
                      type="checkbox"
                      id="pass-fees"
                      className="mr-2 rounded-full"
                      disabled
                    />
                    <label
                      htmlFor="pass-fees"
                      className="text-gray-600 text-nowrap"
                    >
                      Pass to Customer
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="checkbox"
                      id="absorb-fees"
                      className="mr-2 rounded-full"
                      disabled
                    />
                    <label
                      htmlFor="absorb-fees"
                      className="text-gray-600 text-nowrap"
                    >
                      Absorb Fees
                    </label>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg mt-4 space-y-4">
                <p className="text-gray-600 mt-2 font-semibold">
                  Example Fee Calculations:
                </p>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-2 list-none flex flex-start">
                  <li className="flex-1 space-y-2">
                    <p>$50 ticket + fees passed to customer:</p>{" "}
                    <p className="font-semibold">Customer pays $51.85</p>
                  </li>
                  <li className="flex-1 space-y-2">
                    <p>$50 ticket + fees absorbed:</p>{" "}
                    <p className="font-semibold">Customer pays $50.00</p>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-6 mb-2">
              Common Questions
            </h3>
            <Accordion items={commonQuestions} className="mb-6" />
            <div className="flex gap-4 bg-blue-50 p-6 rounded-lg mt-4">
              <FaHeadset className="text-blue-600 text-4xl" />
              <div className="space-y-2">
                <p className="text-gray-700 font-semibold">
                  {" "}
                  Need help setting up?
                </p>
                <p className="text-gray-700">
                  Get personalized guidance from a Play'n Sports payment expert
                  to help set up your business.
                </p>
                <Button variant="primary" className="mt-2" disabled>
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            You did it! Take a look around
          </h2>
          <p className="text-gray-600 mb-4">
            Everything's ready. Take a look around and start building something
            great.
          </p>
          <div className="flex gap-4">
            <Card
              title="Landing Page"
              icon={<MdMonitor className="text-4xl text-blue-600" />}
              buttonText="Edit Landing Page"
              className="mb-6 flex flex-col flex-1 items-center justify-between"
              onContinue={() => {}}
            >
              <p className="text-gray-600">
                Customize your landing page and make it ready for visitors
              </p>
            </Card>
            <Card
              title="Start Editing Your Event"
              icon={<FaCalendarAlt className="text-4xl text-blue-600" />}
              buttonText="Edit Event"
              className="mb-6 flex flex-col flex-1 items-center justify-between"
              onContinue={() => {}}
            >
              <p className="text-gray-600">
                Set up your event, schedule, and registration
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSetup;
