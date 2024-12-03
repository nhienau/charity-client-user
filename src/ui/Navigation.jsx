import { NavLink } from "react-router-dom";
import ButtonLogin from "./ButtonLogin";

function Navigation() {
  return (
    <nav className="mx-auto my-0 flex h-16 max-w-6xl items-center justify-between px-4 py-2">
      <div className="flex gap-6">
        <NavLink to="/" title="Trang chủ">
          Home
        </NavLink>
        <NavLink to="/donation-search" title="Trang chủ">
          Tra cứu quyên góp
        </NavLink>
      </div>
      <ButtonLogin />
    </nav>
  );
}

export default Navigation;
