import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function RedirectLogin({ setFormState }) {
  return (
    <div className="flex grow flex-col gap-4">
      <div className="flex items-center justify-center">
        <NavLink
          to="/login"
          title="Đăng nhập"
          className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5"
        >
          Đăng nhập để tiếp tục
        </NavLink>
      </div>
      <div>
        <button
          type="button"
          className="flex items-center gap-x-2 rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5"
          onClick={() => setFormState("identify")}
        >
          <HiOutlineArrowLongLeft className="h-5 w-5" />
          <span>Trở về</span>
        </button>
      </div>
    </div>
  );
}

export default RedirectLogin;
