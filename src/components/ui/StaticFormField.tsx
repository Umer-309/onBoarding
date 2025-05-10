import { FaTrash } from "react-icons/fa6";
import { MdOutlineDragIndicator } from "react-icons/md";

interface StaticFormFieldProps {
    label: string;
    placeholder: string;
  }
  
  const StaticFormField: React.FC<StaticFormFieldProps> = ({ label, placeholder }) => {
    return (
      <div className="flex justify-between items-center gap-2 border border-gray-200 p-4 rounded-lg">
        <div className="space-y-4">
          <h5>{label}</h5>
          <h4 className="font-bold">{placeholder}</h4>
        </div>
        <div className="flex gap-2 text-gray-500">
          <FaTrash />
          <MdOutlineDragIndicator />
        </div>
      </div>
    );
  };
  
  export default StaticFormField;