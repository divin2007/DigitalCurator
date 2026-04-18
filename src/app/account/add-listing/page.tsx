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

      <div className="bg-surface-container-low p-8 md:p-16 rounded-sm border border-outline-variant/10 editorial-shadow">
        {submitted ? (
          <div className="py-20 text-center space-y-4">
            <span className="material-symbols-outlined text-6xl text-primary">verified</span>
            <h3 className="text-2xl font-headline">Inquiry Received</h3>
            <p className="text-on-secondary-container font-body">Our curators have been notified and will review your property prospectus shortly.</p>
          </div>
        ) : (
        <form className="space-y-12" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Property Title</label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all text-on-surface"
                placeholder="e.g. The Rebero Sanctuary"
                required
              />
            </div>
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Location</label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all text-on-surface"
                placeholder="e.g. Nyarutarama, Kigali"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Property Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all appearance-none text-on-surface"
              >
                <option>Residential Villa</option>
                <option>Commercial Space</option>
                <option>Development Land</option>
                <option>Luxury Apartment</option>
              </select>
            </div>
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Estimated Value (USD)</label>
              <input
                name="value"
                value={formData.value}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all text-on-surface"
                placeholder="e.g. 1,500,000"
                type="number"
              />
            </div>
          </div>

          <div className="relative group">
            <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Brief Narrative</label>
            <textarea
              name="narrative"
              value={formData.narrative}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all resize-none text-on-surface"
              placeholder="Describe the soul of the property..."
              rows={4}
              required
            />
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
