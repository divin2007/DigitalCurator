"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { properties } from "@/lib/mock-data";

export default function ActiveInquiriesPage() {
  const inquiries = [
    { property: properties[0], date: "Oct 12, 2024", status: "In Review", type: "Property Request" },
    { property: null, date: "Oct 15, 2024", status: "Action Required", type: "Lending Application", title: "Residential Investment Loan", ref: "#DC-8921" }
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
          <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight">Active Inquiries</h1>
          <p className="mt-6 text-lg text-on-secondary-container leading-relaxed font-body">Monitor the progress of your portfolio expansion and financial applications.</p>
        </header>

        <div className="space-y-6">
          {inquiries.map((inq, i) => (
            <div key={i} className={`flex items-center justify-between p-8 border ${inq.status === 'Action Required' ? 'bg-surface-container-low border-primary/20' : 'bg-surface-container-lowest border-outline-variant/20'} editorial-shadow group`}>
              <div className="flex items-center gap-8">
                <div className={`w-24 h-24 overflow-hidden ${!inq.property && 'bg-primary/10 flex items-center justify-center'}`}>
                  {inq.property ? (
                    <img alt="Property" className="w-full h-full object-cover" src={inq.property.imageUrl} />
                  ) : (
                    <span className="material-symbols-outlined text-primary text-4xl">account_balance</span>
                  )}
                </div>
                <div>
                  <span className="text-[0.6rem] uppercase tracking-widest font-bold text-primary font-label">
                    {inq.type}
                  </span>
                  <h4 className="font-bold text-2xl mt-1 font-headline text-on-surface">
                    {inq.property ? inq.property.title : inq.title}
                  </h4>
                  <p className="text-sm mt-1 font-body text-on-secondary-container">
                    {inq.property ? inq.property.location : `Ref: ${inq.ref}`} • Submitted {inq.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className={`inline-block text-[0.75rem] font-bold px-4 py-1.5 uppercase tracking-widest mb-4 ${
                  inq.status === 'Action Required' ? 'bg-primary text-white' : 'bg-tertiary-container text-white'
                }`}>
                  {inq.status}
                </span>
                <p className="text-xs font-body text-on-secondary-container opacity-60">
                   {inq.status === 'Action Required' ? 'Requires your immediate attention' : 'Curator responding in ~24h'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
