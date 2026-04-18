"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties } from "@/lib/mock-data";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Properties() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
        <header className="mb-20 max-w-3xl">
          <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-primary font-bold mb-4 font-label">The Collection</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1] font-headline">Curated Rwandan Estates</h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed font-body">
            Discover a portfolio of architectural marvels and prime landscapes, handpicked for the discerning visionary. From the hills of Nyarutarama to the tranquility of lakefront vistas.
          </p>
        </header>

        {/* Refined Filters Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-outline-variant/15">
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
              {/* Type Filter */}
              <div className="flex items-center gap-4">
                <span className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold font-label">Type:</span>
                <div className="flex gap-1.5">
                  <button className="px-3 py-1 rounded-full border border-primary text-primary text-xs font-semibold transition-all">All</button>
                  <button className="px-3 py-1 rounded-full border border-outline-variant text-xs font-semibold text-on-surface-variant hover:border-primary transition-all">House</button>
                  <button className="px-3 py-1 rounded-full border border-outline-variant text-xs font-semibold text-on-surface-variant hover:border-primary transition-all">Land</button>
                </div>
              </div>
              {/* Status Filter */}
              <div className="flex items-center gap-4">
                <span className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold font-label">Offer:</span>
                <div className="flex gap-1.5">
                  <button className="px-3 py-1 rounded-full border border-outline-variant text-xs font-semibold text-on-surface-variant hover:border-primary transition-all">Buy</button>
                  <button className="px-3 py-1 rounded-full border border-outline-variant text-xs font-semibold text-on-surface-variant hover:border-primary transition-all">Rent</button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant text-xs uppercase tracking-widest font-label">
              <span className="font-bold">{properties.length} results</span>
              <span className="h-4 w-[1px] bg-outline-variant"></span>
              <button className="flex items-center gap-2 hover:text-primary transition-colors font-bold">
                <span className="material-symbols-outlined text-[18px]">tune</span> Filter
              </button>
            </div>
          </div>
        </section>

        {/* Bento Grid Gallery */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12">
          {properties.map((property, index) => {
            const isLarge = index % 3 === 0;
            return (
              <div
                key={property.id}
                className={`${isLarge ? "md:col-span-8" : "md:col-span-4"} group cursor-pointer relative`}
              >
                <Link href={`/properties/${property.id}`}>
                  <div className={`relative ${isLarge ? "aspect-[16/9]" : "aspect-[4/5]"} mb-6 overflow-hidden bg-surface-container-low`}>
                    <Image
                      alt={property.title}
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      src={property.imageUrl}
                      fill
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                      <div className="bg-white/90 backdrop-blur-sm text-on-surface px-8 py-3 font-bold tracking-widest text-[0.6875rem] uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Estate Details
                      </div>
                    </div>
                    <span className="absolute top-6 right-6 bg-primary-fixed text-on-primary-fixed-variant px-4 py-1.5 rounded-full text-[0.6875rem] font-bold tracking-widest uppercase">
                      {property.price}
                    </span>
                  </div>
                </Link>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[0.6875rem] uppercase tracking-widest text-primary font-bold mb-2 font-label">{property.location}</p>
                    <h3 className="text-3xl font-bold tracking-tight mb-4 font-headline">{property.title}</h3>
                    <div className="flex gap-6 text-on-surface-variant text-sm font-light font-body">
                      {property.beds && (
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[18px]">bed</span> {property.beds} Bedrooms
                        </span>
                      )}
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">square_foot</span> {property.area}
                      </span>
                    </div>
                  </div>
                  <Link href={`/properties/${property.id}`} className="flex items-center gap-2 text-primary font-bold text-[0.6875rem] uppercase tracking-widest pb-1 border-b border-primary/20 hover:border-primary transition-all font-label">
                    Explore <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* Specialized Search CTA */}
        <section className="mt-32 p-16 bg-inverse-surface text-on-tertiary flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6 font-headline text-white">Can&apos;t find your legacy?</h2>
            <p className="text-zinc-400 font-light leading-relaxed font-body">Our curators specialize in identifying off-market opportunities that never reach the public eye. Tell us your vision, and we will find the coordinates.</p>
          </div>
          <Button href="/contact">
            Consult a Curator
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
