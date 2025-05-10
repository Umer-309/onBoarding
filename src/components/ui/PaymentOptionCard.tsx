interface PaymentOptionCardProps {
    name: string;
    logo?: string;
    description: string;
    selected: boolean;
    onClick?: () => void;
    radio?: boolean;
    icon?: React.ReactNode
    children?: React.ReactNode;
    color?: string
    className?: string
  }
  
  const PaymentOptionCard: React.FC<PaymentOptionCardProps> = ({ className,name, logo, description, selected, onClick, icon, radio=true, children }) => {
    return (
      <div
        className={`border rounded-lg p-4 cursor-pointer transition-colors duration-200 ${
          selected ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
        } hover:border-blue-300 ${className}`}
        onClick={onClick}
      >
        <div className="flex justify-between items-center mb-2">
          {logo &&<img src={logo} alt={`${name} logo`} className="w-12 h-12" />}
          {icon && <div className="text-2xl mb-4">{icon}</div>}
          {radio &&<div className="relative">
            <input
              type="radio"
              checked={selected}
              onChange={() => {}}
              className="sr-only"
            />
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selected ? 'border-blue-600' : 'border-gray-300'
              }`}
            >
              {selected && (
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              )}
            </div>
          </div>}
        </div>
        <p className="font-semibold">{name}</p>
        <p className="text-gray-600 text-sm">{description}</p>
        {children}
      </div>
    );
  };
  
  export default PaymentOptionCard;