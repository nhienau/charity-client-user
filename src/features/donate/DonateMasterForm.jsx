import { useMultiStepForm } from "@/contexts/MultiStepFormContext";
import DonateForm from "./DonateForm";
import DonateQr from "./DonateQr";
import DonateInstruction from "./DonateInstruction";

function DonateMasterForm() {
  const { currentStep } = useMultiStepForm();

  return (
    <div className="flex flex-1 flex-col gap-4 md:grid md:grid-cols-5 md:items-center md:gap-8">
      <DonateInstruction />
      {currentStep === 1 && <DonateForm />}
      {currentStep === 2 && <DonateQr />}
    </div>
  );
}

export default DonateMasterForm;
