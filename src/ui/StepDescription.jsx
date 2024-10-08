import { useMultiStepForm } from "@/contexts/MultiStepFormContext";

function StepDescription({ number, description }) {
  const { currentStep } = useMultiStepForm();

  const styles = {
    active: "bg-slate-600 text-slate-100",
    inactive: "bg-slate-300 text-slate-400",
  };

  return (
    <div className="flex flex-none items-center gap-3">
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold ${number <= currentStep ? styles["active"] : styles["inactive"]}`}
      >
        {number}
      </span>
      <span>{description}</span>
    </div>
  );
}

export default StepDescription;
