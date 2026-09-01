export function StrategyVisual() {
  const inputs = ["Google", "Social Media", "Ads"];
  const flow = ["Website", "Leads", "AI Automation", "Follow-Up", "Customers"];

  return (
    <div className="w-full rounded-sm border border-pp-charcoal/10 bg-pp-cream-warm p-6 shadow-[0_20px_60px_-30px_rgba(23,23,23,0.35)] sm:p-8">
      <div className="flex flex-wrap justify-center gap-2">
        {inputs.map((input) => (
          <span
            key={input}
            className="rounded-full border border-pp-charcoal/15 bg-pp-cream px-4 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-pp-charcoal/70"
          >
            {input}
          </span>
        ))}
      </div>

      <div className="mx-auto my-4 h-8 w-px bg-pp-charcoal/15" />

      <div className="flex flex-col items-center gap-0">
        {flow.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <span
              className={`rounded-sm px-5 py-2 text-center font-sans text-xs font-semibold uppercase tracking-[0.1em] ${
                i === 0
                  ? "bg-pp-charcoal text-pp-cream-warm"
                  : "border border-pp-red/30 bg-pp-red/5 text-pp-red"
              }`}
            >
              {step}
            </span>
            {i < flow.length - 1 && <div className="h-6 w-px bg-pp-charcoal/15" />}
          </div>
        ))}
      </div>
    </div>
  );
}
