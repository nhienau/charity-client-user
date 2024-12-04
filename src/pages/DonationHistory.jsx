import DonationFilter from "@/features/donation/DonationFilter";
import DonationList from "@/features/donation/DonationList";

function DonationHistory() {
  return (
    <div className="page bg-slate-50">
      <section className="mx-auto my-0 max-w-6xl px-4 py-5">
        <DonationFilter />
        <div className="flex flex-col gap-4">
          <DonationList />
        </div>
      </section>
    </div>
  );
}

export default DonationHistory;
