"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function AddListing() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "Residential Villa",
    value: "",
    narrative: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="space-y-16">
      <header>
        <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight leading-tight">List Your Legacy</h1>
        <p className="mt-6 text-lg text-on-secondary-container leading-relaxed font-body max-w-2xl">
          Entrust your property to our curators. We ensure your estate is presented to the most discerning global visionaries.
        </p>
      </header>

      <div className="bg-surface-container-low p-8 md:p-12 lg:p-16 rounded-sm border border-outline-variant/10 editorial-shadow">
        {submitted ? (
          <div className="py-24 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
              <span className="material-symbols-outlined text-4xl text-primary">verified</span>
            </div>
            <h3 className="text-3xl font-headline font-bold text-on-surface">Prospectus Received</h3>
            <p className="text-on-secondary-container font-body text-lg max-w-md mx-auto leading-relaxed">
              Our curators have been notified. We will reach out within 48 hours to discuss the positioning of your estate in our exclusive collection.
            </p>
            <div className="pt-8">
              <Button variant="outline" onClick={() => setSubmitted(false)}>List Another Property</Button>
            </div>
          </div>
        ) : (
        <form className="space-y-16" onSubmit={handleSubmit}>
          <div className="space-y-10">
            <div className="flex items-center gap-4 pb-4 border-b border-outline-variant/20">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-bold font-label">01</span>
              <h3 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface">Identity & Location</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <label className="text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-on-surface-variant block mb-2 font-label">Property Title</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 focus:ring-0 focus:border-primary font-body text-xl transition-all text-on-surface placeholder:text-outline-variant/50"
                  placeholder="The Rebero Sanctuary"
                  required
                />
              </div>
              <div className="relative group">
                <label className="text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-on-surface-variant block mb-2 font-label">Location</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 focus:ring-0 focus:border-primary font-body text-xl transition-all text-on-surface placeholder:text-outline-variant/50"
                  placeholder="Nyarutarama, Kigali"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex items-center gap-4 pb-4 border-b border-outline-variant/20">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-bold font-label">02</span>
              <h3 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface">Classification & Value</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <label className="text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-on-surface-variant block mb-2 font-label">Property Type</label>
                <div className="relative">
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 focus:ring-0 focus:border-primary font-body text-xl transition-all appearance-none text-on-surface cursor-pointer"
                  >
                    <option>Residential Villa</option>
                    <option>Commercial Space</option>
                    <option>Development Land</option>
                    <option>Luxury Apartment</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-outline-variant">expand_more</span>
                </div>
              </div>
              <div className="relative group">
                <label className="text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-on-surface-variant block mb-2 font-label">Estimated Value (USD)</label>
                <input
                  name="value"
                  value={formData.value}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 focus:ring-0 focus:border-primary font-body text-xl transition-all text-on-surface placeholder:text-outline-variant/50"
                  placeholder="1,500,000"
                  type="number"
                />
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex items-center gap-4 pb-4 border-b border-outline-variant/20">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-bold font-label">03</span>
              <h3 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface">The Narrative</h3>
            </div>
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-on-surface-variant block mb-2 font-label">Brief Description</label>
              <textarea
                name="narrative"
                value={formData.narrative}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 focus:ring-0 focus:border-primary font-body text-xl transition-all resize-none text-on-surface placeholder:text-outline-variant/50 min-h-[160px]"
                placeholder="Describe the soul and architectural significance of the property..."
                required
              />
            </div>
          </div>

          <div className="pt-8">
            <Button type="submit" className="w-full md:w-auto px-12 py-5 font-bold tracking-[0.2em] text-xs" disabled={isLoading}>
              {isLoading ? "INITIATING..." : "INITIATE LISTING INQUIRY"}
            </Button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
}
