"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function DocumentVault() {
  const documents = [
    { name: "Digital Property Deed - Serenity Peak", type: "PDF", date: "Sept 24, 2024", size: "2.4 MB" },
    { name: "Investment Loan Agreement #DC-8921", type: "PDF", date: "Oct 12, 2024", size: "1.8 MB" },
    { name: "Tax Clearance Certificate - 2024", type: "PDF", date: "Aug 05, 2024", size: "0.9 MB" },
    { name: "Site Plan & Architectural Drawings", type: "ZIP", date: "Sept 15, 2024", size: "45.2 MB" },
  ];

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
          <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight">Secure Vault</h1>
          <p className="mt-6 text-lg text-on-secondary-container leading-relaxed font-body">Bank-grade encrypted storage for your Rwandan legacy documentation.</p>
        </header>

        <div className="bg-surface-container-low p-8 md:p-12 editorial-shadow">
          <div className="flex items-center gap-4 mb-12 p-4 bg-primary/5 border border-primary/10">
            <span className="material-symbols-outlined text-primary">verified_user</span>
            <p className="text-sm font-body">Your connection to the vault is end-to-end encrypted. Document access is logged for your security.</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-12 px-6 py-4 text-[0.6875rem] uppercase tracking-widest font-bold text-on-secondary-container border-b border-outline-variant/30">
              <div className="col-span-6">Document Name</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-2 text-right">Size</div>
            </div>
            {documents.map((doc, i) => (
              <div key={i} className="grid grid-cols-12 px-6 py-6 items-center bg-surface-container-lowest border border-outline-variant/10 hover:border-primary/30 transition-all group cursor-pointer">
                <div className="col-span-6 flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">description</span>
                  <span className="font-headline font-bold">{doc.name}</span>
                </div>
                <div className="col-span-2 font-label text-xs">{doc.type}</div>
                <div className="col-span-2 font-label text-xs text-on-secondary-container">{doc.date}</div>
                <div className="col-span-2 text-right font-label text-xs text-on-secondary-container flex items-center justify-end gap-4">
                  {doc.size}
                  <button className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">download</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">upload</span>
              Upload New Document
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
