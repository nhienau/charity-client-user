import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import DonorNameChooser from "./DonorNameChooser";
import Input from "@/ui/Input";
import { useController, useForm } from "react-hook-form";

function DonorNameDialog({
  currentName,
  onNameChosen,
  children,
  phoneNum,
  donorNames,
  nameOption,
  setNameOption,
}) {
  const [name, setName] = useState(currentName ?? {});
  const { data } = donorNames;
  const { register, handleSubmit, control } = useForm({ defaultValues: {} });

  const { field: nameField } = useController({
    name: "newName",
    control,
    rules: {
      validate: (value) =>
        nameOption === "chooser" ||
        (nameOption === "new" && value.trim() !== "") ||
        "Tên không được bỏ trống",
    },
  });

  function onRadioButtonChange(e) {
    setNameOption(e.target.id);
  }

  function onDialogConfirm() {
    if (nameOption === "chooser") {
      onNameChosen(name);
    } else if (nameOption === "new") {
      console.log(nameField?.value);
      onNameChosen({ name: nameField?.value });
    }
  }

  useEffect(
    function () {
      setNameOption(data?.totalElements > 0 ? "chooser" : "new");
    },
    [data, setNameOption],
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-slate-100 sm:max-w-[425px]">
        <form
          onSubmit={handleSubmit(onDialogConfirm)}
          className="flex flex-col gap-2"
        >
          <DialogHeader>
            <DialogTitle>Chọn tên</DialogTitle>
            <DialogDescription>
              Đây là danh sách các tên đã được sử dụng từ những lần quyên góp
              trước. Bạn có thể chọn tên cũ hoặc sử dụng một tên mới.
            </DialogDescription>
          </DialogHeader>
          <div>
            <input
              type="radio"
              name="name-option"
              id="chooser"
              checked={nameOption === "chooser"}
              className="mr-2"
              onChange={onRadioButtonChange}
            />
            <label htmlFor="chooser">Chọn tên có sẵn</label>
          </div>
          {nameOption === "chooser" && (
            <>
              {currentName?.id && (
                <div>
                  <p>
                    Đang chọn:{" "}
                    <span className="font-bold">{currentName.name}</span>
                  </p>
                </div>
              )}
              <DonorNameChooser
                pageParam="donor-name-page"
                queryParam="donor-name-query"
                currentName={currentName}
                setName={setName}
                phoneNum={phoneNum}
              />
            </>
          )}

          <div>
            <input
              type="radio"
              name="name-option"
              id="new"
              checked={nameOption === "new"}
              className="mr-2"
              onChange={onRadioButtonChange}
            />
            <label htmlFor="new">Sử dụng tên mới</label>
          </div>
          {nameOption === "new" && (
            <Input
              name="newName"
              id="newName"
              {...register("newName", {
                validate: (value) =>
                  nameOption === "chooser" ||
                  (nameOption === "new" && value.trim() !== "") ||
                  "Tên không được bỏ trống",
              })}
              defaultValue={nameField.value}
              onChange={nameField.onChange}
              onBlur={nameField.onBlur}
              ref={nameField.ref}
            />
          )}
          <DialogFooter>
            <DialogClose asChild>
              <button
                type="submit"
                className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5 disabled:bg-slate-200 disabled:text-slate-500"
                onClick={onDialogConfirm}
                disabled={
                  (nameOption === "chooser" &&
                    (name === null || !Object.keys(name).length)) ||
                  (nameOption === "new" &&
                    (!nameField.value || nameField.value?.trim() === ""))
                }
              >
                Xác nhận
              </button>
            </DialogClose>
            <DialogClose asChild>
              <button
                type="button"
                className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5"
              >
                Đóng
              </button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DonorNameDialog;
