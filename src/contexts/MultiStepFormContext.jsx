import { createContext, useContext, useState } from "react";

const MultiStepFormContext = createContext();

function MultiStepFormProvider({ children, steps }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(steps);
  const [formData, setFormData] = useState({});

  function handleBack() {
    setCurrentStep((s) => s - 1);
  }

  function handleNext() {
    setCurrentStep((s) => s + 1);
  }

  return (
    <MultiStepFormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        totalSteps,
        setTotalSteps,
        formData,
        setFormData,
        handleBack,
        handleNext,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
}

function useMultiStepForm() {
  const context = useContext(MultiStepFormContext);
  if (context === undefined)
    throw new Error(
      "MultiStepFormContext was used outside of MultiStepFormProvider",
    );
  return context;
}

export { MultiStepFormProvider, useMultiStepForm };
