function Hero({ scrollCallback }) {
  return (
    <section className="relative flex h-[42rem] w-full items-center justify-center overflow-auto bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-[url('sgu_photo.jpg')] bg-cover bg-center brightness-[0.6]"></div>

      <div className="relative z-10 flex max-w-[48rem] flex-col gap-4">
        <h1 className="text-center text-3xl font-bold text-white">
          Chung tay giúp đỡ những hoàn cảnh khó khăn trong cộng đồng sinh viên
          trường Đại học Sài Gòn
        </h1>
        <div className="flex justify-center">
          <button
            className="rounded-lg bg-slate-600 px-4 py-2 text-lg font-bold text-slate-100 shadow-md transition-colors hover:bg-slate-700"
            onClick={scrollCallback}
          >
            Quyên góp
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
