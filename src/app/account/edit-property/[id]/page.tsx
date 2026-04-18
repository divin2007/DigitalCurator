"use client";

import { useState, use } from "react";
import { properties } from "@/lib/mock-data";
import { notFound, useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function EditProperty({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = use(paramsPromise);
  const router = useRouter();
  const property = properties.find((p) => p.id === params.id);

  const [formData, setFormData] = useState({
    title: property?.title || "",
    location: property?.location || "",
    price: property?.price || "",
    description: property?.description || "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!property) {
    notFound();
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSaving(false);
    setSaved(true);
    setTimeout(() => {
        setSaved(false);
        router.push("/account/management");
    }, 2000);
  };

  return (
    <div className="space-y-16">
      <header>
        <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight leading-tight">Edit Listing</h1>
        <p className="mt-6 text-lg text-on-secondary-container leading-relaxed font-body max-w-2xl">
          Refine the presentation of your estate to align with the Digital Curator standards.
        </p>
      </header>

      <div className="bg-surface-container-low p-8 md:p-16 rounded-sm border border-outline-variant/10 editorial-shadow">
        <form className="space-y-12" onSubmit={handleSubmit}>
          {saved && (
            <div className="p-4 bg-primary/10 text-primary rounded-sm font-body text-sm">
              Listing updated successfully. Redirecting to management...
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Property Title</label>
              <input
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all text-on-surface"
                required
              />
            </div>
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Location</label>
              <input
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all text-on-surface"
                required
              />
            </div>
          </div>

          <div className="relative group">
            <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Price / Acquisition Value</label>
            <input
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all text-on-surface"
              required
            />
          </div>

          <div className="relative group">
            <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all resize-none text-on-surface"
              rows={6}
              required
            />
          </div>

          <div className="pt-8 flex gap-6">
            <Button type="submit" disabled={isSaving} className="px-12 py-5 font-bold tracking-[0.2em] text-xs">
              {isSaving ? "SAVING CHANGES..." : "SAVE CHANGES"}
            </Button>
            <Button variant="outline" href="/account/management" className="px-12 py-5 font-bold tracking-[0.2em] text-xs">
              CANCEL
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
