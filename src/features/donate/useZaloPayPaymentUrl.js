import { useQuery } from "@tanstack/react-query";
import { useMultiStepForm } from "@/contexts/MultiStepFormContext";
import { getZaloPayPaymentUrl } from "@/services/apiPayment";

export function useZaloPayPaymentUrl() {
  const { formData } = useMultiStepForm();

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["zalopayPaymentUrl", formData],
    queryFn: () => getZaloPayPaymentUrl(formData),
    throwOnError: true,
  });
  return { isLoading, data, isFetching };
}
