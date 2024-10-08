import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getDonationByCampaignId } from "@/services/apiDonation";

export function useDonationHistory() {
  const { campaignId } = useParams();
  const [searchParams] = useSearchParams();

  const pageNoParam = Number.parseInt(searchParams.get("donation-page"));
  const pageNo = pageNoParam ? pageNoParam - 1 : 0;

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["campaignDonation", Number(campaignId), pageNo],
    queryFn: () => getDonationByCampaignId(campaignId, pageNo),
    throwOnError: true,
  });
  return { isLoading, data, isFetching };
}
