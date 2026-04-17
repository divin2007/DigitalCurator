import Button from "@/components/ui/Button";

interface DashboardSidebarProps {
  onContactClick: () => void;
}

export default function DashboardSidebar({ onContactClick }: DashboardSidebarProps) {
  return (
    <aside className="md:col-span-4 space-y-12">
      {/* Appointments Tracking */}
      <div className="bg-surface-container-low p-10 border border-outline-variant/20">
        <h2 className="font-headline text-2xl mb-8">Calendar</h2>
        <div className="space-y-8">
          <div className="flex gap-6 group cursor-pointer">
            <div className="flex flex-col items-center justify-center bg-surface-container-lowest w-16 h-20 text-center editorial-shadow">
              <span className="text-[0.6875rem] uppercase font-bold text-primary font-label">Oct</span>
              <span className="font-headline text-2xl">24</span>
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-tight mb-1 font-headline">Obsidian Pavilion</h4>
              <p className="text-xs text-on-secondary-container mb-2 font-body">14:00 • Private Tour</p>
              <span className="text-[0.6875rem] px-2 py-0.5 bg-secondary-container text-on-secondary-container font-medium font-label">CONFIRMED</span>
            </div>
          </div>
          <div className="flex gap-6 group cursor-pointer opacity-60">
            <div className="flex flex-col items-center justify-center bg-surface-container-lowest w-16 h-20 text-center">
              <span className="text-[0.6875rem] uppercase font-bold text-zinc-400 font-label">Nov</span>
              <span className="font-headline text-2xl">02</span>
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-tight mb-1 font-headline">Virunga Eco-Lodge</h4>
              <p className="text-xs text-on-secondary-container mb-2 font-body">10:30 • Initial Viewing</p>
              <span className="text-[0.6875rem] px-2 py-0.5 bg-surface-container-highest text-on-secondary-container font-medium font-label uppercase">Pending</span>
            </div>
          </div>
        </div>
        <Button href="/properties" className="mt-12 w-full flex items-center justify-center gap-2 group">
          Book a Viewing <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
        </Button>
      </div>

      {/* Curator Support */}
      <div className="bg-surface-container-high p-10 border border-outline-variant/10">
        <h2 className="font-headline text-2xl mb-8">Support</h2>
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-16 bg-surface-container-highest overflow-hidden">
            <img alt="Lead Curator" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxJNIMk-rrlMJQidp8f1Zehi2r03TcL6QczYBeDNh9w5iK_wzZsJtkF0ALM0kH4lpc8WzfFx1-qzQTcRba5xDPBUl31HIM5TIez5i536HVei9YmRzpczKRJxUZ9je13hh2t7DZRT9N7s4G-MGRiY8N8p7FLNn2a6N1f1ve_R0nz9VILGtDE9PyfgzaeYdHQB5AujDRnZxImzL4ANJ8FoFIGtYSIKmBgjjaOubqG7vlpd2WmO9nyy0_hoDDX76LUQ_9qfeBxzlikzc" />
          </div>
          <div>
            <p className="text-[0.6875rem] uppercase text-on-secondary-container tracking-wider font-bold font-label">Dedicated Curator</p>
            <h4 className="font-bold font-headline">Divine Kariza</h4>
            <button onClick={onContactClick} className="text-xs text-primary underline font-body">Direct Message</button>
          </div>
        </div>
        <Button onClick={onContactClick} variant="outline" className="w-full !border-primary !text-primary !text-[0.6875rem] uppercase tracking-widest font-bold">
          Schedule Sync
        </Button>
      </div>

      {/* Secure Document Vault */}
      <div className="bg-inverse-surface text-inverse-on-surface p-10">
        <h2 className="font-headline text-2xl mb-8 text-white">Vault</h2>
        <p className="text-xs text-zinc-400 mb-8 italic font-body">Your encrypted storage for all property titles, financial statements, and lease agreements.</p>
        <Button href="/account/vault" className="w-full" variant="outline">
          Access Documents
        </Button>
      </div>
    </aside>
  );
}
