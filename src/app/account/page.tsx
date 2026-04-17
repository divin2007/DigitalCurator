"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Account() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
        {/* Header Section */}
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[0.6875rem] uppercase tracking-[0.1em] text-on-primary-fixed-variant mb-4 block font-label">Personal Dashboard</span>
            <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight leading-tight">Welcome, Mutesi.</h1>
            <p className="mt-6 text-body-lg text-on-secondary-container leading-relaxed font-body">Your curated collection of Rwandan legacy properties and active applications, managed with precision and security.</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => setIsContactModalOpen(true)}>
              CONTACT CURATOR
            </Button>
          </div>
        </header>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-8 space-y-16">

            {/* Status Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-surface-container-low p-6 border-l-4 border-primary">
                <span className="text-[0.6875rem] uppercase font-bold text-on-secondary-container tracking-widest block mb-2 font-label">Active Applications</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-headline">02</span>
                  <span className="text-xs text-primary font-bold">1 Action Needed</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 border-l-4 border-tertiary-container">
                <span className="text-[0.6875rem] uppercase font-bold text-on-secondary-container tracking-widest block mb-2 font-label">Requested Property</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-headline">01</span>
                  <span className="text-xs text-on-secondary-container">In Review</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 border-l-4 border-secondary">
                <span className="text-[0.6875rem] uppercase font-bold text-on-secondary-container tracking-widest block mb-2 font-label">Secured Assets</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-headline">01</span>
                  <span className="text-xs text-on-secondary-container">Value: High</span>
                </div>
              </div>
            </div>

            {/* Section 1: Saved Properties */}
            <section className="space-y-8">
              <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
                <h2 className="font-headline text-3xl">Saved Properties</h2>
                <Link className="text-primary text-sm font-medium hover:text-primary-container transition-all" href="/account/saved">View All</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Property Card 1 */}
                <div className="bg-surface-container-lowest editorial-shadow transition-all group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img alt="Kigali Luxury Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzN6MXwO2k_ZcL8LfpUIK6uQSTDfNhEKlTg2JpYIYAZeOIWCQygnUtc3-AP8GeYJD47k7VlP0lBDx85SN-fR_-KcR-6NsHAuHpMx7_KefIyjf8UivDQym8UupVca25dxtjD_umwHP2dKAZzBQ-oD_0frmTla8K72CYoc7nh2WO1b4zgDhm4R2YV3jsEvg089T8jYPVfF-v_1IoAwu8W9xgvJCu4p8QrDDrc4vBceIDbVv9E5Rg6kfVt8o07F5dTTVflT_R-gnmlVo" />
                    <span className="absolute top-4 right-4 rounded-full px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant text-[0.6875rem] font-bold tracking-widest uppercase">
                      $2,450,000
                    </span>
                  </div>
                  <div className="p-8">
                    <p className="text-[0.6875rem] uppercase tracking-widest text-on-secondary-container mb-2 font-label">Nyarutarama, Kigali</p>
                    <h3 className="font-headline text-2xl mb-6">The Obsidian Pavilion</h3>
                    <div className="flex gap-6 text-sm text-on-secondary-container font-light font-body">
                      <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">bed</span> 5 Beds</span>
                      <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">square_foot</span> 640 m²</span>
                    </div>
                  </div>
                </div>
                {/* Property Card 2 */}
                <div className="bg-surface-container-lowest editorial-shadow transition-all group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img alt="Lake Kivu Retreat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBazJI622wRiagsGt7w3oUBGO54vXJs2hicyBOrZtCjL9YbsagKm7SWwZpx9CDcLV10Vpz1pI1r4eRb2JX9fbosk9jGacWEMielPtRtz9SiwdTmqyThnYHlUne01sH-7sVbWXSVUtyv0pDFUp6kBAxmBMxmNFgEtpl_oFAzhj1C2oa5JcbwE_YrrY2jDYTGURg5PYjYZ_xXtgd-XE1oYs6g8YEeBNxw6n7lIfTZzu-Xcduoo7FttHU3RwQpHBDJln8DM7ISKHL2-CQ" />
                    <span className="absolute top-4 right-4 rounded-full px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant text-[0.6875rem] font-bold tracking-widest uppercase">
                      $1,800,000
                    </span>
                  </div>
                  <div className="p-8">
                    <p className="text-[0.6875rem] uppercase tracking-widest text-on-secondary-container mb-2 font-label">Gisenyi Waterfront</p>
                    <h3 className="font-headline text-2xl mb-6">Kivu Horizon Estate</h3>
                    <div className="flex gap-6 text-sm text-on-secondary-container font-light font-body">
                      <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">bed</span> 4 Beds</span>
                      <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">square_foot</span> 420 m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Active Inquiries */}
            <section className="space-y-8">
              <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
                <h2 className="font-headline text-3xl">Active Inquiries</h2>
                <span className="text-on-secondary-container text-xs uppercase tracking-widest font-label">Portfolio Expansion</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-primary/40 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 bg-zinc-200">
                      <img alt="Property" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzN6MXwO2k_ZcL8LfpUIK6uQSTDfNhEKlTg2JpYIYAZeOIWCQygnUtc3-AP8GeYJD47k7VlP0lBDx85SN-fR_-KcR-6NsHAuHpMx7_KefIyjf8UivDQym8UupVca25dxtjD_umwHP2dKAZzBQ-oD_0frmTla8K72CYoc7nh2WO1b4zgDhm4R2YV3jsEvg089T8jYPVfF-v_1IoAwu8W9xgvJCu4p8QrDDrc4vBceIDbVv9E5Rg6kfVt8o07F5dTTVflT_R-gnmlVo" />
                    </div>
                    <div>
                      <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold font-label">Property Request</span>
                      <h4 className="font-bold text-xl mt-1 font-headline">Emerald Ridge Residence</h4>
                      <p className="text-xs text-on-secondary-container mt-1 font-body">Rebero Hill • Submitted Oct 12, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-[0.6875rem] font-bold px-3 py-1 bg-tertiary-container text-white uppercase tracking-widest mb-2 font-label">In Review</span>
                  </div>
                </div>

                {/* Lending application card */}
                <div className="flex items-center justify-between p-6 bg-inverse-surface text-inverse-on-surface group">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
                    </div>
                    <div>
                      <span className="text-[0.6rem] uppercase tracking-widest text-primary-fixed-dim font-bold font-label">Lending Application</span>
                      <h4 className="font-bold text-xl mt-1 text-white font-headline">Residential Investment Loan</h4>
                      <p className="text-xs text-zinc-400 mt-1 font-body">Ref: #DC-8921 • Underwriter Review</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Button variant="outline" className="!border-white/20 hover:!bg-white hover:!text-black !text-[0.6875rem]">
                      Action Required
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Secured Assets */}
            <section className="space-y-8">
              <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
                <h2 className="font-headline text-3xl">Secured Assets</h2>
                <span className="text-on-secondary-container text-xs uppercase tracking-widest font-label">Portfolio Management</span>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col md:flex-row gap-8 bg-zinc-900 text-white p-8 editorial-shadow group">
                  <div className="w-full md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                    <img alt="Bought Property" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBazJI622wRiagsGt7w3oUBGO54vXJs2hicyBOrZtCjL9YbsagKm7SWwZpx9CDcLV10Vpz1pI1r4eRb2JX9fbosk9jGacWEMielPtRtz9SiwdTmqyThnYHlUne01sH-7sVbWXSVUtyv0pDFUp6kBAxmBMxmNFgEtpl_oFAzhj1C2oa5JcbwE_YrrY2jDYTGURg5PYjYZ_xXtgd-XE1oYs6g8YEeBNxw6n7lIfTZzu-Xcduoo7FttHU3RwQpHBDJln8DM7ISKHL2-CQ" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[0.6875rem] text-primary uppercase font-bold tracking-widest font-label">Verified Ownership</span>
                        <h3 className="font-headline text-3xl mt-1">Serenity Peak Estate</h3>
                      </div>
                      <span className="material-symbols-outlined text-primary text-4xl">verified</span>
                    </div>
                    <p className="text-zinc-400 text-sm mb-8 leading-relaxed font-body">Closed: Sept 2024. Property management portal is active for maintenance, digital deeds, and secure documentation.</p>
                    <div className="flex flex-wrap gap-4">
                      <Button href="/account/management" variant="primary" className="!bg-white !text-black hover:!bg-primary hover:!text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">dashboard_customize</span> Management Console
                      </Button>
                      <Button href="/account/vault" variant="outline" className="!border-white/20 !text-[0.6875rem]">Digital Deed</Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Added Listings */}
            <section className="space-y-8">
              <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
                <h2 className="font-headline text-3xl">Added Listings</h2>
                <Button href="/account/add-listing" variant="outline" className="!border-primary !text-primary !text-xs !py-2">
                  <span className="material-symbols-outlined text-sm">add</span> Add New Property
                </Button>
              </div>
              <div className="bg-surface-container-lowest border border-dashed border-outline-variant p-12 text-center">
                <p className="text-on-secondary-container font-headline italic mb-4">You haven&apos;t listed any properties for sale or lease yet.</p>
                <Link href="/services#listing" className="text-sm font-bold text-primary underline font-body">Learn about listing with the Curator</Link>
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <aside className="md:col-span-4 space-y-12">
            {/* Appointments Tracking */}
            <div className="bg-surface-container-low p-10 border border-outline-variant/20">
              <h2 className="font-headline text-2xl mb-8">Calendar</h2>
              <div className="space-y-8">
                <div className="flex gap-6 group cursor-pointer">
                  <div className="flex flex-col items-center justify-center bg-surface-container-lowest w-16 h-20 text-center editorial-shadow">
                    <span className="text-[0.6875rem] uppercase font-bold text-primary font-label">Oct</span>
                    <span className="font-headline text-2xl">24</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-tight mb-1 font-headline">Obsidian Pavilion</h4>
                    <p className="text-xs text-on-secondary-container mb-2 font-body">14:00 • Private Tour</p>
                    <span className="text-[0.6875rem] px-2 py-0.5 bg-secondary-container text-on-secondary-container font-medium font-label">CONFIRMED</span>
                  </div>
                </div>
                <div className="flex gap-6 group cursor-pointer opacity-60">
                  <div className="flex flex-col items-center justify-center bg-surface-container-lowest w-16 h-20 text-center">
                    <span className="text-[0.6875rem] uppercase font-bold text-zinc-400 font-label">Nov</span>
                    <span className="font-headline text-2xl">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-tight mb-1 font-headline">Virunga Eco-Lodge</h4>
                    <p className="text-xs text-on-secondary-container mb-2 font-body">10:30 • Initial Viewing</p>
                    <span className="text-[0.6875rem] px-2 py-0.5 bg-surface-container-highest text-on-secondary-container font-medium font-label uppercase">Pending</span>
                  </div>
                </div>
              </div>
              <Button href="/properties" className="mt-12 w-full flex items-center justify-center gap-2 group">
                Book a Viewing <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Button>
            </div>

            {/* Curator Support */}
            <div className="bg-surface-container-high p-10 border border-outline-variant/10">
              <h2 className="font-headline text-2xl mb-8">Support</h2>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-surface-container-highest overflow-hidden">
                  <img alt="Lead Curator" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxJNIMk-rrlMJQidp8f1Zehi2r03TcL6QczYBeDNh9w5iK_wzZsJtkF0ALM0kH4lpc8WzfFx1-qzQTcRba5xDPBUl31HIM5TIez5i536HVei9YmRzpczKRJxUZ9je13hh2t7DZRT9N7s4G-MGRiY8N8p7FLNn2a6N1f1ve_R0nz9VILGtDE9PyfgzaeYdHQB5AujDRnZxImzL4ANJ8FoFIGtYSIKmBgjjaOubqG7vlpd2WmO9nyy0_hoDDX76LUQ_9qfeBxzlikzc" />
                </div>
                <div>
                  <p className="text-[0.6875rem] uppercase text-on-secondary-container tracking-wider font-bold font-label">Dedicated Curator</p>
                  <h4 className="font-bold font-headline">Divine Kariza</h4>
                <button onClick={() => setIsContactModalOpen(true)} className="text-xs text-primary underline font-body">Direct Message</button>
                </div>
              </div>
              <Button onClick={() => setIsContactModalOpen(true)} variant="outline" className="w-full !border-primary !text-primary !text-[0.6875rem] uppercase tracking-widest font-bold">
                Schedule Sync
              </Button>
            </div>

            {/* Secure Document Vault */}
            <div className="bg-inverse-surface text-inverse-on-surface p-10">
              <h2 className="font-headline text-2xl mb-8 text-white">Vault</h2>
              <p className="text-xs text-zinc-400 mb-8 italic font-body">Your encrypted storage for all property titles, financial statements, and lease agreements.</p>
              <Button href="/account/vault" className="w-full" variant="outline">
                Access Documents
              </Button>
            </div>
          </aside>
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
