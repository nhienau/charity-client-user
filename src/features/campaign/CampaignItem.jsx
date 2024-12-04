import { Link } from "react-router-dom";
import { commafy, getTimeDiffStr } from "@/utils/helpers";
import ProgressBar from "@/ui/ProgressBar";
import OptimizedImage from "@/ui/OptimizedImage";
import { cn } from "@/lib/utils";

function CampaignItem({ campaign }) {
  const {
    id,
    name,
    closeDate,
    currentAmount,
    targetAmount,
    donationCount,
    campaignImage,
  } = campaign;

  const closeDateObj = new Date(closeDate);
  const now = new Date();
  const daysRemain = getTimeDiffStr(closeDateObj, now, "Đã đóng");

  return (
    <div className="flex overflow-hidden rounded-lg border-[1px] border-solid border-slate-300 bg-white shadow-sm shadow-slate-200 transition-shadow hover:shadow-xl">
      <Link
        to={`/campaign/${id}`}
        title={name}
        className="flex w-full flex-col"
      >
        <div className="flex flex-1 flex-col">
          {campaignImage.length === 0 ? (
            <img
              src="placeholder.svg"
              className="aspect-video object-cover object-center"
              alt={name}
            />
          ) : (
            <OptimizedImage
              url={campaignImage[0].url}
              className="aspect-video object-cover object-center"
              alt={name}
            />
          )}
          <div className="flex flex-1 flex-col gap-2 p-5">
            <div className="flex flex-1 flex-col">
              <h2 className="line-clamp-3 text-lg font-bold">{name}</h2>
            </div>
            <div className="mt-auto flex shrink-0 flex-col gap-2">
              {currentAmount !== targetAmount && (
                <div>
                  <span className="rounded-xl bg-slate-200 px-3 py-1 text-xs">
                    {daysRemain}
                  </span>
                </div>
              )}
              <div className="mb-2 flex flex-col gap-1">
                <div>
                  <span className="font-bold">{commafy(currentAmount)} đ</span>
                  <span className="text-gray-500">
                    {" "}
                    / {commafy(targetAmount)} đ
                  </span>
                </div>
                <ProgressBar current={currentAmount} target={targetAmount} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Lượt quyên góp</span>
                  <span className="font-bold">{commafy(donationCount)}</span>
                </div>
                {currentAmount >= targetAmount && (
                  <button
                    className={cn(
                      "rounded-lg border-[1px] border-solid border-slate-700 bg-white px-3 py-1 text-sm font-bold transition-colors",
                      currentAmount >= targetAmount
                        ? "text-slate-400"
                        : "text-slate-800 hover:bg-slate-200",
                    )}
                  >
                    Đạt mục tiêu
                  </button>
                )}
                {currentAmount < targetAmount && now < closeDateObj && (
                  <button
                    className={cn(
                      "rounded-lg border-[1px] border-solid border-slate-700 bg-white px-3 py-1 text-sm font-bold transition-colors",
                      currentAmount >= targetAmount
                        ? "text-slate-400"
                        : "text-slate-800 hover:bg-slate-200",
                    )}
                  >
                    Quyên góp
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CampaignItem;
