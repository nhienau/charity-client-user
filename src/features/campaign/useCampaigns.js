import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getCampaigns } from "@/services/apiCampaign";

export function useCampaigns() {
  const [searchParams] = useSearchParams();

  const pageNoParam = Number.parseInt(searchParams.get("page"));
  const pageNo = pageNoParam ? pageNoParam - 1 : 0;

  const query = searchParams.get("query") ?? "";
  const filter = searchParams.get("filter") ?? "opening";

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["campaigns", query, filter, pageNo],
    queryFn: () => getCampaigns(query, filter, pageNo),
    throwOnError: true,
  });
  return { isLoading, data, isFetching };
}
