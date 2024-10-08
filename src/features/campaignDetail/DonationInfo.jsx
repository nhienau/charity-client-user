import ProgressBar from "@/ui/ProgressBar";
import { commafy, formatDate, getTimeDiffStr } from "@/utils/helpers";
import ButtonDonate from "@/features/donate/ButtonDonate";

function DonationInfo({ campaign }) {
  const { closeDate, currentAmount, donationCount, targetAmount } = campaign;

  return (
    <div className="order-3 col-span-12 flex flex-col gap-4 md:col-span-6 lg:col-span-4">
      <h2 className="font-bold">Thông tin quyên góp</h2>
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
              {getTimeDiffStr(new Date(closeDate), new Date(), "Đã đóng")}
            </p>
            <p>{formatDate(closeDate)}</p>
          </div>
        )}
      </div>

      {currentAmount < targetAmount && <ButtonDonate campaign={campaign} />}
    </div>
  );
}

export default DonationInfo;
