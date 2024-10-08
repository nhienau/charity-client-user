import StepDescription from "@/ui/StepDescription";

function DonateInstruction() {
  const instructions = [
    "Nhập thông tin quyên góp và chọn hình thức thanh toán",
    "Chuyển hướng đến trang thanh toán",
  ];

  return (
    <div className="flex flex-col gap-4 md:col-span-2">
      {instructions.map((ins, index) => (
        <StepDescription number={index + 1} description={ins} key={index} />
      ))}
    </div>
  );
}

export default DonateInstruction;
