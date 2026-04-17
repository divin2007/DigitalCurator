import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-8 md:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Luxury Rwandan Estate"
              className="w-full h-full object-cover opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAggW5HpQpgu3OzOKzTSio01-oAS0wsz-gIm9YCBZvb7gQOepE_kiXm66scfcMbVvhTq-X4Ax_bL7jVtIp1lfXy1czy9Rpzpf7Kc2nDTJEMDFz1AXUdXo0vcPevYeO3jDY7F7pq62WiPRIZEIYoZmRE9vMHTNF18iYT2TEPW6GFRJgofNCCPNo_r-nLFRpUvvWRMsdZgclr8eO94L7JPidK9za5pd949XsME2Zmo1_OsON-sn0xSTPdfpEs74tpXeBmFNReOhqy2xc"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <span className="label-sm uppercase tracking-[0.2em] text-primary mb-6 block font-semibold">About The Digital Curator</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 tracking-tighter">
              Securing <br />
              <span className="italic font-normal">Rwandan Legacies.</span>
            </h1>
            <p className="font-body text-lg text-secondary max-w-xl leading-relaxed">
              We believe real estate is more than a transaction; it is the curation of a heritage. In the heart of Africa’s rising star, we craft spaces that resonate with permanence.
            </p>
          </div>
        </section>

        {/* The Vision */}
        <section className="py-32 px-8 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 space-y-8">
              <h2 className="font-headline text-4xl md:text-5xl leading-tight">The Rwandan <br />Renaissance</h2>
              <p className="text-on-secondary-container leading-loose text-lg font-body">
                As Rwanda transforms into a global hub of excellence, the landscape of luxury living must evolve with it. Our mission is to bridge the gap between architectural innovation and the timeless spirit of Rwandan hospitality.
              </p>
              <div className="pt-8 flex items-center space-x-4 group cursor-pointer">
                <span className="text-primary font-semibold border-b border-primary pb-1 group-hover:pr-4 transition-all">Explore our investment guide</span>
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-4 h-[600px]">
              <div className="h-full pt-12">
                <img
                  className="w-full h-full object-cover rounded-sm shadow-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhdcUsqkME1XJFu7sJYEwZm_MmKD6_Z9Mf8ysjKyEmV42mjZBmNyEO4sZE6GKzcHjJP-WfqiYeKrWnVa4hClC-PnEQMaQYMilY98nznh1lkOLOVlVXDDteLtSxj9lhln3mhJkkjmZ3ezPlneoP_3Y4YsXovDoBGiGqeiEArZX-YFHrHqmeGYcJFUaQp813UZsqy-thC7B6dcZ8X6lStiVfwOCTMpR_dfi05YmyaFG3OevJj7t-pPECGhliHbp0knoKatluS7JC_W0"
                  alt="Architecture detail"
                />
              </div>
              <div className="h-full pb-12">
                <img
                  className="w-full h-full object-cover rounded-sm shadow-xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg3XgMeoE4UhHPZv2DeJtMxVuiwYEC-ww0WjmJcALpBht95qIFTfMsRmeQWyUmIObbHlPGZWXr6KAuUf7irXqosxg5GBdGgfiZyFqve9uA95Y5cmL6PRnpz4SmYA7YZwF1vMXyRP88iqaWql3-VzvGzO-vOhOhF_UnM2EYQFXdYROW4OBLSwJC_O0ExRuEoaQuGFliMgBWmuOTBetwozjXvTxr6Go11G4fe0pj2kacievlV2bWxC5QnGhIdDRu5GElF43brjK_K-M"
                  alt="Kigali landscape"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Section */}
        <section className="bg-inverse-surface text-inverse-on-surface py-32">
          <div className="max-w-screen-2xl mx-auto px-8 md:px-24">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    alt="Mahoro Tuyishime Divin"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbi_d8hT-IpSleSyHKO83dKyDGA_Q3VlC2wFfiUYSFouO6RW0Ti3_bu1KmvZAW_AK01g9eyz0V3wLLcz0zoYSFSECIsFQiM4ozya9bPLS6hOHPCO7bHJoLDaLRhYy0v-Z8Wv7sM1UZVOyjBPC0kaqUCh2xTYeMhfDYWH7FdHTSQOFyBt5C1TcOTBKPj_NHvZtGPozz4y3mXGQzKpDTIBWXaGaHCEHPpLHnBmmDFytZpN9EU9ljU0bSq9NZiM2vpRVv3c13ce-CCsI"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 hidden md:block">
                  <span className="material-symbols-outlined text-4xl text-white">format_quote</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <span className="label-sm uppercase tracking-[0.2em] text-primary-fixed-dim font-semibold">The Visionary</span>
                <h2 className="font-headline text-4xl md:text-6xl">Mahoro Tuyishime Divin</h2>
                <p className="text-surface-container-highest text-xl italic font-headline leading-relaxed">
                  &quot;Luxury is not an accumulation of things; it is the elimination of the unnecessary until only the essential beauty remains. We are not building houses; we are curating the backdrop for your life&apos;s most significant moments.&quot;
                </p>
                <div className="space-y-4">
                  <h4 className="font-bold tracking-widest text-primary-fixed uppercase font-label">Founder & Chief Curator</h4>
                  <p className="text-secondary-fixed-dim leading-loose font-body">
                    With a background in architectural strategy and a deep-rooted passion for Rwanda&apos;s cultural heritage, Mahoro founded The Digital Curator to redefine how luxury is perceived and transacted in the African Great Lakes region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-40 flex flex-col items-center justify-center text-center px-8 overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-12">
            <h2 className="font-headline text-5xl md:text-6xl leading-tight text-on-surface">Ready to curate your next chapter?</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button>View The Collection</Button>
              <Button variant="outline">Contact Curator</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
