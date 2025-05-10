import React from 'react';
import Button from './Button';

interface TeamMemberRowProps {
  name: string;
  email: string;
  role: string;
  status: string;
  onRemove: () => void;
}

const TeamMemberRow: React.FC<TeamMemberRowProps> = ({ name, email, role, status, onRemove }) => {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-2">
        <div className="font-medium text-gray-900">{name}</div>
        <div className="text-gray-600 text-sm">{email}</div>
      </td>
      <td className="py-2 text-center">
        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">{role}</span>
      </td>
      <td className="py-2 text-center">
        <span className="px-2 py-1 bg-green-100 text-green-800 rounded">{status}</span>
      </td>
      <td className="py-2 text-center">
        <Button variant="secondary" onClick={onRemove}>
          <span className="text-gray-500">x</span>
        </Button>
      </td>
    </tr>
  );
};

export default TeamMemberRow;