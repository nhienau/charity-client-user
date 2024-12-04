import { useQuery } from "@tanstack/react-query";
import { getDonorNamesByPhoneNumber } from "@/services/apiDonor";
import { useState } from "react";

export function useDonorNames(phoneNum = "") {
  const [phoneNumber, setPhoneNumber] = useState(phoneNum);

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["donorNames", phoneNumber],
    queryFn: () => getDonorNamesByPhoneNumber(phoneNumber),
    throwOnError: true,
    // staleTime: 0,
    enabled: phoneNumber !== "",
  });
  return { isLoading, data, isFetching, phoneNumber, setPhoneNumber };
}
