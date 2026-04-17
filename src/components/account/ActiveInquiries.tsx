import Button from "@/components/ui/Button";

export default function ActiveInquiries() {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
        <h2 className="font-headline text-3xl">Active Inquiries</h2>
        <span className="text-on-secondary-container text-xs uppercase tracking-widest font-label">Ongoing Portfolio Expansion</span>
      </div>
      <div className="space-y-4">
        {/* Requested Property List Item */}
        <div className="flex items-center justify-between p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-primary/40 transition-colors group">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 bg-zinc-200">
              <img
                alt="Emerald Ridge Residence"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzN6MXwO2k_ZcL8LfpUIK6uQSTDfNhEKlTg2JpYIYAZeOIWCQygnUtc3-AP8GeYJD47k7VlP0lBDx85SN-fR_-KcR-6NsHAuHpMx7_KefIyjf8UivDQym8UupVca25dxtjD_umwHP2dKAZzBQ-oD_0frmTla8K72CYoc7nh2WO1b4zgDhm4R2YV3jsEvg089T8jYPVfF-v_1IoAwu8W9xgvJCu4p8QrDDrc4vBceIDbVv9E5Rg6kfVt8o07F5dTTVflT_R-gnmlVo"
              />
            </div>
            <div>
              <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold font-label">Property Request</span>
              <h4 className="font-bold text-xl mt-1 font-headline">Emerald Ridge Residence</h4>
              <p className="text-xs text-on-secondary-container mt-1 font-body">Rebero Hill • Submitted Oct 12, 2024</p>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block text-[0.6875rem] font-bold px-3 py-1 bg-tertiary-container text-white uppercase tracking-widest mb-2 font-label">In Review</span>
            <p className="text-[0.6rem] text-on-secondary-container font-body">Curator responding in ~24h</p>
          </div>
        </div>

        {/* Lending Application Highlight */}
        <div className="flex items-center justify-between p-6 bg-inverse-surface text-inverse-on-surface group">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
            </div>
            <div>
              <span className="text-[0.6rem] uppercase tracking-widest text-primary-fixed-dim font-bold font-label">Lending Application</span>
              <h4 className="font-bold text-xl mt-1 text-white font-headline">Residential Investment Loan</h4>
              <p className="text-xs text-zinc-400 mt-1 font-body">Ref: #DC-8921 • Underwriter Review</p>
            </div>
          </div>
          <div className="text-right">
            <Button variant="outline" className="!border-white/20 hover:!bg-white hover:!text-black !text-[0.6875rem]">
              Action Required
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
