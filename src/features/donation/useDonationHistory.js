import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getDonationHistory } from "@/services/apiDonation";

export function useDonationHistory() {
  const [searchParams] = useSearchParams();

  const campaignName = searchParams.get("campaign-name") || "";
  const pageNoParam = Number.parseInt(searchParams.get("page"));
  const pageNo = pageNoParam ? pageNoParam - 1 : 0;
  const fromDateStr = searchParams.get("from") || "";
  const toDateStr = searchParams.get("to") || "";

  const params = {
    campaignName,
    pageNo,
    fromDate: fromDateStr,
    toDate: toDateStr,
  };

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["donationHistory", params],
    queryFn: () => getDonationHistory(params),
    throwOnError: true,
    refetchOnMount: "always",
  });
  return { isLoading, data, isFetching };
}
