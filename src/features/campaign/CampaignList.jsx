import { useCampaigns } from "@/features/campaign/useCampaigns";
import CampaignItem from "@/features/campaign/CampaignItem";
import PaginationGroup from "@/ui/PaginationGroup";
import Spinner from "@/ui/Spinner";
import SearchBar from "@/ui/SearchBar";

function CampaignList() {
  const { isLoading, data: campaigns, isFetching } = useCampaigns();

  if (isLoading || isFetching)
    return (
      <div className="flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  const { content } = campaigns;

  if (content.length === 0) {
    return <p className="text-center">Không tìm thấy chiến dịch</p>;
  }

  return (
    <>
      <SearchBar
        queryParamKey="query"
        pageParamKey="page"
        inputPlaceholder="Tìm kiếm chiến dịch..."
        isLoading={isLoading || isFetching}
      />
      <div className="mb-4 flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {content?.map((campaign) => (
          <CampaignItem campaign={campaign} key={campaign.id} />
        ))}
      </div>
      <PaginationGroup pageInfo={campaigns} />
    </>
  );
}

export default CampaignList;
