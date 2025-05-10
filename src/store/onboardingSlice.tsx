import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TeamMember {
    email: string;
    role: string;
    name: string;
    status: string;
  }
interface OnboardingState {
  currentStep: number;
  totalSteps: number;
  role: string | null;
  businessData: Record<string, string>;
  branding: Record<string, string>;
  generalInfo: Record<string, string>;
  savedProgress: boolean;
  description: string;
  websiteUrl: string;
  brandColors: Record<string, string>;
  formFields: string[];
  paymentPreference: string | null;
  postPaymentOption: string | null;
  teamMembers: TeamMember[];
}

const initialState: OnboardingState = {
  currentStep: 1,
  totalSteps: 5,
  role: null,
  businessData: {},
  branding: {},
  generalInfo: {},
  savedProgress: false,
  description: "",
  websiteUrl: "",
  brandColors: {
    primary: "#5F5EFB",
    secondary: "#1F2527",
    accent: "#FE5C0B",
  },
  formFields: ["Full Name", "Email Address"],
  paymentPreference: null,
  postPaymentOption: null,
  teamMembers: [{ name: "John Cooper", email: "john@example.com", role: "Owner", status: "Active" },],
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setCurrentStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
    setRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
      state.currentStep = action.payload === "Event Operator" ? 1 : 0;
    },
    setBusinessData(state, action: PayloadAction<Record<string, string>>) {
      state.businessData = action.payload;
      state.currentStep = 2;
    },
    setBranding(state, action: PayloadAction<Record<string, string>>) {
      state.branding = action.payload;
      state.currentStep = 3;
    },
    setGeneralInfo(state, action: PayloadAction<Record<string, string>>) {
      state.generalInfo = action.payload;
      state.currentStep = 4;
    },
    saveProgress(state) {
      state.savedProgress = true;
    },
    resetOnboarding(state) {
      return { ...initialState };
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    setWebsiteUrl(state, action: PayloadAction<string>) {
      state.websiteUrl = action.payload;
    },
    setBrandColors(state, action: PayloadAction<Record<string, string>>) {
      state.brandColors = action.payload;
    },
    setPaymentPreference(state, action: PayloadAction<string>) {
        state.paymentPreference = action.payload;
        state.currentStep = 6;
      },
      setPostPaymentOption(state, action: PayloadAction<string>) {
        state.postPaymentOption = action.payload;
        state.currentStep = 7;
      },
      addTeamMember(state, action: PayloadAction<TeamMember>) {
        state.teamMembers.push(action.payload);
      },
      removeTeamMember(state, action: PayloadAction<number>) {
        state.teamMembers.splice(action.payload, 1);
      },
  },
});

export const {
  setRole,
  setBusinessData,
  setBranding,
  setGeneralInfo,
  saveProgress,
  resetOnboarding,
  setDescription,
  setBrandColors,
  setWebsiteUrl,
  setPaymentPreference,
  setPostPaymentOption,
  addTeamMember,
  removeTeamMember,
  setCurrentStep,
} = onboardingSlice.actions;
export default onboardingSlice.reducer;
