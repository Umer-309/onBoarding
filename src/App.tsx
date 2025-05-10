import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, type RootState } from "./store";
import { setCurrentStep } from "./store/onboardingSlice";
import TeamInvitations from "./views/TeamInvitations";
import Welcome from "./views/Welcome";
import PaymentSetup from "./views/PaymentSetup";
import BusinessIntroduction from "./views/BusinessIntroduction";
import EventOperator from "./views/EventOperator";
import AssignmentCompleted from "./views/AssignmentCompleted";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const routes = [
  { path: "/", step: 1, component: Welcome },
  { path: "/event-operator-setup", step: 2, component: EventOperator },
  {
    path: "/business-introduction",
    step: 3,
    component: BusinessIntroduction,
    next: "Continue to Sports Setup →",
  },
  { path: "/payment-setup", step: 4, component: PaymentSetup },
  { path: "/team-invitations", step: 5, component: TeamInvitations },
  {
    path: "/assignment-completed",
    step: 6,
    component: AssignmentCompleted,
    next: "Home",
  },
];

const AppContent: React.FC = () => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state: RootState) => state.onboarding);
  const location = useLocation();
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("");

  const currentRoute = routes.find((route) => route.path === location.pathname);

  React.useEffect(() => {
    if (currentRoute) {
      dispatch(setCurrentStep(currentRoute.step));
      setButtonText(currentRoute.next ? currentRoute.next : "Save & Continue");
    }
  }, [location.pathname, dispatch, currentRoute]);

  if (!currentRoute) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header next={buttonText} />
      <div className="container mx-auto p-4">
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer next={buttonText} />
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;
