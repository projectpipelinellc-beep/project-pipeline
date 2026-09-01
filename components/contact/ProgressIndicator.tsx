const steps = ["What You Need", "Your Business", "Your Goals", "Budget", "Review"];

export function ProgressIndicator({ current }: { current: number }) {
  return (
    <div className="mb-10">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-pp-charcoal/50">
          Step {current} of {steps.length}
        </span>
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-pp-red">
          {steps[current - 1]}
        </span>
      </div>
      <div className="flex h-1 gap-1.5">
        {steps.map((step, i) => (
          <div key={step} className="flex-1 overflow-hidden rounded-full bg-pp-charcoal/10">
            <div
              className="h-full bg-pp-red transition-all duration-500 ease-premium"
              style={{ width: i + 1 <= current ? "100%" : "0%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
