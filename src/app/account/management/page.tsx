"use client";

import Button from "@/components/ui/Button";

export default function MyProperties() {
  const properties = [
    { title: "Serenity Peak Estate", location: "Rebero Hill", status: "Verified Ownership", price: "$3.2M", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBazJI622wRiagsGt7w3oUBGO54vXJs2hicyBOrZtCjL9YbsagKm7SWwZpx9CDcLV10Vpz1pI1r4eRb2JX9fbosk9jGacWEMielPtRtz9SiwdTmqyThnYHlUne01sH-7sVbWXSVUtyv0pDFUp6kBAxmBMxmNFgEtpl_oFAzhj1C2oa5JcbwE_YrrY2jDYTGURg5PYjYZ_xXtgd-XE1oYs6g8YEeBNxw6n7lIfTZzu-Xcduoo7FttHU3RwQpHBDJln8DM7ISKHL2-CQ" }
  ];

  return (
    <div className="space-y-16">
      <header>
        <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight">My Properties</h1>
        <p className="mt-6 text-lg text-on-secondary-container leading-relaxed font-body">Manage your owned assets and active listings.</p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {properties.map((prop, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 bg-surface-container-low border border-outline-variant/10 p-8 editorial-shadow group">
            <div className="w-full md:w-1/3 aspect-video md:aspect-square overflow-hidden bg-zinc-200">
              <img alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={prop.imageUrl} />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[0.6875rem] text-primary uppercase font-bold tracking-widest font-label">{prop.status}</span>
                  <h3 className="font-headline text-3xl mt-1 text-on-surface">{prop.title}</h3>
                  <p className="text-on-secondary-container font-body mt-1">{prop.location}</p>
                </div>
                <span className="text-xl font-headline text-primary font-bold">{prop.price}</span>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="primary" className="!px-6 !py-3 !text-xs" onClick={() => alert('Editing functionality in development.')}>
                  Edit Details
                </Button>
                <Button href="/account/vault" variant="outline" className="!px-6 !py-3 !text-xs">
                  View Documents
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
