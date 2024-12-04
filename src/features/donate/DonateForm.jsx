import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { useController, useForm } from "react-hook-form";
import { useMultiStepForm } from "@/contexts/MultiStepFormContext";
import { useCampaign } from "@/features/campaignDetail/useCampaign";
import FormRow from "@/ui/FormRow";
import Input from "@/ui/Input";
import DonateInstruction from "./DonateInstruction";
import { useUser } from "../authentication/useUser";
import { useDonorNames } from "./useDonorNames";
import DonorNameDialog from "./DonorNameDialog";
import Spinner from "@/ui/Spinner";
import { useRef, useState } from "react";

function DonateForm({ setFormState }) {
  const { user } = useUser();
  const donorNames = useDonorNames();
  const {
    isLoading: isLoadingNames,
    isFetching: isFetchingNames,
    data: donorNamesData,
    phoneNumber,
    setPhoneNumber,
  } = donorNames;
  const [nameOption, setNameOption] = useState(
    donorNamesData?.totalElements > 0 ? "chooser" : "new",
  );

  const { handleNext, formData, setFormData } = useMultiStepForm();
  const { data: campaign } = useCampaign();
  const buttonChooseNameRef = useRef(null);

  const { id: campaignId } = campaign;

  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    trigger,
    formState,
    clearErrors,
  } = useForm({
    defaultValues: Object.keys(formData).length
      ? {
          campaignId: Number(formData.campaignId),
          ...(!user && { phoneNumber: formData.phoneNumber }),
          ...(user && { donorId: user.id }),
          name: formData.name,
          showIdentity: formData.showIdentity,
          hideIdentity: formData.hideIdentity,
          amount: Number(formData.amount),
        }
      : {},
  });
  const { errors } = formState;

  const { field: nameField } = useController({
    name: "name",
    control,
    defaultValue: user || {},
    rules: {
      validate: (value) => {
        return (
          getValues().hideIdentity ||
          (!getValues().hideIdentity &&
            Object.keys(value).length > 0 &&
            value.name?.trim() !== "") ||
          "Tên không được bỏ trống"
        );
      },
    },
  });

  const { field: hideIdentityField } = useController({
    name: "hideIdentity",
    control,
  });
  const watchHideIdentity = watch("hideIdentity");

  async function onInputPhoneNumberBlur(e) {
    nameField.onChange({});
    const validation = await trigger("phoneNumber");
    if (!validation) return;
    const phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);
  }

  function onSubmit(data) {
    const { donorId, campaignId, phoneNumber, name, hideIdentity, amount } =
      data;

    const requestData = {
      campaignId: Number(campaignId),
      donorId,
      phoneNumber,
      donorNameId: donorId ? null : name.id,
      donorName: name.name,
      showIdentity: !hideIdentity,
      hideIdentity: hideIdentity,
      amount: Number(amount),
    };
    setFormData(requestData);
    handleNext();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:grow-1 md:flex md:items-center"
    >
      <input
        type="hidden"
        name="campaignId"
        value={campaignId}
        {...register("campaignId")}
      />
      {user && (
        <input
          type="hidden"
          name="donorId"
          value={user.id}
          {...register("donorId")}
        />
      )}
      <div className="flex flex-1 flex-col gap-4 md:grid md:grid-cols-5 md:grid-rows-[1fr,2.25rem] md:items-center md:gap-x-8 md:gap-y-6">
        <DonateInstruction />
        <div className="col-span-3 flex flex-col gap-4">
          {!user && (
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
                onBlur={onInputPhoneNumberBlur}
              />
            </FormRow>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Tên
            </label>
            <div className="flex items-center gap-3">
              <Input
                type="text"
                name="name"
                id="name"
                className="grow"
                readOnly
                disabled={
                  isLoadingNames ||
                  isFetchingNames ||
                  (watchHideIdentity ?? false)
                }
                defaultValue={
                  nameField.value?.name || nameField.value?.defaultName
                }
                onChange={nameField.onChange}
                onBlur={nameField.onBlur}
                ref={nameField.ref}
              />
              {!user && (
                <DonorNameDialog
                  currentName={nameField.value}
                  onNameChosen={nameField.onChange}
                  phoneNum={phoneNumber}
                  nameOption={nameOption}
                  setNameOption={setNameOption}
                  donorNames={donorNames}
                >
                  <button
                    type="button"
                    className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5 disabled:bg-slate-200 disabled:text-slate-500"
                    disabled={
                      !donorNamesData ||
                      isLoadingNames ||
                      isFetchingNames ||
                      (watchHideIdentity ?? false)
                    }
                    ref={buttonChooseNameRef}
                  >
                    {isLoadingNames || isFetchingNames ? <Spinner /> : "Chọn"}
                  </button>
                </DonorNameDialog>
              )}
            </div>
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
                value={hideIdentityField.value}
                onChange={hideIdentityField.onChange}
                onBlur={hideIdentityField.onBlur}
                ref={hideIdentityField.ref}
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
        <div
          className={`flex items-center ${user ? "justify-end" : "justify-between"} md:col-span-5`}
        >
          {!user && (
            <button
              type="button"
              className="flex items-center gap-x-2 rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5"
              onClick={() => setFormState("identify")}
            >
              <HiOutlineArrowLongLeft className="h-5 w-5" />
              <span>Trở về</span>
            </button>
          )}
          <button
            type="submit"
            className="flex items-center gap-x-2 rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5"
          >
            <span>Tiếp tục</span>
            <HiOutlineArrowLongRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default DonateForm;
