import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export default function AgentDashboard() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-8 max-w-7xl mx-auto">
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2">
            <span className="label-sm text-[0.6875rem] uppercase tracking-[0.1em] text-primary font-bold font-label">Agent Dashboard</span>
            <h1 className="text-5xl font-headline font-bold tracking-tight text-on-surface">Curated Portfolios</h1>
            <p className="text-on-surface-variant max-w-md font-body">Oversee your collection of ultra-luxury estates and monitor engagement metrics in real-time.</p>
          </div>
          <Button>
            <span className="material-symbols-outlined text-sm mr-2">add</span>
            Add New Property
          </Button>
        </header>

        {/* Analytics Overview */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-sm editorial-shadow flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="label-sm text-[0.6875rem] uppercase tracking-[0.1em] text-on-surface-variant font-label">Portfolio Performance</span>
              <h3 className="text-3xl font-headline mt-2">124,802 <span className="text-sm font-body text-primary">+12%</span></h3>
            </div>
            <div className="flex items-end gap-1 h-12">
              <div className="w-full bg-primary/10 h-[20%] rounded-t-sm"></div>
              <div className="w-full bg-primary/10 h-[40%] rounded-t-sm"></div>
              <div className="w-full bg-primary/20 h-[35%] rounded-t-sm"></div>
              <div className="w-full bg-primary/40 h-[60%] rounded-t-sm"></div>
              <div className="w-full bg-primary/60 h-[50%] rounded-t-sm"></div>
              <div className="w-full bg-primary h-[90%] rounded-t-sm"></div>
              <div className="w-full bg-primary/80 h-[70%] rounded-t-sm"></div>
            </div>
          </div>
          <div className="bg-surface-container-low p-8 rounded-sm flex flex-col justify-between">
            <span className="material-symbols-outlined text-primary text-3xl">chat_bubble_outline</span>
            <div>
              <span className="label-sm text-[0.6875rem] uppercase tracking-[0.1em] text-on-surface-variant font-label">Active Inquiries</span>
              <h3 className="text-3xl font-headline mt-1">42</h3>
            </div>
          </div>
          <div className="bg-inverse-surface p-8 rounded-sm flex flex-col justify-between text-surface-container-lowest">
            <span className="material-symbols-outlined text-primary-fixed text-3xl">visibility</span>
            <div>
              <span className="label-sm text-[0.6875rem] uppercase tracking-[0.1em] text-surface-variant/60 font-label">Global Views</span>
              <h3 className="text-3xl font-headline mt-1 text-white">1.2M</h3>
            </div>
          </div>
        </section>

        {/* Property Management List */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-headline font-semibold">Active Listings</h2>
          </div>
          <div className="space-y-4">
            <div className="group bg-surface-container-lowest overflow-hidden flex flex-col md:flex-row editorial-shadow transition-all hover:bg-surface-container-low cursor-pointer">
              <div className="md:w-64 h-48 overflow-hidden bg-zinc-200">
                <img
                  alt="Luxury Villa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-ChgPjdeXg_Hhxb7UZI7XQkf9FD-g-FdaLw-UHRccsLcE7FVCtdcDnc1Rkp3uMNGTiCNH1QFcLrd7SI8BF7uO5xhs9TrOAk-OB4JxcD3VGXsxnnXvJ-VgCnom3B5JbQQyD9eqdQbo7CrILvMN9I2OhBKvcVYWjuN-kZag2GkRfl9Me6dsjI1irFjejGCH1BSrdK20PBoU76KXhifJictHheWpaSCAxTziRH1UOpu8vEZl3VEzDKWSaKgJ6vs1QIltrVkoIm28xIk"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col md:flex-row justify-between md:items-center gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-0.5 rounded-full text-[0.6rem] font-bold tracking-widest uppercase font-label">Active</span>
                    <span className="text-on-surface-variant text-xs font-body">ID: DC-8802</span>
                  </div>
                  <h4 className="text-xl font-headline font-semibold">The Obsidian Pavilion</h4>
                  <p className="text-on-surface-variant text-sm font-light font-body">Kigali, Rebero District • 5 Bedrooms • 6,200 sqft</p>
                </div>
                <div className="grid grid-cols-3 gap-8 text-center md:text-left">
                  <div>
                    <span className="block text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1 font-label">Views</span>
                    <span className="font-headline font-semibold">4.8k</span>
                  </div>
                  <div>
                    <span className="block text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1 font-label">Leads</span>
                    <span className="font-headline font-semibold">12</span>
                  </div>
                  <div>
                    <span className="block text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1 font-label">Value</span>
                    <span className="font-headline font-semibold">$2.4M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
