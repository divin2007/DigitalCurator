export default function QuickStatus() {
  const statusItems = [
    {
      label: "Active Applications",
      value: "02",
      subtext: "1 Action Needed",
      borderColor: "border-primary",
      subtextColor: "text-primary",
    },
    {
      label: "Requested Property",
      value: "01",
      subtext: "In Review",
      borderColor: "border-tertiary-container",
      subtextColor: "text-on-secondary-container",
    },
    {
      label: "Secured Assets",
      value: "01",
      subtext: "Portfolio Value: High",
      borderColor: "border-secondary",
      subtextColor: "text-on-secondary-container",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {statusItems.map((item, index) => (
        <div key={index} className={`bg-surface-container-low p-6 border-l-4 ${item.borderColor}`}>
          <span className="text-[0.6875rem] uppercase font-bold text-on-secondary-container tracking-widest block mb-2 font-label">
            {item.label}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-headline">{item.value}</span>
            <span className={`text-xs font-bold font-body ${item.subtextColor}`}>{item.subtext}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
