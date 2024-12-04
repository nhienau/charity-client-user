import ProgressBar from "@/ui/ProgressBar";
import { commafy, formatDate, getTimeDiffStr } from "@/utils/helpers";
import ButtonDonate from "@/features/donate/ButtonDonate";

function DonationInfo({ campaign }) {
  const { closeDate, currentAmount, donationCount, targetAmount, lecturer } =
    campaign;

  const closeDateObj = new Date(closeDate);
  const now = new Date();

  return (
    <div className="order-3 col-span-12 flex flex-col gap-6 md:col-span-6 lg:col-span-4">
      <h2 className="font-bold">Thông tin quyên góp</h2>
      <div>
        <p className="text-sm text-slate-500">Giảng viên phụ trách</p>
        <p className="font-bold">{lecturer.name}</p>
      </div>
      <div className="flex flex-col gap-2">
        <span>
          <span className="text-2xl font-bold">{commafy(currentAmount)} đ</span>{" "}
          <span className="text-sm text-slate-500">
            {" "}
            / {commafy(targetAmount)} đ
          </span>
        </span>
        <ProgressBar current={currentAmount} target={targetAmount} />
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-slate-500">Lượt quyên góp</p>
            <p className="font-bold">{donationCount}</p>
          </div>
          {currentAmount >= targetAmount ? (
            <p className="text-sm text-slate-500">Đã đạt mục tiêu</p>
          ) : (
            <div>
              <p className="text-sm text-slate-500">Thời hạn</p>
              <p className="font-bold">
                {getTimeDiffStr(closeDateObj, now, "Đã đóng")}
              </p>
              <p>{formatDate(closeDate)}</p>
            </div>
          )}
        </div>
      </div>
      {now < closeDateObj && currentAmount < targetAmount && (
        <ButtonDonate campaign={campaign} />
      )}
    </div>
  );
}

export default DonationInfo;
