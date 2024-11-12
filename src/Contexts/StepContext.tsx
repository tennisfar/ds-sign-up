import React, { createContext, useContext, useState } from 'react';

type StepContextProviderProps = {
  children: React.ReactNode;
};

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | null;
type Steps = number | null;

type StepContext = {
  step: Step;
  steps: Steps;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
  setSteps: React.Dispatch<React.SetStateAction<Steps>>;
};

export const StepContext = createContext<StepContext | null>(null);

export default function StepContextProvider({ children }: StepContextProviderProps) {
  const [step, setStep] = useState<Step>(null);
  const [steps, setSteps] = useState<Steps>(7);

  return (
    <StepContext.Provider
      value={{
        step,
        steps,
        setStep,
        setSteps,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export function useStepContext() {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStepContext must be used within a StepContextProvider');
  }
  return context;
}
