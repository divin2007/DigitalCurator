import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center px-8 md:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          className="object-cover brightness-[0.85]"
          alt="Modern ultra-luxury Kigali villa"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKnbeWIoemqKa6QsohdrqmNnGpunAsTBAE6AHfIzBf8HAGAgL8ShxI8pyRzeAqV7N91Zb5bVEtvqKnfiTxlUHi-rkBKAQwMUh4hr5p1e81BwMvdAPfiNuIE3OxPUJ_go-c237xkrgbz2Fblg5vI7j08Ud4Qj_5Oeutlyqcu_APhttX2xcM1rd2YO2fWThAdMv_Suvh-bzLOyNodYbdvUdaumpJds-SV3mqZH9xCWdU6fI8Wflu0kEidwd3VMPAWGkBg_uq_PLKBSs"
          fill
          priority
        />
      </div>
      <div className="relative z-10 max-w-4xl space-y-8">
        <div className="inline-block px-4 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[0.6875rem] font-bold uppercase tracking-[0.1em]">
          Exclusive Kigali Residences
        </div>
        <h1 className="font-headline text-5xl md:text-8xl text-white font-bold leading-tight -tracking-[0.02em]">
          Redefining <br /> Rwandan Living
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-xl font-light leading-relaxed font-body">
          More than architecture, we curate legacies. Discover the most prestigious properties nestled in the heart of the Thousand Hills.
        </p>
        <div className="pt-4 flex flex-wrap gap-6">
          <Button href="/properties">
            View Portfolio
          </Button>
          <button className="text-white border-b border-white pb-1 flex items-center gap-2 hover:opacity-70 transition-opacity font-label uppercase tracking-widest text-xs">
            Private Viewing
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-12 right-24 hidden md:block">
        <div className="flex flex-col items-end text-white space-y-2">
          <span className="text-xs uppercase tracking-widest opacity-60 font-label">Currently Viewing</span>
          <span className="font-headline text-2xl italic">The Horizon Penthouse, Rebero</span>
        </div>
      </div>
    </section>
  );
}
