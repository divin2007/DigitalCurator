import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
        {/* Hero Section */}
        <header className="mb-24">
          <div className="max-w-4xl">
            <span className="font-label text-[0.6875rem] uppercase tracking-[0.15em] text-primary font-bold mb-4 block">
              Our Expertise
            </span>
            <h1 className="font-headline text-5xl md:text-7xl leading-[1.1] tracking-tighter text-on-surface mb-8">
              Facilitating the <span className="italic">Art of Acquisition</span> in Rwanda.
            </h1>
            <p className="font-body text-lg md:text-xl text-on-secondary-container leading-relaxed max-w-2xl">
              We bridge the gap between visionary investors and exceptional Rwandan landscapes through a curated suite of bespoke real estate services.
            </p>
          </div>
        </header>

        {/* Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-24 lg:gap-x-12">
          {/* Buying & Advisory */}
          <section className="lg:col-span-7 space-y-8">
            <div className="aspect-[16/9] overflow-hidden rounded-sm bg-surface-container-high">
              <img
                alt="Modern Rwandan Villa"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhSNhm8LvOV1IgA707p7xNYa9XLss5awhcC17rDwrYvbfbJ3BaNDU5HDGMUWnlqjuey3Ma5Wd-jHSibQXw44eYwIf5zNhL1hwAOiSJenxzsSGFzsap4ShozpPaRKjtThh0DJiHR1Fz_Z78KBRnX9bSKakX_pYI2AlDmxAFWOV_xhmg48Nqxl_EgPCTkXe_XNsf-kZ1LzImbZCkjBbwLRk7HNMW8xQBNXvlRNAzCpaGnTDKbQTEx8temQ7eoenx5roWHx9JKq5F0FY"
              />
            </div>
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">real_estate_agent</span>
                <h2 className="font-headline text-3xl md:text-4xl text-on-surface">Curated Acquisition</h2>
              </div>
              <p className="font-body text-on-secondary-container leading-relaxed mb-6">
                Navigating the luxury market requires more than just a list of properties. We provide strategic counsel, off-market access, and rigorous due diligence for high-value residential and commercial assets in Kigali and beyond.
              </p>
              <ul className="space-y-3 font-label text-sm uppercase tracking-wider text-on-surface-variant font-medium">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Market Intelligence & Valuation</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Private Portfolio Access</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> End-to-End Transaction Management</li>
              </ul>
            </div>
          </section>

          {/* Lending & Capital */}
          <section className="lg:col-span-4 lg:col-start-9 flex flex-col justify-center">
            <div className="p-8 md:p-12 bg-surface-container-low rounded-sm relative">
              <div className="absolute -top-6 -left-6 bg-primary-fixed p-4 rounded-full">
                <span className="material-symbols-outlined text-on-primary-fixed-variant text-3xl">account_balance</span>
              </div>
              <h2 className="font-headline text-3xl text-on-surface mb-6 mt-4">Lending & Financial Architecture</h2>
              <p className="font-body text-on-secondary-container leading-relaxed mb-8">
                Secure the capital necessary for legacy-building. We connect our clients with elite financial institutions in Rwanda, optimizing mortgage structures and investment loans tailored to international and domestic profiles.
              </p>
              <Button>Discuss Financing</Button>
            </div>
          </section>

          {/* Land Acquisition */}
          <section className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-inverse-surface text-inverse-on-surface p-8 md:p-16 rounded-sm">
            <div className="order-2 lg:order-1">
              <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary-container font-bold mb-4 block">Future Foundations</span>
              <h2 className="font-headline text-4xl md:text-5xl mb-6">Land Acquisition & Development</h2>
              <p className="font-body text-surface-container-highest/80 leading-relaxed mb-8 text-lg">
                From the fertile hills of the North to the prime development plots of Gasabo, we facilitate the secure transfer of land titles. Our team manages the complexity of Rwandan land laws, ensuring your investment is protected from the first stone.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-headline text-xl text-primary-fixed-dim mb-2">Security</h4>
                  <p className="font-body text-sm text-surface-container-highest/60 italic">Guaranteed title verification and legal clarity.</p>
                </div>
                <div>
                  <h4 className="font-headline text-xl text-primary-fixed-dim mb-2">Ease</h4>
                  <p className="font-body text-sm text-surface-container-highest/60 italic">Digital tracking and streamlined government liaison.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-square lg:aspect-[4/5] overflow-hidden rounded-sm">
              <img
                alt="Rwandan Landscape"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkruTBASG997lnk6BxhhSLT-DkcgbbDg9brA8myzama-1Cj7UihAO7BXD8yj19aReeLPuopqSuZevb3vseKzh2HlhRSocu3soYF53eKehd1E7FLOSvoTvUoyUlo-NO8kPoJi9P8pkWMIk4aZTFj_pb8scKKobjrOx1llW5NSym7e-r8B7PxwwOCySh-75sHNcBehPlh0UlPmFND_hb19Qz7HNSuaUihYOT6NBErXjlPtqOrMBb4DM0l2et9bvBxoyf5gKV03iuPa0"
              />
            </div>
          </section>
        </div>

        {/* Trust Section */}
        <section className="mt-32 pt-24 border-t border-outline-variant/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-headline text-3xl mb-12">The Digital Curator Standards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-4xl text-primary">verified_user</span>
                <h4 className="font-label font-bold uppercase tracking-widest text-sm">Verified Listings</h4>
                <p className="font-body text-sm text-on-secondary-container">Every property undergoes a 48-point verification process.</p>
              </div>
              <div className="space-y-4">
                <span className="material-symbols-outlined text-4xl text-primary">encrypted</span>
                <h4 className="font-label font-bold uppercase tracking-widest text-sm">Secure Escrow</h4>
                <p className="font-body text-sm text-on-secondary-container">Bank-grade security for all financial transmissions.</p>
              </div>
              <div className="space-y-4">
                <span className="material-symbols-outlined text-4xl text-primary">support_agent</span>
                <h4 className="font-label font-bold uppercase tracking-widest text-sm">Direct Concierge</h4>
                <p className="font-body text-sm text-on-secondary-container">Personalized assistance throughout the lifecycle.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 bg-surface-container-highest p-12 md:p-20 text-center rounded-sm">
          <h2 className="font-headline text-4xl md:text-5xl mb-8">Ready to define your legacy?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Button variant="dark">Request a Consultation</Button>
            <Button variant="outline">Download Guide</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
