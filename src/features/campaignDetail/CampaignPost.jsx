import Spinner from "@/ui/Spinner";
import { useCampaignPost } from "./useCampaignPost";
import { Markup } from "interweave";

function CampaignPost({ postId }) {
  const { isLoading, data, isFetching } = useCampaignPost(postId);

  if (isLoading || isFetching) {
    return (
      <div className="flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const { content } = data;

  return <Markup content={content} />;
}

export default CampaignPost;
