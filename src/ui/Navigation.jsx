import { NavLink } from "react-router-dom";
import ButtonLogin from "./ButtonLogin";

function Navigation() {
  return (
    <nav className="mx-auto my-0 flex h-16 max-w-6xl items-center justify-between px-4 py-2">
      <div className="flex items-center gap-5">
        <NavLink to="/" title="Trang chủ">
          <img
            src="SGU-LOGO.png"
            className="aspect-square h-12 w-12 object-contain"
          />
        </NavLink>
        <NavLink to="/donation-search" title="Tra cứu quyên góp">
          Tra cứu quyên góp
        </NavLink>
      </div>
      <ButtonLogin />
    </nav>
  );
}

export default Navigation;
