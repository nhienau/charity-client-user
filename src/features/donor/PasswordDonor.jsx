import { useForm } from "react-hook-form";
import FormRow from "@/ui/FormRow";
import Input from "@/ui/Input";
import { useUser } from "@/features/authentication/useUser";
import { useChangePassword } from "@/features/authentication/useChangPassword";

const PasswordDonor = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const { user } = useUser();
  const { id } = user;
  const { defaultName } = user;
  const { phone_number } = user;
  const newpassword = watch("newPassword");
  const { changePassword, isLoading } = useChangePassword();

  const onSubmit = (data) => {
    const { currentPassword, newPassword } = data;
    changePassword({ currentPassword, newPassword });
  };

  return (
    <div className="mx-auto my-0 flex max-w-sm items-center justify-center rounded-lg border-[1px] border-solid border-slate-300 bg-white p-8 shadow-sm shadow-slate-200">
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-left text-2xl font-bold">Đổi mật khẩu</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <FormRow label="Mã sinh viên">
              <Input
                disabled
                value={`${id}`}
                type="text"
                name="mssv"
                id="mssv"
              />
            </FormRow>
            <FormRow label="Họ tên">
              <Input
                disabled
                value={`${defaultName}`}
                type="text"
                name="fullname"
                id="fullname"
              />
            </FormRow>
            <FormRow label="Số điện thoại">
              <Input
                disabled
                value={`${phone_number}`}
                type="text"
                name="sdt"
                id="sdt"
              />
            </FormRow>
            <FormRow
              label="Mật khẩu hiện tại"
              error={errors?.currentPassword?.message}
            >
              <Input
                type="password"
                name="currentPassword"
                placeholder="Mật khẩu hiện tại"
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
                placeholder="Mật khẩu mới"
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
                placeholder="Xác nhận mật khẩu mới"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Vui lòng xác nhận mật khẩu mới",
                  validate: (value) =>
                    value === newpassword || "Mật khẩu không khớp",
                })}
              />
            </FormRow>
          </div>
          <div className="mt-2 flex items-center justify-center">
            <button className="flex min-w-28 items-center justify-center rounded-md border-[1px] border-solid border-slate-300 px-4 py-2 transition-colors hover:bg-slate-600 hover:text-slate-200">
              Cập nhật mật khẩu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordDonor;
