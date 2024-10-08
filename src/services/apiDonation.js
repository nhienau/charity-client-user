export async function getDonationByCampaignId(campaignId, pageNo = 0) {
  const params = {
    campaignId,
    pageNo,
  };
  const queryString = "?" + new URLSearchParams(params).toString();
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/donation/getCampaignDonation${queryString}`,
  );
  const data = await res.json();
  return data;
}
