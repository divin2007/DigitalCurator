"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardSidebar from "@/components/account/DashboardSidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            {children}
          </div>
          <div className="md:col-span-4">
            <DashboardSidebar onContactClick={() => setIsContactModalOpen(true)} />
          </div>
        </div>
      </main>
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white max-w-lg w-full p-12 relative editorial-shadow">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h2 className="font-headline text-3xl mb-4 text-on-surface">Direct Message</h2>
            <p className="text-on-secondary-container mb-8 font-body">Send a secure inquiry to your dedicated curator.</p>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsContactModalOpen(false); }}>
              <textarea
                className="w-full border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg resize-none text-on-surface"
                placeholder="How can Divine assist you today?"
                rows={4}
                required
              ></textarea>
              <button type="submit" className="w-full premium-gradient text-white py-4 font-bold tracking-widest text-xs uppercase rounded-sm">Send Message</button>
            </form>
          </div>
        </div>
      )}
      {/* TODO: Add Contact Modal here if needed across all account pages */}
      <Footer />
    </>
  );
}
