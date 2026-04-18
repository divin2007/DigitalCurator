"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function MyProperties() {
  const [propertyList, setPropertyList] = useState([
    {
      id: "DC-8802",
      title: "Serenity Peak Estate",
      location: "Kigali, Rebero District",
      status: "Active",
      price: "$3.2M",
      beds: 6,
      area: "6,200 sqft",
      views: "12.4k",
      leads: "48",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBazJI622wRiagsGt7w3oUBGO54vXJs2hicyBOrZtCjL9YbsagKm7SWwZpx9CDcLV10Vpz1pI1r4eRb2JX9fbosk9jGacWEMielPtRtz9SiwdTmqyThnYHlUne01sH-7sVbWXSVUtyv0pDFUp6kBAxmBMxmNFgEtpl_oFAzhj1C2oa5JcbwE_YrrY2jDYTGURg5PYjYZ_xXtgd-XE1oYs6g8YEeBNxw6n7lIfTZzu-Xcduoo7FttHU3RwQpHBDJln8DM7ISKHL2-CQ",
      description: "A prestigious hilltop estate offering panoramic views and world-class luxury."
    }
  ]);
  const [filter, setFilter] = useState("All");
  const [editProperty, setEditProperty] = useState<typeof propertyList[0] | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const filteredProperties = propertyList.filter(p =>
    filter === "All" || p.status === filter
  );

  const toggleStatus = (id: string) => {
    setPropertyList(prev => prev.map(p => {
      if (p.id === id) {
        const nextStatus = p.status === "Active" ? "Pending" : p.status === "Pending" ? "Sold" : "Active";
        return { ...p, status: nextStatus };
      }
      return p;
    }));
  };

  return (
    <div className="space-y-16">
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-4">
          <span className="text-[0.6875rem] uppercase tracking-[0.15em] text-primary font-bold font-label">Portfolio Management</span>
          <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight">Your Rwandan Legacy</h1>
          <p className="text-on-secondary-container max-w-md font-body text-lg">Oversee your curated collection of ultra-luxury estates and monitor engagement metrics in real-time.</p>
        </div>
        <Button href="/account/add-listing" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">add</span>
          List New Property
        </Button>
      </header>

      {/* Portfolio Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-surface-container-lowest p-8 border border-outline-variant/10 rounded-sm editorial-shadow flex flex-col justify-between min-h-[200px]">
          <div>
            <span className="text-[0.6875rem] uppercase tracking-[0.1em] text-on-surface-variant font-label">Portfolio Performance</span>
            <h3 className="text-3xl font-headline mt-2">124,802 <span className="text-sm font-body text-primary">+12%</span></h3>
          </div>
          <div className="flex items-end gap-1 h-12">
            {[30, 45, 35, 60, 55, 90, 75].map((h, i) => (
              <div key={i} className="w-full bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
        <div className="bg-surface-container-low p-8 border border-outline-variant/10 rounded-sm flex flex-col justify-between">
          <span className="material-symbols-outlined text-primary text-3xl">chat_bubble_outline</span>
          <div>
            <span className="text-[0.6875rem] uppercase tracking-[0.1em] text-on-surface-variant font-label">Active Inquiries</span>
            <h3 className="text-3xl font-headline mt-1">12</h3>
          </div>
        </div>
        <div className="bg-inverse-surface p-8 border border-outline-variant/10 rounded-sm flex flex-col justify-between">
          <span className="material-symbols-outlined text-primary-fixed text-3xl">visibility</span>
          <div>
            <span className="text-[0.6875rem] uppercase tracking-[0.1em] text-surface-variant/60 font-label">Total Reach</span>
            <h3 className="text-3xl font-headline mt-1 text-white">1.2M</h3>
          </div>
        </div>
      </section>

      {/* Listings section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
          <h2 className="font-headline text-3xl">Active Listings</h2>
          <div className="flex gap-4">
             {["All", "Pending", "Sold"].map((f) => (
               <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs font-bold uppercase tracking-widest pb-1 font-label transition-all ${filter === f ? 'border-b-2 border-primary text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                {f}
              </button>
             ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredProperties.map((prop, i) => (
            <div key={i} className="group bg-surface-container-lowest overflow-hidden flex flex-col md:flex-row editorial-shadow transition-all hover:bg-surface-container-low cursor-pointer border border-outline-variant/10">
              <div className="md:w-80 h-64 overflow-hidden relative">
                <Image
                  alt={prop.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  src={prop.imageUrl}
                  fill
                />
              </div>
              <div className="flex-1 p-8 flex flex-col md:flex-row justify-between md:items-center gap-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-0.5 rounded-full text-[0.6rem] font-bold tracking-widest uppercase font-label ${
                      prop.status === "Active" ? "bg-primary-fixed text-on-primary-fixed-variant" :
                      prop.status === "Pending" ? "bg-secondary-container text-on-secondary-container" :
                      "bg-inverse-surface text-white"
                    }`}>{prop.status}</span>
                    <span className="text-on-surface-variant text-xs font-body">ID: {prop.id}</span>
                  </div>
                  <h4 className="text-2xl font-headline font-semibold text-on-surface">{prop.title}</h4>
                  <p className="text-on-secondary-container text-sm font-light font-body">{prop.location} • {prop.beds} Bedrooms • {prop.area}</p>
                </div>

                <div className="grid grid-cols-3 gap-12 text-center md:text-left border-x border-outline-variant/20 px-12 h-16 items-center">
                  <div>
                    <span className="block text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1 font-label">Views</span>
                    <span className="font-headline font-semibold text-lg">{prop.views}</span>
                  </div>
                  <div>
                    <span className="block text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1 font-label">Leads</span>
                    <span className="font-headline font-semibold text-lg">{prop.leads}</span>
                  </div>
                  <div>
                    <span className="block text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1 font-label">Value</span>
                    <span className="font-headline font-semibold text-lg">{prop.price}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href={`/properties/obsidian-heights-villa`} className="flex items-center gap-2 text-primary font-bold text-[0.65rem] uppercase tracking-[0.15em] hover:opacity-70 transition-opacity font-label">
                    View Public Page
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                  <div className="flex gap-2">
                     <button
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setEditProperty(prop); }}
                      className="p-2 rounded-full transition-colors border hover:bg-surface-container-high text-on-surface-variant border-outline-variant/20"
                      title="Edit Listing"
                    >
                        <span className="material-symbols-outlined text-lg">edit</span>
                     </button>
                     <button
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleStatus(prop.id); }}
                      className="p-2 hover:bg-surface-container-high rounded-full transition-colors border border-outline-variant/20"
                      title="Change Status"
                    >
                        <span className="material-symbols-outlined text-on-surface-variant text-lg">sync</span>
                     </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Edit Property Modal */}
      {editProperty && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white max-w-2xl w-full p-12 relative editorial-shadow max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => { setEditProperty(null); setIsSaved(false); }}
              className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h2 className="font-headline text-3xl mb-8">Edit Listing</h2>

            {isSaved ? (
              <div className="py-20 text-center space-y-4">
                <span className="material-symbols-outlined text-6xl text-primary">verified</span>
                <h3 className="text-2xl font-headline">Listing Updated</h3>
                <p className="text-on-secondary-container font-body">Your property details have been successfully refined.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                setIsSaving(true);
                await new Promise(resolve => setTimeout(resolve, 1500));
                setPropertyList(prev => prev.map(p => p.id === editProperty.id ? editProperty : p));
                setIsSaving(false);
                setIsSaved(true);
                setTimeout(() => {
                  setEditProperty(null);
                  setIsSaved(false);
                }, 2000);
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[0.6875rem] uppercase tracking-widest text-secondary font-bold font-label">Property Title</label>
                    <input
                      value={editProperty.title}
                      onChange={(e) => setEditProperty({...editProperty, title: e.target.value})}
                      className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none font-body text-on-surface"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[0.6875rem] uppercase tracking-widest text-secondary font-bold font-label">Location</label>
                    <input
                      value={editProperty.location}
                      onChange={(e) => setEditProperty({...editProperty, location: e.target.value})}
                      className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none font-body text-on-surface"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[0.6875rem] uppercase tracking-widest text-secondary font-bold font-label">Price / Value</label>
                    <input
                      value={editProperty.price}
                      onChange={(e) => setEditProperty({...editProperty, price: e.target.value})}
                      className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none font-body text-on-surface"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[0.6875rem] uppercase tracking-widest text-secondary font-bold font-label">Description</label>
                  <textarea
                    value={editProperty.description || ""}
                    onChange={(e) => setEditProperty({...editProperty, description: e.target.value})}
                    className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none font-body resize-none text-on-surface"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <div className="pt-4 flex gap-4">
                  <Button type="submit" className="flex-1" disabled={isSaving}>
                    {isSaving ? "SAVING..." : "SAVE CHANGES"}
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => setEditProperty(null)}>
                    CANCEL
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Curator Assistance CTA */}
      <section className="p-16 bg-surface-container-low border border-primary/20 rounded-sm flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h2 className="text-4xl font-headline font-bold mb-6 text-on-surface">Need help with optimization?</h2>
          <p className="text-on-secondary-container font-light leading-relaxed font-body">Our curators offer data-driven insights to help your property reach its maximum potential. Request a portfolio audit to improve your engagement metrics.</p>
        </div>
        <Button variant="outline" className="whitespace-nowrap">Consult a Curator</Button>
      </section>
    </div>
  );
}
