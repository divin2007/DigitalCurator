"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function AddListing() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
        <div className="mb-12">
          <Link href="/account" className="flex items-center gap-2 text-primary font-headline text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Dashboard
          </Link>
        </div>

        <header className="mb-16">
          <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight">List Your Legacy</h1>
          <p className="mt-6 text-lg text-on-secondary-container leading-relaxed font-body max-w-2xl">
            Entrust your property to our curators. We ensure your estate is presented to the most discerning global visionaries.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 bg-surface-container-lowest p-8 md:p-16 editorial-shadow">
            <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); alert("Listing inquiry submitted. A curator will contact you shortly."); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Property Title</label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all"
                    placeholder="e.g. The Rebero Sanctuary"
                    required
                  />
                </div>
                <div className="relative group">
                  <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Location</label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all"
                    placeholder="e.g. Nyarutarama, Kigali"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Property Type</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all appearance-none">
                    <option>Residential Villa</option>
                    <option>Commercial Space</option>
                    <option>Development Land</option>
                    <option>Luxury Apartment</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Estimated Value (USD)</label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all"
                    placeholder="e.g. 1,500,000"
                    type="number"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Brief Narrative</label>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all resize-none"
                  placeholder="Describe the soul of the property..."
                  rows={4}
                  required
                />
              </div>

              <div className="pt-8">
                <Button type="submit" className="w-full md:w-auto px-12 py-5 font-bold tracking-[0.2em] text-xs">
                  INITIATE LISTING INQUIRY
                </Button>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-4 space-y-12">
            <div className="p-10 bg-primary/5 border border-primary/20">
              <h3 className="font-headline text-2xl mb-6">The Curation Process</h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <span className="text-primary font-headline text-3xl font-bold opacity-30">01</span>
                  <div>
                    <h4 className="font-bold mb-2">Initial Review</h4>
                    <p className="text-sm text-on-secondary-container font-body leading-relaxed">Our curators evaluate the property&apos;s architectural merit and investment potential within 48 hours.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-headline text-3xl font-bold opacity-30">02</span>
                  <div>
                    <h4 className="font-bold mb-2">Visual Cataloging</h4>
                    <p className="text-sm text-on-secondary-container font-body leading-relaxed">We conduct professional cinematic photography and virtual tour creation to highlight every unique detail.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-headline text-3xl font-bold opacity-30">03</span>
                  <div>
                    <h4 className="font-bold mb-2">Elite Exposure</h4>
                    <p className="text-sm text-on-secondary-container font-body leading-relaxed">Your listing is presented directly to our private network of high-net-worth investors and visionaries.</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
