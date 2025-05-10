import React from 'react';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange }) => {
  return (
    <React.Fragment>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-8 h-8 border-none cursor-pointer"
        />
        <span className="border border-gray-300 rounded px-2 py-1 pr-8 text-sm text-gray-600">{value}</span>
      </div>
    </React.Fragment>
  );
};

export default ColorPicker;