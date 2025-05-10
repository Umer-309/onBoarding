import React from "react";
import Input from "./Input";
import Button from "./Button";
import { MdOutlineMailOutline } from "react-icons/md";

interface TeamInviteFormProps {
  email: string;
  role: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRoleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onAdd: () => void;
  onRemove: () => void;
}

const TeamInviteForm: React.FC<TeamInviteFormProps> = ({
  email,
  role,
  onEmailChange,
  onRoleChange,
  onAdd,
  onRemove,
}) => {
  return (<React.Fragment>
    <div className="flex items-center space-x-2 py-2">
      <Input
        type="email"
        icon={<MdOutlineMailOutline className="text-gray-500" />}
        value={email}
        onChange={onEmailChange}
        placeholder="Enter their email"
        parentClassName="flex-2"
      />
      <select
        value={role}
        onChange={onRoleChange}
        className="border rounded-lg px-3 py-2 flex-1"
      >
        <option value="Event Manager">Event Manager</option>
        <option value="Owner">Owner</option>
        <option value="Coach">Coach</option>
      </select>
      <Button variant="link" onClick={() => {}}>
        <span className="text-red-500">×</span>
      </Button>
    </div>
      <Button variant="link" onClick={onAdd}>
        + Add Another Team Member
      </Button></React.Fragment>
  );
};

export default TeamInviteForm;
