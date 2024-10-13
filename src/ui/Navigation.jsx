import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="mx-auto my-0 flex h-16 max-w-6xl items-center justify-between px-4 py-2">
      <NavLink to="/" title="Trang chủ">
        Home
      </NavLink>
      <NavLink to="/login" title="Trang chủ">
        Đăng nhập
      </NavLink>
    </nav>
  );
}

export default Navigation;
