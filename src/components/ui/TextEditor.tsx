import React, { useState } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      className="border rounded-lg px-3 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default RichTextEditor;