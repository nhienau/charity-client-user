import { useUser } from "@/features/authentication/useUser";
import Spinner from "./Spinner";
import { NavLink } from "react-router-dom";
import DropdownUser from "./DropdownUser";

function ButtonLogin() {
  const { isLoading, user, isFetching } = useUser();

  console.log(user);

  if (isLoading || isFetching) {
    return <Spinner />;
  } else if (user == null) {
    return (
      <NavLink to="/login" title="Đăng nhập">
        Đăng nhập
      </NavLink>
    );
  } else {
    return <DropdownUser />;
  }
}

export default ButtonLogin;
