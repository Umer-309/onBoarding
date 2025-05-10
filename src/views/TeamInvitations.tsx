import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import InviteCard from "../components/ui/InviteCard";
import PaymentOptionCard from "../components/ui/PaymentOptionCard";
import {
  addTeamMember,
  removeTeamMember,
  saveProgress,
  setCurrentStep,
} from "../store/onboardingSlice";
import type { RootState } from "../store";
import React from "react";
import CheckboxList from "../components/ui/CheckboxList";
import TeamMemberRow from "../components/ui/TeamMemberRow";
import TeamInviteForm from "../components/ui/TeamInviteForm";
import { FaBell, FaClipboard, FaEnvelope, FaFileCsv, FaPlug } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";

const TeamInvitations: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentStep, teamMembers } = useSelector(
    (state: RootState) => state.onboarding
  );

  const [inviteEmail, setInviteEmail] = React.useState("");
  const [inviteRole, setInviteRole] = React.useState("Event Manager");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInviteEmail(e.target.value);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInviteRole(e.target.value);
  };

  const handleAddMember = () => {
    if (inviteEmail) {
      const newMember = {
        email: inviteEmail,
        role: inviteRole,
        name: inviteEmail.split("@")[0],
        status: "Active",
      };
      dispatch(addTeamMember(newMember));
      setInviteEmail("");
      alert(`Invited ${inviteEmail} as ${inviteRole}. This is a simulation.`);
    }
  };

  const handleRemoveMember = (index: number) => {
    dispatch(removeTeamMember(index));
  };

  const handleRemoveInvite = () => {
    setInviteEmail("");
  };

  const handleSaveProgress = () => {
    dispatch(saveProgress());
    alert("Progress saved!");
  };

  const handleContinue = () => {
    navigate("/next-step");
    dispatch(setCurrentStep(currentStep + 1));
  };

  const handleSkip = () => {
    navigate("/next-step");
    dispatch(setCurrentStep(4));
  };

  const handleBack = () => {
    navigate("/payment-setup");
  };

  const importOptions = [
    {
      name: "Upload CSV File",
      logo: "https://via.placeholder.com/48?text=CSV",
      description: "Import contacts from a file",
      selected: false,
      color: "blue",
      icon: (
        <FaFileCsv className="text-blue-600 bg-blue-100 p-2 rounded text-4xl" />
      ),
    },
    {
      name: "Paste Contact List",
      logo: "https://via.placeholder.com/48?text=Paste",
      description: "Copy and paste your contact list",
      selected: false,
      color: "purple",
      icon: (
        <FaClipboard className="text-purple-600 bg-purple-100 p-2 rounded text-4xl" />
      ),
    },
    {
      name: "Connect CRM",
      logo: "https://via.placeholder.com/48?text=CRM",
      description: "Import from Google, Salesforce",
      selected: false,
      color: "green",
      icon: (
        <FaPlug className="text-green-600 bg-green-100 p-2 rounded text-4xl" />
      ),
    },
  ];

  const sports = ["Basketball", "Football", "Soccer", "Baseball", "Volleyball"];
  const departments = ["Marketing", "Sales", "Customer", "Gymnasium", "Tennis"];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Step 6: Invite Team Members
          </h2>
          <p className="text-gray-600 mb-4">
            Add team members to help manage your events.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 text-left font-semibold text-gray-700">
                    Members
                  </th>
                  <th className="py-2 text-center font-semibold text-gray-700">
                    Role
                  </th>
                  <th className="py-2 text-center font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="py-2 text-center font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member, index) => (
                  <TeamMemberRow
                    key={index}
                    name={member.name}
                    email={member.email}
                    role={member.role}
                    status={index === 0 ? "Active" : "Pending"}
                    onRemove={() => handleRemoveMember(index)}
                  />
                ))}
              </tbody>
            </table>
            <div className="my-4">
              <TeamInviteForm
                email={inviteEmail}
                role={inviteRole}
                onEmailChange={handleEmailChange}
                onRoleChange={handleRoleChange}
                onAdd={handleAddMember}
                onRemove={handleRemoveInvite}
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Set Your Email Preferences
          </h2>
          <p className="text-gray-600 mb-4">
            Let’s make sure your email is in the loop when someone registers for
            your events.
          </p>
          <div className="">
            <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
              <Input
                label="Default Address"
                type="email"
                placeholder="Enter your email"
                className="w-full"
                disabled
                icon={<FaEnvelope className="text-gray-400" />}
              />
              <p className="font-semibold text-gray-600 text-sm mt-1">
                This will be your default email. If no email is set for
                notification, this email will be used first.
              </p>
              <p className="font-semibold text-gray-600 text-sm mt-1">
                You can change this at any time in your dashboard.
              </p>
            </div>
            <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
              <Input
                label="Notification Email (Optional)"
                type="email"
                placeholder="notifications@example.com"
                className="w-full"
                disabled
              />
              <p className="font-semibold text-gray-600 text-sm mt-1">
                Want to be notified at a different email when someone registers?
                Add it here. Leave blank to use your primary email.
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Leave blank to use your primary email.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <FaBell className="text-blue-600" />
              <p className="text-blue-600 text-sm">
                You can manage additional notification emails and change these
                settings anytime from your dashboard.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Import Your Contacts
          </h2>
          <p className="text-gray-600 mb-4">
            Start building your audience so you're ready to send emails and
            texts with GoCombine.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {importOptions.map((option) => (
                <div key={option.name} className="text-center">
                  <PaymentOptionCard
                    name={option.name}
                    icon={option.icon}
                    description={option.description}
                    selected={option.selected}
                    radio={false}
                    className="h-full space-y-2 text-start"
                  >
                    <Button
                      variant="primary"
                      color={option.color}
                      className={`mt-8 w-full`}
                      disabled
                    >
                      {option.name === "Upload CSV File"
                        ? "Upload File"
                        : option.name === "Paste Contact List"
                        ? "Paste Contacts"
                        : "Connect CRM"}
                    </Button>
                  </PaymentOptionCard>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <div className="flex text-blue-800 items-center gap-2">
                <IoIosInformationCircle />
                <p className="text-blue-800 text-sm">
                  Why import contacts now?
                </p>
              </div>
              <ul className="text-gray-600 text-sm list-disc pl-5 mt-2">
                <li>Ensure contacts are ready for emails or SMS</li>
                <li>Promote new camps or ticket launches</li>
                <li>Keep your audience in the loop — all in one place</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Quick Add Supports
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <CheckboxList title="Popular Sports" items={sports} disabled />
              <CheckboxList title="Departments" items={departments} disabled />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInvitations;
