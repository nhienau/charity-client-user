import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changePassword as changePasswordApi } from "../../services/apiAuth";

export function useChangePassword() {
  const {
    mutate: changePassword,
    isLoading,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: ({ currentPassword, newPassword }) =>
      changePasswordApi(currentPassword, newPassword),
    onSuccess: () => {
      toast.success("Mật khẩu đã được thay đổi thành công!");
    },
    onError: (err) => {
      if (err.message === "Mật khẩu hiện tại không đúng.") {
        toast.error("Mật khẩu hiện tại không chính xác.");
      } else {
        toast.error("Đổi mật khẩu thất bại. Vui lòng thử lại.");
      }
    },
  });

  return {
    changePassword,
    isLoading,
    isSuccess,
    isError,
  };
}
