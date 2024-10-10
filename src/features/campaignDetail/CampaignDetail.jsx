import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCampaign } from "@/features/campaignDetail/useCampaign";
import PageNotFound from "@/pages/PageNotFound";
import CampaignHeadline from "./CampaignHeadline";
import DonationInfo from "./DonationInfo";
import Spinner from "@/ui/Spinner";
import CampaignPost from "./CampaignPost";
import DonationHistory from "../donation/DonationHistory";

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

  const { postId } = data;
  const hasPost = postId !== null;

  return (
    <>
      <div className="mb-6 grid grid-cols-12 gap-6">
        <CampaignHeadline campaign={data} />
        <div className="order-1 col-span-12 md:order-2 md:col-span-6 lg:col-span-8">
          <img
            src="https://placehold.co/960x540?text=test"
            className="aspect-video w-full object-cover object-center"
          />
        </div>
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
