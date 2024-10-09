import { useMultiStepForm } from "@/contexts/MultiStepFormContext";
import { useZaloPayPaymentUrl } from "./useZaloPayPaymentUrl";
import Spinner from "@/ui/Spinner";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

function DonateQr() {
  const { handleBack } = useMultiStepForm();
  const { isLoading, data, isFetching } = useZaloPayPaymentUrl();

  if (isLoading || isFetching) {
    return (
      <div className="flex items-center justify-center md:col-span-3">
        <Spinner size="lg" />
      </div>
    );
  }

  const { returnCode, orderUrl } = data;
  return (
    <>
      <div className="flex flex-col justify-between gap-4 md:col-span-3">
        {returnCode === 1 ? (
          <div className="mx-auto my-0 max-w-64">
            <a
              className="flex items-center justify-center rounded-lg border-[1px] border-solid border-slate-400 px-6 py-3"
              href={orderUrl}
            >
              Tiếp tục với ZaloPay
            </a>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <p>Có lỗi xảy ra, vui lòng thử lại.</p>
          </div>
        )}
        <div>
          <button
            className="flex grow-0 items-center gap-x-2 rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5"
            onClick={handleBack}
          >
            <HiOutlineArrowLongLeft className="h-5 w-5" />
            <span>Trở về</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default DonateQr;
