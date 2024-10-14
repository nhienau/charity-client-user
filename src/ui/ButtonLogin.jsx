import { useUser } from "@/features/authentication/useUser";
import Spinner from "./Spinner";
import { NavLink } from "react-router-dom";
import DropdownUser from "./DropdownUser";

function ButtonLogin() {
  const { isLoading, user, isFetching } = useUser();

  if (isLoading || isFetching) {
    return <Spinner />;
  } else if (user == null) {
    return (
      <NavLink to="/login" title="Trang chủ">
        Đăng nhập
      </NavLink>
    );
  } else {
    return <DropdownUser />;
  }
}

export default ButtonLogin;
