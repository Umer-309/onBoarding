interface CheckboxListProps {
    title: string;
    items: string[];
    disabled?: boolean;
  }
  
  const CheckboxList: React.FC<CheckboxListProps> = ({ title, items, disabled = false }) => {
    return (
      <div className="border border-gray-300 rounded-lg p-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{title}</label>
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`${title.toLowerCase().replace(' ', '-')}-${index}`}
                className="mr-2"
                disabled={disabled}
              />
              <label htmlFor={`${title.toLowerCase().replace(' ', '-')}-${index}`}>{item}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CheckboxList;