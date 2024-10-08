import Navigation from "@/ui/Navigation";

function Header() {
  return (
    <header className="sticky top-0 z-20 flex-initial border-b-[1px] border-solid border-gray-300 bg-[#fff] text-slate-600">
      <Navigation />
    </header>
  );
}

export default Header;
