import { useUser } from "../authentication/useUser";

function UserInfo() {
  const { user } = useUser();
  const { id, defaultName } = user;

  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-left text-2xl font-bold">Thông tin cá nhân</h1>

      <div className="grid grid-cols-[6rem_1fr] gap-2">
        <span>Tài khoản</span>
        <span>{id}</span>
        <span>Họ và tên</span>
        <span>{defaultName}</span>
      </div>
    </div>
  );
}

export default UserInfo;
