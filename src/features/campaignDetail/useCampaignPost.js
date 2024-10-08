import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCampaignPostContent } from "@/services/apiCampaign";

export function useCampaignPost(postId) {
  const { campaignId } = useParams();
  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["campaign", Number(campaignId), postId],
    queryFn: () => getCampaignPostContent(postId),
    throwOnError: true,
  });
  return { isLoading, data, isFetching };
}
