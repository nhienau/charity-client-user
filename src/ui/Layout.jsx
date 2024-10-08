import { Outlet } from "react-router-dom";
import Header from "@/ui/Header";

function Layout() {
  return (
    <>
      <Header />
      <main className="text-slate-800">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
