import React from 'react';
import Input from './Input';
import Button from './Button';

interface InviteCardProps {
  email: string;
  role: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRoleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onRemove?: () => void;
}

const InviteCard: React.FC<InviteCardProps> = ({ email, role, onEmailChange, onRoleChange, onRemove }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 flex items-center gap-4">
      <Input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Enter email address"
        className="flex-1"
      />
      <select
        value={role}
        onChange={onRoleChange}
        className="border rounded-lg px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="owner">Owner</option>
        <option value="eventManager">Event Manager</option>
        <option value="coach">Coach</option>
      </select>
      {onRemove && (
        <Button variant="secondary" className="p-2" onClick={onRemove}>
          🗑️
        </Button>
      )}
    </div>
  );
};

export default InviteCard;