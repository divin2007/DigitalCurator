import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function SecuredAssets() {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
        <h2 className="font-headline text-3xl">Secured Assets</h2>
        <Link className="text-primary text-sm font-medium hover:text-primary-container transition-all" href="/account/management">View All</Link>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col md:flex-row gap-8 bg-surface-container-lowest p-8 editorial-shadow group relative border border-outline-variant/10">
          <Link href="/account/management" className="absolute inset-0 z-0" aria-label="Manage Serenity Peak Estate" />
          <div className="w-full md:w-1/3 aspect-video md:aspect-square overflow-hidden z-10 pointer-events-none relative">
            <Image alt="Bought Property" className="object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBazJI622wRiagsGt7w3oUBGO54vXJs2hicyBOrZtCjL9YbsagKm7SWwZpx9CDcLV10Vpz1pI1r4eRb2JX9fbosk9jGacWEMielPtRtz9SiwdTmqyThnYHlUne01sH-7sVbWXSVUtyv0pDFUp6kBAxmBMxmNFgEtpl_oFAzhj1C2oa5JcbwE_YrrY2jDYTGURg5PYjYZ_xXtgd-XE1oYs6g8YEeBNxw6n7lIfTZzu-Xcduoo7FttHU3RwQpHBDJln8DM7ISKHL2-CQ" fill />
          </div>
          <div className="flex-1 flex flex-col justify-center z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[0.6875rem] text-primary uppercase font-bold tracking-widest font-label">Verified Ownership</span>
                <h3 className="font-headline text-3xl mt-1 text-on-background">Serenity Peak Estate</h3>
              </div>
              <span className="material-symbols-outlined text-primary text-4xl">verified</span>
            </div>
            <p className="text-on-secondary-container text-sm mb-8 leading-relaxed font-body">Closed: Sept 2024. Property management portal is active for maintenance, digital deeds, and secure documentation.</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/account/management" variant="primary" className="flex items-center gap-2 relative z-20">
                <span className="material-symbols-outlined text-base">dashboard_customize</span> Management Console
              </Button>
              <Button href="/account/vault" variant="outline" className="!text-[0.6875rem] relative z-20">Digital Deed</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
