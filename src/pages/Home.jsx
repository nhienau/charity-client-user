import CampaignList from "@/features/campaign/CampaignList";
import CampaignSearch from "@/features/campaign/CampaignSearch";

function Home() {
  return (
    <div className="page bg-slate-50">
      <section className="mx-auto my-0 max-w-6xl px-4 py-5">
        <CampaignSearch />
        <CampaignList />
      </section>
    </div>
  );
}

export default Home;
