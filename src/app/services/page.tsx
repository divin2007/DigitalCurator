import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
        <header className="mb-24">
          <div className="max-w-4xl">
            <span className="font-label text-[0.6875rem] uppercase tracking-[0.15em] text-primary font-bold mb-4 block">
              Our Services
            </span>
            <h1 className="font-headline text-5xl md:text-7xl leading-[1.1] tracking-tighter text-on-surface mb-8">
              Bespoke <span className="italic">Financial & Strategic</span> Solutions.
            </h1>
            <p className="font-body text-lg md:text-xl text-on-secondary-container leading-relaxed max-w-2xl">
              From capital acquisition to legal due diligence, we provide the architecture for your Rwandan investment legacy.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-12 bg-surface-container-low border border-outline-variant/20 rounded-sm space-y-6">
            <span className="material-symbols-outlined text-primary text-4xl">account_balance</span>
            <h3 className="font-headline text-2xl">Lending & Capital</h3>
            <p className="font-body text-on-secondary-container leading-relaxed">
              We connect our clients with elite financial institutions in Rwanda, optimizing mortgage structures and investment loans.
            </p>
          </div>
          <div className="p-12 bg-surface-container-low border border-outline-variant/20 rounded-sm space-y-6">
            <span className="material-symbols-outlined text-primary text-4xl">gavel</span>
            <h3 className="font-headline text-2xl">Legal Advisory</h3>
            <p className="font-body text-on-secondary-container leading-relaxed">
              Our team manages the complexity of Rwandan land laws, ensuring your investment is protected from the first stone.
            </p>
          </div>
          <div className="p-12 bg-surface-container-low border border-outline-variant/20 rounded-sm space-y-6">
            <span className="material-symbols-outlined text-primary text-4xl">insights</span>
            <h3 className="font-headline text-2xl">Market Intelligence</h3>
            <p className="font-body text-on-secondary-container leading-relaxed">
              Rigorous valuation and market trend analysis for high-value residential and commercial assets in Kigali.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
