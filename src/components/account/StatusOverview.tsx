export default function StatusOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="bg-surface-container-low p-6 border-l-4 border-primary">
        <span className="text-[0.6875rem] uppercase font-bold text-on-secondary-container tracking-widest block mb-2 font-label">Active Applications</span>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-headline">02</span>
          <span className="text-xs text-primary font-bold">1 Action Needed</span>
        </div>
      </div>
      <div className="bg-surface-container-low p-6 border-l-4 border-tertiary-container">
        <span className="text-[0.6875rem] uppercase font-bold text-on-secondary-container tracking-widest block mb-2 font-label">Requested Property</span>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-headline">01</span>
          <span className="text-xs text-on-secondary-container">In Review</span>
        </div>
      </div>
      <div className="bg-surface-container-low p-6 border-l-4 border-secondary">
        <span className="text-[0.6875rem] uppercase font-bold text-on-secondary-container tracking-widest block mb-2 font-label">Secured Assets</span>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-headline">01</span>
          <span className="text-xs text-on-secondary-container">Value: High</span>
        </div>
      </div>
    </div>
  );
}
