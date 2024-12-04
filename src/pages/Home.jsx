import CampaignList from "@/features/campaign/CampaignList";
import CampaignSearch from "@/features/campaign/CampaignSearch";
import Hero from "@/ui/Hero";
import { useRef } from "react";

function Home() {
  const campaignsRef = useRef(null);

  function scrollCallback() {
    campaignsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="page bg-slate-50">
      <Hero scrollCallback={scrollCallback} />
      <section ref={campaignsRef} className="mx-auto my-0 max-w-6xl px-4 py-5">
        <CampaignSearch />
        <div className="flex flex-col gap-4">
          <CampaignList />
        </div>
      </section>
    </div>
  );
}

export default Home;
