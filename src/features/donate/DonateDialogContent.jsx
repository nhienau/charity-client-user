import { useUser } from "@/features/authentication/useUser";
import Spinner from "@/ui/Spinner";
import ChooseIdentity from "./ChooseIdentity";
import { useState } from "react";
import DonateMasterForm from "./DonateMasterForm";
import RedirectLogin from "./RedirectLogin";

function DonateDialogContent() {
  const { isLoading, isFetching, user } = useUser();
  const [formState, setFormState] = useState("identify");

  if (isLoading || isFetching)
    return (
      <div className="flex flex-1 flex-col items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  if (user) {
    return <DonateMasterForm setFormState={setFormState} />;
  } else {
    if (formState === "identify") {
      return <ChooseIdentity setFormState={setFormState} />;
    } else if (formState === "display-form") {
      return <DonateMasterForm setFormState={setFormState} />;
    } else if (formState === "require-login") {
      return <RedirectLogin setFormState={setFormState} />;
    }
  }
}

export default DonateDialogContent;
