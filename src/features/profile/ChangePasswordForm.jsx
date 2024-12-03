import { useForm } from "react-hook-form";
import FormRow from "@/ui/FormRow";
import Input from "@/ui/Input";
import Spinner from "@/ui/Spinner";
import { useChangePassword } from "./useChangePassword";

function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {},
  });

  const { changePassword, isPending } = useChangePassword();

  const onSubmit = (data) => {
    const { currentPassword, newPassword } = data;
    changePassword(
      { currentPassword, newPassword },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-left text-2xl font-bold">Đổi mật khẩu</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <FormRow
            label="Mật khẩu hiện tại"
            error={errors?.currentPassword?.message}
          >
            <Input
              type="password"
              name="currentPassword"
              id="currentPassword"
              {...register("currentPassword", {
                required: "Vui lòng nhập mật khẩu hiện tại",
              })}
            />
          </FormRow>
          <FormRow label="Mật khẩu mới" error={errors?.newPassword?.message}>
            <Input
              type="password"
              name="newPassword"
              id="newPassword"
              {...register("newPassword", {
                required: "Vui lòng nhập mật khẩu mới",
              })}
            />
          </FormRow>
          <FormRow
            label="Xác nhận mật khẩu mới"
            error={errors?.confirmPassword?.message}
          >
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Vui lòng xác nhận mật khẩu mới",
                validate: (value, allValues) =>
                  value === allValues.newPassword || "Mật khẩu không khớp",
              })}
            />
          </FormRow>
        </div>
        <div className="mt-2 flex items-center justify-center">
          <button
            className="flex h-[2.625rem] w-full min-w-28 items-center justify-center rounded-md border-[1px] border-solid border-slate-300 px-4 py-2 transition-colors hover:bg-slate-600 hover:text-slate-200 disabled:bg-slate-200 disabled:text-slate-500"
            disabled={isPending}
          >
            {isPending ? <Spinner /> : "Cập nhật"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePasswordForm;
