import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogout } from "@/features/authentication/useLogout";
import { useUser } from "@/features/authentication/useUser";
import { History, LogOut, User } from "lucide-react";
import { HiChevronDown, HiOutlineUserCircle } from "react-icons/hi2";

function DropdownUser() {
  const { user } = useUser();
  const { logout, isLoading } = useLogout();

  const { defaultName } = user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-between gap-1 rounded-lg border-[1px] border-solid border-slate-300 bg-slate-50 px-2 py-1 shadow-sm">
          <HiOutlineUserCircle className="h-6 w-6" />
          <HiChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-white">
        <DropdownMenuLabel>{defaultName}</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-200" />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Cá nhân</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <History className="mr-2 h-4 w-4" />
          <span>Lịch sử quyên góp</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logout} disabled={isLoading}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Đăng xuất</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownUser;
