import DonationSearchFilter from "@/features/donationSearch/DonationSearchFilter";
import SearchResultList from "@/features/donationSearch/SearchResultList";

function DonationSearch() {
  return (
    <div className="page bg-slate-50">
      <section className="mx-auto my-0 max-w-6xl px-4 py-5">
        <DonationSearchFilter />
        <div className="flex flex-col gap-4">
          <SearchResultList />
        </div>
      </section>
    </div>
  );
}

export default DonationSearch;
