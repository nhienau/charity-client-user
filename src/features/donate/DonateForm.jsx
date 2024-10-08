import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { useMultiStepForm } from "@/contexts/MultiStepFormContext";
import { useCampaign } from "@/features/campaignDetail/useCampaign";
import FormRow from "@/ui/FormRow";
import Input from "@/ui/Input";

function DonateForm() {
  const { handleNext, formData, setFormData } = useMultiStepForm();
  const { data: campaign } = useCampaign();

  const { id: campaignId } = campaign;

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    trigger,
    formState,
    clearErrors,
  } = useForm({
    defaultValues: Object.keys(formData).length
      ? {
          campaignId: Number(formData.campaignId),
          phoneNumber: formData.phoneNumber,
          name: formData.name,
          showIdentity: !formData.hideIdentity,
          amount: Number(formData.amount),
        }
      : {},
  });
  const { errors } = formState;
  const watchHideIdentity = watch("hideIdentity");

  function onSubmit(data) {
    const { campaignId, phoneNumber, name, hideIdentity, amount } = data;
    setFormData({
      campaignId: Number(campaignId),
      phoneNumber,
      name,
      showIdentity: !hideIdentity,
      amount: Number(amount),
    });
    handleNext();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-3">
      <input
        type="hidden"
        name="campaignId"
        value={campaignId}
        {...register("campaignId")}
      />
      <div className="mb-4 flex flex-col gap-4">
        <FormRow label="Số điện thoại" error={errors?.phoneNumber?.message}>
          <Input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            {...register("phoneNumber", {
              required: "Số điện thoại không được để trống",
              pattern: {
                value: /^0\d{9,11}$/,
                message: "Số điện thoại không hợp lệ",
              },
            })}
          />
        </FormRow>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold">
            Tên
          </label>
          <Input
            type="text"
            name="name"
            id="name"
            disabled={watchHideIdentity ?? false}
            onChange={() => trigger("name")}
            {...register("name", {
              validate: (value) =>
                getValues().hideIdentity ||
                (!getValues().hideIdentity && value && value.trim() !== "") ||
                "Tên không được bỏ trống",
            })}
          />
          {errors?.name?.message && (
            <span className="text-red-700">{errors?.name?.message}</span>
          )}
          <div>
            <input
              type="checkbox"
              name="hideIdentity"
              id="hideIdentity"
              className="mr-2"
              onClick={() => clearErrors("name")}
              {...register("hideIdentity")}
            />
            <label htmlFor="hideIdentity">Quyên góp ẩn danh</label>
          </div>
        </div>

        <FormRow label="Số tiền" error={errors?.amount?.message}>
          <Input
            type="text"
            name="amount"
            id="amount"
            {...register("amount", {
              required: "Số tiền không được để trống",
              pattern: {
                value: /^\d+$/,
                message: "Số tiền không hợp lệ",
              },
              min: {
                value: 1000,
                message: "Số tiền quyên góp ít nhất là 1,000 đ",
              },
            })}
          />
        </FormRow>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="flex items-center gap-x-2 rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5"
        >
          <span>Tiếp tục</span>
          <HiOutlineArrowLongRight className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}

export default DonateForm;
