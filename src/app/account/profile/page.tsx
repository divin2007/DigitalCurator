"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "Mutesi",
    email: "mutesi@example.com",
    phone: "+250 788 000 000",
    notifications: true,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-16">
      <header>
        <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight leading-tight">Your Profile</h1>
        <p className="mt-6 text-lg text-on-secondary-container leading-relaxed font-body max-w-2xl">
          Manage your personal information and preferences for a tailored curation experience.
        </p>
      </header>

      <div className="bg-surface-container-low p-8 md:p-16 rounded-sm border border-outline-variant/10 editorial-shadow">
        <form className="space-y-12" onSubmit={handleSubmit}>
          {saved && (
            <div className="p-4 bg-primary/10 text-primary rounded-sm font-body text-sm">
              Profile updated successfully.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Full Name</label>
              <input
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all text-on-surface"
                required
              />
            </div>
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Email Address</label>
              <input
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all text-on-surface"
                type="email"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant block mb-2 font-label">Phone Number</label>
              <input
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg transition-all text-on-surface"
              />
            </div>
            <div className="flex items-center gap-4 py-3">
              <input
                type="checkbox"
                id="notifications"
                checked={formData.notifications}
                onChange={(e) => setFormData({...formData, notifications: e.target.checked})}
                className="w-5 h-5 text-primary border-outline-variant rounded-sm focus:ring-primary"
              />
              <label htmlFor="notifications" className="text-on-surface font-body">Enable market insights and property alerts</label>
            </div>
          </div>

          <div className="pt-8">
            <Button type="submit" disabled={isSaving} className="w-full md:w-auto px-12 py-5 font-bold tracking-[0.2em] text-xs">
              {isSaving ? "SAVING..." : "UPDATE PROFILE"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
