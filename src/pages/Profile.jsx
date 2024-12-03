import ChangePasswordForm from "@/features/profile/ChangePasswordform";
import UserInfo from "@/features/profile/UserInfo";

function Profile() {
  return (
    <div className="page bg-slate-50">
      <section className="mx-auto my-0 max-w-6xl px-4 py-5">
        <div className="mx-auto my-0 flex max-w-md flex-col gap-8 rounded-lg border-[1px] border-solid border-slate-300 bg-white p-8 shadow-sm shadow-slate-200">
          <UserInfo />
          <ChangePasswordForm />
        </div>
      </section>
    </div>
  );
}

export default Profile;
