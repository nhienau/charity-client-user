import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCampaign } from "@/features/campaignDetail/useCampaign";
import PageNotFound from "@/pages/PageNotFound";
import CampaignHeadline from "./CampaignHeadline";
import DonationInfo from "./DonationInfo";
import Spinner from "@/ui/Spinner";
import CampaignPost from "./CampaignPost";
import DonationHistory from "../donation/DonationHistory";
import CampaignImages from "./CampaignImages";

function CampaignDetail() {
  const { isLoading, data, isFetching } = useCampaign();

  if (isLoading || isFetching) {
    return (
      <div className="flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!data || data?.error) {
    return <PageNotFound />;
  }

  const { campaignImage, postId } = data;
  const hasPost = postId !== null;

  return (
    <>
      <div className="mb-6 grid grid-cols-12 gap-6">
        <CampaignHeadline campaign={data} />
        <CampaignImages images={campaignImage} />
        <DonationInfo campaign={data} />
      </div>

      <Tabs defaultValue={hasPost ? "post" : "donation"}>
        <TabsList>
          {hasPost && <TabsTrigger value="post">Câu chuyện</TabsTrigger>}
          <TabsTrigger value="donation">Lịch sử quyên góp</TabsTrigger>
        </TabsList>
        {hasPost && (
          <TabsContent value="post">
            <CampaignPost postId={postId} />
          </TabsContent>
        )}
        <TabsContent value="donation">
          <DonationHistory />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default CampaignDetail;
