import { useMultiStepForm } from "@/contexts/MultiStepFormContext";
import DonateForm from "./DonateForm";
import DonateQr from "./DonateQr";

function DonateMasterForm({ setFormState }) {
  const { currentStep } = useMultiStepForm();

  return (
    <div className="grow md:flex md:items-center md:justify-center">
      {currentStep === 1 && <DonateForm setFormState={setFormState} />}
      {currentStep === 2 && <DonateQr />}
    </div>
  );
}

export default DonateMasterForm;
