"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import DashboardHeader from "@/components/account/DashboardHeader";
import SavedProperties from "@/components/account/SavedProperties";
import AddedListings from "@/components/account/AddedListings";
import DashboardSidebar from "@/components/account/DashboardSidebar";
import StatusOverview from "@/components/account/StatusOverview";
import ActiveInquiries from "@/components/account/ActiveInquiries";
import SecuredAssets from "@/components/account/SecuredAssets";

export default function Account() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
        <DashboardHeader onContactClick={() => setIsContactModalOpen(true)} />

        {/* Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-8 space-y-16">
            <StatusOverview />
            <SavedProperties />
            <ActiveInquiries />
            <SecuredAssets />
            <AddedListings />
          </div>

          <DashboardSidebar onContactClick={() => setIsContactModalOpen(true)} />
        </div>
      </main>

      {/* Contact Modal Placeholder */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white max-w-lg w-full p-12 relative editorial-shadow">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h2 className="font-headline text-3xl mb-4">Direct Message</h2>
            <p className="text-on-secondary-container mb-8 font-body">Send a secure inquiry to your dedicated curator.</p>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsContactModalOpen(false); }}>
              <textarea
                className="w-full border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg resize-none"
                placeholder="How can Divine assist you today?"
                rows={4}
              ></textarea>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
