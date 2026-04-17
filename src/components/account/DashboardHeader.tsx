import Button from "@/components/ui/Button";

interface DashboardHeaderProps {
  onContactClick: () => void;
}

export default function DashboardHeader({ onContactClick }: DashboardHeaderProps) {
  return (
    <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div className="max-w-2xl">
        <span className="text-[0.6875rem] uppercase tracking-[0.1em] text-on-primary-fixed-variant mb-4 block font-label">Personal Dashboard</span>
        <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight leading-tight">Welcome, Mutesi.</h1>
        <p className="mt-6 text-body-lg text-on-secondary-container leading-relaxed font-body">Your curated collection of Rwandan legacy properties and active applications, managed with precision and security.</p>
      </div>
      <div className="flex gap-4">
        <Button onClick={onContactClick}>
          CONTACT CURATOR
        </Button>
      </div>
    </header>
  );
}
