import { formatDate } from "@/utils/helpers";

function CampaignHeadline({ campaign }) {
  const { createdAt, description, name } = campaign;

  return (
    <div className="order-2 col-span-12 md:order-1">
      <h1 className="mb-4 pt-2 text-3xl font-bold">{name}</h1>
      <p className="mb-2 text-lg text-slate-600">{description}</p>
      <p className="text-sm text-slate-600">{formatDate(createdAt)}</p>
    </div>
  );
}

export default CampaignHeadline;
