import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Expertise() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
      <header className="mb-24">
        <div className="max-w-4xl">
          <span className="font-label text-[0.6875rem] uppercase tracking-[0.15em] text-primary font-bold mb-4 block">Our Expertise</span>
          <h2 className="font-headline text-5xl md:text-7xl leading-[1.1] tracking-tighter text-on-surface mb-8">
            Facilitating the <span className="italic">Art of Acquisition</span> in Rwanda.
          </h2>
          <p className="font-body text-lg md:text-xl text-on-secondary-container leading-relaxed max-w-2xl">
            We bridge the gap between visionary investors and exceptional Rwandan landscapes through a curated suite of bespoke real estate services.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-24 lg:gap-x-12">
        {/* Buying & Advisory */}
        <section className="lg:col-span-7 space-y-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-surface-container-high">
            <Image
              alt="Modern Rwandan Villa"
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhSNhm8LvOV1IgA707p7xNYa9XLss5awhcC17rDwrYvbfbJ3BaNDU5HDGMUWnlqjuey3Ma5Wd-jHSibQXw44eYwIf5zNhL1hwAOiSJenxzsSGFzsap4ShozpPaRKjtThh0DJiHR1Fz_Z78KBRnX9bSKakX_pYI2AlDmxAFWOV_xhmg48Nqxl_EgPCTkXe_XNsf-kZ1LzImbZCkjBbwLRk7HNMW8xQBNXvlRNAzCpaGnTDKbQTEx8temQ7eoenx5roWHx9JKq5F0FY"
              fill
            />
          </div>
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">real_estate_agent</span>
              <h3 className="font-headline text-3xl md:text-4xl text-on-surface">Curated Acquisition</h3>
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
            <h3 className="font-headline text-3xl text-on-surface mb-6 mt-4">Lending & Financial Architecture</h3>
            <p className="font-body text-on-secondary-container leading-relaxed mb-8">
              Secure the capital necessary for legacy-building. We connect our clients with elite financial institutions in Rwanda, optimizing mortgage structures and investment loans tailored to international and domestic profiles.
            </p>
            <Button href="/contact">
              Discuss Financing
            </Button>
          </div>
        </section>

        {/* Land Acquisition (Full Width Feature) */}
        <section className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-inverse-surface text-inverse-on-surface p-8 md:p-16 rounded-sm">
          <div className="order-2 lg:order-1">
            <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary-container font-bold mb-4 block">Future Foundations</span>
            <h3 className="font-headline text-4xl md:text-5xl mb-6">Land Acquisition & Development</h3>
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
          <div className="order-1 lg:order-2 relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              alt="Rwandan Landscape"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkruTBASG997lnk6BxhhSLT-DkcgbbDg9brA8myzama-1Cj7UihAO7BXD8yj19aReeLPuopqSuZevb3vseKzh2HlhRSocu3soYF53eKehd1E7FLOSvoTvUoyUlo-NO8kPoJi9P8pkWMIk4aZTFj_pb8scKKobjrOx1llW5NSym7e-r8B7PxwwOCySh-75sHNcBehPlh0UlPmFND_hb19Qz7HNSuaUihYOT6NBErXjlPtqOrMBb4DM0l2et9bvBxoyf5gKV03iuPa0"
              fill
            />
          </div>
        </section>
      </div>
    </section>
  );
}
