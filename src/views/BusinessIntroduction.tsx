import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Header from "../components/ui/Header";
import Input from "../components/ui/Input";
import RichTextEditor from "../components/ui/TextEditor";
import ColorPicker from "../components/ui/ColorPicker";
import StaticFormField from "../components/ui/StaticFormField";
import {
  setDescription,
  setWebsiteUrl,
  setBrandColors,
  saveProgress,
  setCurrentStep,
} from "../store/onboardingSlice";
import type { RootState } from "../store";
import React from "react";
import { FaMagic, FaRegCalendar, FaRegClipboard } from "react-icons/fa";

const BusinessIntroduction: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { description, websiteUrl, brandColors } = useSelector(
    (state: RootState) => state.onboarding
  );

  const [colors, setColors] = React.useState({
    primary: "#5F5EFB",
    secondary: "#1F2527",
    accent: "#FE5C0B",
  });

  const { primary, secondary, accent } = colors;

  const handleDescriptionChange = (value: string) => {
    dispatch(setDescription(value));
  };

  const handleGenerateDescription = () => {
    dispatch(
      setDescription(
        "We are a leading sports event organizer, hosting camps and tournaments for athletes of all ages. Our mission is to create memorable experiences and foster a love for sports."
      )
    );
  };

  const handleWebsiteUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setWebsiteUrl(e.target.value));
  };

  const handleColorChange = (key: string, value: string) => {
    dispatch(setBrandColors({ ...brandColors, [key]: value }));
  };

  const handleSubdomainChange = () => {};

  const handleBack = () => {
    navigate("/event-operator-setup");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* <Header currentStep={3} totalSteps={5} onBack={handleBack} /> */}

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Get started by giving your visitors something to look at.
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Step 1: Start Here
            </h2>
            <p className="text-gray-600 mb-4">
              Answer the questions below. Then, well create a social post for
              you to gather and share feedback.
            </p>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              What type of business do you have?
            </h3>
            <select className="border rounded-lg px-3 py-2 w-full mb-4">
              <option value="">Select the product or service</option>
              <option value="sports">Sports Events</option>
              <option value="camps">Camps</option>
            </select>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              What can people expect from your services to offer to past
              experience?
            </h3>
            <RichTextEditor
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Describe your services and what makes them unique..."
            />
            <Button
              variant="primary"
              className="mt-4 w-full flex items-center justify-center gap-2"
              onClick={handleGenerateDescription}
            >
              <FaMagic /> <span>Generate Description</span>
            </Button>
            <div className="border rounded-lg p-4 bg-gray-50  mt-4">
              <h3 className="text-lg font-semibold">Generated Preview</h3>
              <p>
                {description || "Your business description will appear here..."}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Step 2: Fetch your branding elements
          </h2>
          <p className="text-gray-600 mb-4">
            Let's import your existing branding identity to create a consistent
            experience.
          </p>
          <div className="space-y-6 px-16">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Enter your website URL
              </h3>
              <p className="text-gray-600 mb-4">
                We’ll automatically extract your logo, colors, fonts, and more.
              </p>
              <div className="flex justify-between items-center space-x-2 w-full">
                <Input
                  type="text"
                  value=""
                  onChange={() => {}}
                  placeholder="https://your-website.com"
                  disabled
                  parentClassName="flex-1"
                />
                <Button variant="primary" className="flex items-center gap-2">
                  <FaMagic /> <span>Import Branding</span>
                </Button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg mb-6 mt-12" />
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Preview
            </h3>
            <div className="bg-gray-50 mb-4">
              <div className="space-y-6 p-6">
                <div className="flex space-x-6 items-center">
                  <div className="border rounded-lg p-4 bg-white flex items-center justify-center h-32 w-32"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Logo
                    </p>
                    <span className="text-gray-400">
                      Your logo will be used across your entire website
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Brand Colors
                  </p>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-gray-200 rounded" />
                    <div className="w-6 h-6 bg-gray-200 rounded" />
                    <div className="w-6 h-6 bg-gray-200 rounded" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Typography
                  </p>
                  <div className="w-full bg-gray-200 h-4 rounded mb-2" />
                  <div className="w-100 bg-gray-200 h-4 rounded" />
                </div>
              </div>
            </div>
            <p className="text-blue-600 text-sm mt-4">
              Can’t find your branding? You can manually customize everything in
              the next step
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <div className="flex space-x-16 items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-8">
                Step 3: Set up your brand guidelines
              </h1>
              <div className="space-y-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Upload a logo
                </h3>
                <p className="text-gray-600 mb-4">
                  Add a logo to display on your website and checkout pages.
                </p>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 place-content-center text-center h-40">
                  <p className="text-gray-600">
                    Drag & drop or click to upload your logo
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Brand Colors
              </h3>
              <ColorPicker
                value={primary}
                onChange={(color) => setColors({ ...colors, primary: color })}
                label="Primary Color"
              />

              <ColorPicker
                value={secondary}
                onChange={(color) => setColors({ ...colors, secondary: color })}
                label="Secondary Color"
              />

              <ColorPicker
                value={accent}
                onChange={(color) => setColors({ ...colors, accent: color })}
                label="Accent Color"
              />
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg mb-6 mt-12" />
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Live Preview
          </h3>
          <div className="space-y-4">
            <div className="flex  w-full  space-x-4">
              <div className="border border-gray-200 p-3 rounded-lg flex-1">
                <div
                  className="bg-[color:var(--primary-color)] rounded-lg p-4 mb-2"
                  style={{ "--primary-color": primary } as React.CSSProperties}
                />
                <p className="font-bold">
                  Button Color <span className="font-normal">{primary}</span>
                </p>
              </div>
              <div className="border border-gray-200 p-3 rounded-lg flex-1">
                <div
                  className="bg-[color:var(--secondary-color)] rounded-lg p-4 mb-2"
                  style={
                    { "--secondary-color": secondary } as React.CSSProperties
                  }
                />
                <p className="font-bold">
                  Button Hover Color{" "}
                  <span className="font-normal">{secondary}</span>
                </p>
              </div>
              <div className="border border-gray-200 p-3 rounded-lg flex-1">
                <div
                  className="bg-[color:var(--accent-color)] rounded-lg p-4 mb-2"
                  style={{ "--accent-color": accent } as React.CSSProperties}
                />
                <p className="font-bold">
                  Icon Color <span className="font-normal">{accent}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Step 4: General Information
            </h2>
            <Input
              label="Department Name"
              type="text"
              placeholder="Florida State Athletics"
              className="mb-4"
            />
            <Input
              label="Tagline (Optional)"
              type="text"
              placeholder="Enter your department's tagline"
              className="mb-4"
            />
            <Input
              label="Public URL"
              type="text"
              placeholder="playnsports.com/florida-state"
              onChange={handleSubdomainChange}
            />
          </div>
        </div>

        <div className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Step 5: How easy is it to add fields to your order form?
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="border space-y-4 border-gray-200 rounded-lg p-4">
                <div className="flex item-center gap-2">
                  <FaRegClipboard className="text-blue-600 text-2xl" />
                  <p className="font-semibold">Quick Contact Form</p>
                </div>
                <p className="text-gray-600">
                  Simple form to collect basic contact info
                </p>
              </div>
              <div className="border space-y-4 border-gray-200 rounded-lg p-4">
                <div className="flex item-center gap-2">
                  <FaRegCalendar className="text-blue-600 text-2xl" />
                  <p className="font-semibold">Registration Form</p>
                </div>
                <p className="text-gray-600">
                  Detailed form for event or program registration
                </p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Form Fields</h3>
                <Button variant="link" className="" disabled>
                  + Add Field
                </Button>
              </div>
              <div className="space-y-4">
                <StaticFormField label="Full Name" placeholder="John Doe" />
                <StaticFormField
                  label="Email Address"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntroduction;
