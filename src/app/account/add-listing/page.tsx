"use client";

import Button from "@/components/ui/Button";

export default function AddListing() {
  return (
    <div className="space-y-16">
      <header>
        <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight leading-tight">List Your Legacy</h1>
        <p className="mt-6 text-lg text-on-secondary-container leading-relaxed font-body max-w-2xl">
          Entrust your property to our curators. We ensure your estate is presented to the most discerning global visionaries.
        </p>
      </header>

      <div className="bg-surface-container-low p-8 md:p-16 rounded-sm border border-outline-variant/10 editorial-shadow">
        <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); alert("Listing inquiry submitted."); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Property Title</label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all text-on-surface"
                placeholder="e.g. The Rebero Sanctuary"
                required
              />
            </div>
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Location</label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all text-on-surface"
                placeholder="e.g. Nyarutarama, Kigali"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Property Type</label>
              <select className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all appearance-none text-on-surface">
                <option>Residential Villa</option>
                <option>Commercial Space</option>
                <option>Development Land</option>
                <option>Luxury Apartment</option>
              </select>
            </div>
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Estimated Value (USD)</label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all text-on-surface"
                placeholder="e.g. 1,500,000"
                type="number"
              />
            </div>
          </div>

          <div className="relative group">
            <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Brief Narrative</label>
            <textarea
              className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all resize-none text-on-surface"
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
    </div>
  );
}
