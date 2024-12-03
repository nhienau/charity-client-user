import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changePassword as changePasswordApi } from "../../services/apiAuth";

export function useChangePassword() {
  const { mutate: changePassword, isPending } = useMutation({
    mutationFn: ({ currentPassword, newPassword }) =>
      changePasswordApi(currentPassword, newPassword),
    onSuccess: () => {
      toast.success("Thay đổi mật khẩu thành công.");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    changePassword,
    isPending,
  };
}
