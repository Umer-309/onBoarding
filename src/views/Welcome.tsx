import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import WelcomeCard from '../components/ui/WelcomeCard';
import FeatureList from '../components/ui/FeatureList';
import { setCurrentStep, setRole } from '../store/onboardingSlice';
import { FaRegCalendar } from 'react-icons/fa';
import { IoIosPin } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';

const Welcome: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRoleSelect = (role: string) => {
    dispatch(setRole(role));
    if (role === 'Event Operator') {
      navigate('/event-operator-setup');
      dispatch(setCurrentStep(2));
    }
  };

  const eventOperatorFeatures = [
    'Create and publish events',
    'Accept payments',
    'Manage tickets, waivers, attendees',
    'Access marketing tools',
    'Parent dashboards + receipts',
  ];

  const mapSubscriberFeatures = [
    'Be listed on the Play’n Sports map',
    'Show business hours, phone, location',
    'Add your website or booking link',
    'Drive awareness & traffic',
    'No ticketing or payment required',
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2"><span role="img" aria-label="waving hand">👋</span> Welcome! How would you like to use Play’n Sports?</h1>
        <p className="text-gray-600 mb-8">Select an option below to get started</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <WelcomeCard
            title="Event Operator"
            icon={<FaRegCalendar className="text-blue-600 text-2xl" />}
            onContinue={() => handleRoleSelect('Event Operator')}
            className='text-start'
            >
            <p className="mb-4">Host & manage camps or events</p>
            <FeatureList features={eventOperatorFeatures} />
          </WelcomeCard>
          <WelcomeCard
            className='text-start'
            title="Map Subscriber"
            icon={<MdLocationPin className="text-gray-600 text-2xl" />}
            onContinue={() => handleRoleSelect('Map Subscriber')}
          >
            <p className="mb-4">Get discovered by athletes & parents</p>
            <FeatureList features={mapSubscriberFeatures} />
          </WelcomeCard>
        </div>
        <p className="text-gray-500 text-sm mt-8">© 2025 Play’n Sports. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Welcome;