import CampaignList from "@/features/campaign/CampaignList";

function Home() {
  return (
    <div className="page bg-slate-50">
      <section className="mx-auto my-0 max-w-6xl px-4 py-5">
        <CampaignList />
      </section>
    </div>
  );
}

export default Home;
