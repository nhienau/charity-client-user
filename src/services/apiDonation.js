export async function getDonationByCampaignId(
  campaignId,
  name = "",
  pageNo = 0,
) {
  const params = {
    campaignId,
    name,
    pageNo,
  };
  const queryString = "?" + new URLSearchParams(params).toString();
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/donation/getCampaignDonation${queryString}`,
  );
  const data = await res.json();
  return data;
}
