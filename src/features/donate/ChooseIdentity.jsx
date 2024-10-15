import { ChevronRight } from "lucide-react";
import { HiOutlineUserCircle } from "react-icons/hi2";

function ChooseIdentity({ setFormState }) {
  return (
    <div className="flex flex-1 flex-col items-center md:justify-center">
      <div className="flex flex-col gap-4">
        <p>Bạn là...</p>
        <button
          className="flex max-w-[30rem] items-center justify-between gap-3 rounded-lg border-[1px] border-solid border-slate-300 px-3 py-2 text-left"
          onClick={() => setFormState("require-login")}
        >
          <HiOutlineUserCircle className="h-8 w-8 shrink-0" />
          <div>
            <span className="line-clamp-2 font-bold">
              Sinh viên trường Đại học Sài Gòn
            </span>
            <span className="line-clamp-2 text-sm text-slate-600">
              Đăng nhập bằng tài khoản sinh viên. Bạn vẫn có thể quyên góp ẩn
              danh.
            </span>
          </div>
          <ChevronRight className="h-8 w-8 shrink-0" />
        </button>
        <button
          className="flex max-w-[30rem] items-center justify-between gap-3 rounded-lg border-[1px] border-solid border-slate-300 px-3 py-2 text-left"
          onClick={() => setFormState("display-form")}
        >
          <HiOutlineUserCircle className="h-8 w-8 shrink-0" />
          <span className="line-clamp-2 flex-1 font-bold">Khác</span>
          <ChevronRight className="h-8 w-8 shrink-0" />
        </button>
      </div>
    </div>
  );
}

export default ChooseIdentity;
