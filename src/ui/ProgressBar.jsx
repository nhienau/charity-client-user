function ProgressBar({ current, target }) {
  const percentage = current / target;

  return (
    <div className="h-2 overflow-hidden rounded-lg bg-slate-200">
      <div
        className={`h-full rounded-lg ${current === target ? "bg-green-500" : "bg-slate-700"}`}
        style={{ width: `${percentage * 100}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
