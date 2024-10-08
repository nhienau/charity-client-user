import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MultiStepFormProvider } from "@/contexts/MultiStepFormContext";
import DonateMasterForm from "@/features/donate/DonateMasterForm";

function ButtonDonate({ campaign }) {
  const { name } = campaign;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-lg bg-slate-600 py-3 text-lg font-bold text-slate-100 transition-colors hover:bg-slate-800">
          Quyên góp
        </button>
      </DialogTrigger>
      <DialogContent className="min-h-full min-w-full bg-slate-50 text-slate-800 md:min-h-[25rem] md:min-w-[48rem] md:max-w-[50rem]">
        <DialogHeader>
          <DialogTitle>Quyên góp</DialogTitle>
          <DialogDescription>
            Bạn đang quyên góp cho chiến dịch{" "}
            <span className="font-bold">{name}</span>
          </DialogDescription>
        </DialogHeader>
        <MultiStepFormProvider steps={2}>
          <DonateMasterForm />
        </MultiStepFormProvider>
      </DialogContent>
    </Dialog>
  );
}

export default ButtonDonate;
