"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function AddedListings() {
  const [showForm, setShowForm] = useState(false);
  const [listingType, setListingType] = useState<"sell" | "rent">("sell");

  return (
    <section className="space-y-8">
      <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
        <h2 className="font-headline text-3xl">Added Listings</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 font-label cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">{showForm ? "close" : "add"}</span>
          {showForm ? "Cancel" : "Add New Property"}
        </button>
      </div>

      {showForm ? (
        <div className="bg-surface-container-low p-8 editorial-shadow rounded-sm animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="mb-8 flex gap-4">
            <button
              onClick={() => setListingType("sell")}
              className={`pb-2 text-sm font-bold uppercase tracking-widest font-label transition-all ${
                listingType === "sell" ? "text-primary border-b-2 border-primary" : "text-on-secondary-container opacity-50"
              }`}
            >
              List for Sale
            </button>
            <button
              onClick={() => setListingType("rent")}
              className={`pb-2 text-sm font-bold uppercase tracking-widest font-label transition-all ${
                listingType === "rent" ? "text-primary border-b-2 border-primary" : "text-on-secondary-container opacity-50"
              }`}
            >
              List for Rent
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[0.6875rem] font-bold uppercase tracking-widest text-on-secondary-container font-label">Property Title</label>
                <input
                  type="text"
                  placeholder="e.g. Modern Hilltop Villa"
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 p-3 text-sm focus:outline-none focus:border-primary font-body"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[0.6875rem] font-bold uppercase tracking-widest text-on-secondary-container font-label">Location</label>
                <input
                  type="text"
                  placeholder="e.g. Nyarutarama, Kigali"
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 p-3 text-sm focus:outline-none focus:border-primary font-body"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[0.6875rem] font-bold uppercase tracking-widest text-on-secondary-container font-label">
                  {listingType === "sell" ? "Asking Price ($)" : "Monthly Rent ($)"}
                </label>
                <input
                  type="text"
                  placeholder="e.g. 500,000"
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 p-3 text-sm focus:outline-none focus:border-primary font-body"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[0.6875rem] font-bold uppercase tracking-widest text-on-secondary-container font-label">Total Area (sqm)</label>
                <input
                  type="text"
                  placeholder="e.g. 450"
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 p-3 text-sm focus:outline-none focus:border-primary font-body"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[0.6875rem] font-bold uppercase tracking-widest text-on-secondary-container font-label">Description</label>
              <textarea
                rows={4}
                placeholder="Describe the architectural highlights and unique features..."
                className="w-full bg-surface-container-lowest border border-outline-variant/30 p-3 text-sm focus:outline-none focus:border-primary font-body"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button type="submit">Submit Listing for Review</Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-surface-container-lowest border border-dashed border-outline-variant p-12 text-center">
          <p className="text-on-secondary-container font-serif italic mb-4 font-body">You haven't listed any properties for sale or lease yet.</p>
          <a href="/services" className="text-sm font-bold text-primary underline font-body cursor-pointer">Learn about listing with the Curator</a>
        </div>
      )}
    </section>
  );
}
