import Link from "next/link";
import Image from "next/image";

export default function SavedProperties() {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
        <h2 className="font-headline text-3xl">Saved Properties</h2>
        <Link className="text-primary text-sm font-medium hover:text-primary-container transition-all" href="/account/saved">View All</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Property Card 1 */}
        <Link href="/properties/obsidian-heights-villa" className="bg-surface-container-lowest editorial-shadow transition-all group cursor-pointer hover:scale-[1.02] active:scale-100">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              alt="Kigali Luxury Villa"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzN6MXwO2k_ZcL8LfpUIK6uQSTDfNhEKlTg2JpYIYAZeOIWCQygnUtc3-AP8GeYJD47k7VlP0lBDx85SN-fR_-KcR-6NsHAuHpMx7_KefIyjf8UivDQym8UupVca25dxtjD_umwHP2dKAZzBQ-oD_0frmTla8K72CYoc7nh2WO1b4zgDhm4R2YV3jsEvg089T8jYPVfF-v_1IoAwu8W9xgvJCu4p8QrDDrc4vBceIDbVv9E5Rg6kfVt8o07F5dTTVflT_R-gnmlVo"
              fill
            />
            <span className="absolute top-4 right-4 z-10 rounded-full px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant text-[0.6875rem] font-bold tracking-widest uppercase">
              $2,450,000
            </span>
          </div>
          <div className="p-8">
            <p className="text-[0.6875rem] uppercase tracking-widest text-on-secondary-container mb-2 font-label">Nyarutarama, Kigali</p>
            <h3 className="font-headline text-2xl mb-6">The Obsidian Pavilion</h3>
            <div className="flex gap-6 text-sm text-on-secondary-container font-light font-body">
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">bed</span> 5 Beds</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">square_foot</span> 640 m²</span>
            </div>
          </div>
        </Link>
        {/* Property Card 2 */}
        <Link href="/properties/kivu-emerald-estate" className="bg-surface-container-lowest editorial-shadow transition-all group cursor-pointer hover:scale-[1.02] active:scale-100">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              alt="Lake Kivu Retreat"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBazJI622wRiagsGt7w3oUBGO54vXJs2hicyBOrZtCjL9YbsagKm7SWwZpx9CDcLV10Vpz1pI1r4eRb2JX9fbosk9jGacWEMielPtRtz9SiwdTmqyThnYHlUne01sH-7sVbWXSVUtyv0pDFUp6kBAxmBMxmNFgEtpl_oFAzhj1C2oa5JcbwE_YrrY2jDYTGURg5PYjYZ_xXtgd-XE1oYs6g8YEeBNxw6n7lIfTZzu-Xcduoo7FttHU3RwQpHBDJln8DM7ISKHL2-CQ"
              fill
            />
            <span className="absolute top-4 right-4 z-10 rounded-full px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant text-[0.6875rem] font-bold tracking-widest uppercase">
              $1,800,000
            </span>
          </div>
          <div className="p-8">
            <p className="text-[0.6875rem] uppercase tracking-widest text-on-secondary-container mb-2 font-label">Gisenyi Waterfront</p>
            <h3 className="font-headline text-2xl mb-6">Kivu Horizon Estate</h3>
            <div className="flex gap-6 text-sm text-on-secondary-container font-light font-body">
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">bed</span> 4 Beds</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">square_foot</span> 420 m²</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
