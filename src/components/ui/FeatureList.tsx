import React from 'react';
import { FaCheck } from 'react-icons/fa6';

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <FaCheck className="mr-2 text-green-500" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;