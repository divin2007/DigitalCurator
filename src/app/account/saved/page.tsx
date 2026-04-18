"use client";

import Link from "next/link";
import Image from "next/image";
import { properties } from "@/lib/mock-data";

export default function SavedPropertiesPage() {
  return (
    <div className="space-y-16">
      <div className="">
        <Link href="/account" className="flex items-center gap-2 text-primary font-headline text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Dashboard
        </Link>
      </div>

      <header>
        <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight">Saved Collection</h1>
        <p className="mt-6 text-lg text-on-secondary-container leading-relaxed font-body">Your curated wishlist of Rwandan gems.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="bg-surface-container-low editorial-shadow transition-all group cursor-pointer border border-outline-variant/10 flex flex-col">
            <Link href={`/properties/${property.id}`} className="block w-full">
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200">
                <Image
                  alt={property.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src={property.imageUrl}
                  fill
                />
                <span className="absolute top-4 right-4 z-10 rounded-full px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant text-[0.6875rem] font-bold tracking-widest uppercase">
                  {property.price}
                </span>
              </div>
            </Link>
            <div className="p-8">
              <p className="text-[0.6875rem] uppercase tracking-widest text-on-secondary-container mb-2 font-label">{property.location}</p>
              <h3 className="font-headline text-2xl mb-6 text-on-surface">{property.title}</h3>
              <div className="flex gap-6 text-sm text-on-secondary-container font-light font-body">
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">bed</span> {property.beds || 0} Beds</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">square_foot</span> {property.area}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
