import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export default function Account() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[0.6875rem] uppercase tracking-[0.1em] text-on-primary-fixed-variant mb-4 block font-label">Personal Dashboard</span>
            <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight leading-tight">Welcome, Mutesi.</h1>
            <p className="mt-6 text-lg text-on-secondary-container leading-relaxed font-body">Your curated collection of Rwandan legacy properties and active applications, managed with precision and security.</p>
          </div>
          <div className="flex gap-4">
            <Button>CONTACT CURATOR</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 space-y-16">
            {/* Quick Status Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-surface-container-low p-6 border-l-4 border-primary">
                <span className="text-[0.6875rem] uppercase font-bold text-on-secondary-container tracking-widest block mb-2 font-label">Active Applications</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-headline">02</span>
                  <span className="text-xs text-primary font-bold font-body">1 Action Needed</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 border-l-4 border-tertiary-container">
                <span className="text-[0.6875rem] uppercase font-bold text-on-secondary-container tracking-widest block mb-2 font-label">Requested Property</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-headline">01</span>
                  <span className="text-xs text-on-secondary-container font-body">In Review</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 border-l-4 border-secondary">
                <span className="text-[0.6875rem] uppercase font-bold text-on-secondary-container tracking-widest block mb-2 font-label">Secured Assets</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-headline">01</span>
                  <span className="text-xs text-on-secondary-container font-body">Portfolio Value: High</span>
                </div>
              </div>
            </div>

            {/* Active Inquiries */}
            <section className="space-y-8">
              <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
                <h2 className="font-headline text-3xl">Active Inquiries</h2>
                <span className="text-on-secondary-container text-xs uppercase tracking-widest font-label">Ongoing Portfolio Expansion</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-primary/40 transition-colors group">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 bg-zinc-200">
                      <img alt="Property" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzN6MXwO2k_ZcL8LfpUIK6uQSTDfNhEKlTg2JpYIYAZeOIWCQygnUtc3-AP8GeYJD47k7VlP0lBDx85SN-fR_-KcR-6NsHAuHpMx7_KefIyjf8UivDQym8UupVca25dxtjD_umwHP2dKAZzBQ-oD_0frmTla8K72CYoc7nh2WO1b4zgDhm4R2YV3jsEvg089T8jYPVfF-v_1IoAwu8W9xgvJCu4p8QrDDrc4vBceIDbVv9E5Rg6kfVt8o07F5dTTVflT_R-gnmlVo" />
                    </div>
                    <div>
                      <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold font-label">Property Request</span>
                      <h4 className="font-bold text-xl mt-1 font-headline">Emerald Ridge Residence</h4>
                      <p className="text-xs text-on-secondary-container mt-1 font-body">Rebero Hill • Submitted Oct 12, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-[0.6875rem] font-bold px-3 py-1 bg-tertiary-container text-white uppercase tracking-widest mb-2 font-label">In Review</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="md:col-span-4 space-y-12">
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
              </div>
            </div>
            <div className="bg-inverse-surface text-inverse-on-surface p-10">
              <h2 className="font-headline text-2xl mb-8 text-white">Vault</h2>
              <p className="text-xs text-zinc-400 mb-8 italic font-body">Your encrypted storage for all property titles, financial statements, and lease agreements.</p>
              <Button className="w-full" variant="outline">Access Documents</Button>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
