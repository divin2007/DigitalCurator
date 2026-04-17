"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Button from "@/components/ui/Button";

import { useState } from "react";

export default function ManagementConsole() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tasks = [
    { title: "Quarterly Maintenance", status: "Scheduled", date: "Oct 28, 2024", icon: "build" },
    { title: "Security System Audit", status: "Completed", date: "Sept 15, 2024", icon: "shield" },
    { title: "Landscaping Review", status: "In Progress", date: "Oct 20, 2024", icon: "park" },
    { title: "Lease Renewal - Unit 4B", status: "Action Needed", date: "Nov 01, 2024", icon: "history_edu" },
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

        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight">Management Console</h1>
            <p className="mt-6 text-lg text-on-secondary-container leading-relaxed font-body">Oversee the operational excellence of your secured Rwandan assets.</p>
          </div>
          <div className="bg-zinc-900 text-white p-6 rounded-sm flex items-center gap-6">
            <div className="text-right">
              <p className="text-[0.6rem] uppercase tracking-widest text-primary font-bold mb-1">Active Asset</p>
              <p className="font-headline text-xl">Serenity Peak Estate</p>
            </div>
            <div className="h-12 w-[1px] bg-white/20"></div>
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Main Console */}
          <div className="md:col-span-8 space-y-12">
            <section className="bg-surface-container-low p-8 md:p-12 editorial-shadow">
              <h2 className="font-headline text-2xl mb-8">Asset Operations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {tasks.map((task, i) => (
                  <div key={i} className="bg-white p-6 border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group">
                    <div className="flex justify-between items-start mb-4">
                      <span className="material-symbols-outlined text-primary text-2xl">{task.icon}</span>
                      <span className={`text-[0.6rem] font-bold px-2 py-1 uppercase tracking-widest ${
                        task.status === "Action Needed" ? "bg-error-container text-on-error-container" : "bg-surface-container-highest text-on-surface-variant"
                      }`}>
                        {task.status}
                      </span>
                    </div>
                    <h4 className="font-headline font-bold text-lg mb-1">{task.title}</h4>
                    <p className="text-xs text-on-secondary-container font-body">{task.date}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-inverse-surface text-white p-12">
              <h2 className="font-headline text-3xl mb-4">Financial Yield</h2>
              <p className="text-zinc-400 mb-12 font-body">Track the appreciation and revenue metrics of your investment portfolio.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                <div>
                  <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold block mb-2">Annual Growth</span>
                  <span className="text-4xl font-headline">+12.4%</span>
                </div>
                <div>
                  <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold block mb-2">Revenue (YTD)</span>
                  <span className="text-4xl font-headline">$48,200</span>
                </div>
                <div>
                  <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold block mb-2">Asset Value</span>
                  <span className="text-4xl font-headline">$3.2M</span>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-12">
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/20 shadow-sm">
              <h3 className="font-headline text-xl mb-6">Concierge Management</h3>
              <p className="text-sm text-on-secondary-container mb-8 font-body">Need bespoke modifications or local representation? Your curator handles all liaison with Rwandan authorities and contractors.</p>
              <Button className="w-full" onClick={() => setIsModalOpen(true)}>Request Modification</Button>
            </div>

            <div className="p-8 bg-primary/5 border border-primary/20">
              <h3 className="font-headline text-xl mb-4">Upcoming Visit</h3>
              <div className="flex gap-4 items-center">
                <div className="bg-white p-3 text-center border border-primary/20 min-w-[60px]">
                  <p className="text-[0.6rem] uppercase font-bold text-primary">Dec</p>
                  <p className="text-2xl font-headline">12</p>
                </div>
                <div>
                  <p className="text-sm font-bold">Annual Inspection</p>
                  <p className="text-xs text-on-secondary-container">Kigali Headquarters Team</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white max-w-lg w-full p-12 relative editorial-shadow">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h2 className="font-headline text-3xl mb-4">Modification Request</h2>
            <p className="text-on-secondary-container mb-8 font-body">Describe the modifications or representation needed for your asset.</p>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <textarea
                className="w-full border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-body text-lg resize-none"
                placeholder="What changes would you like to initiate?"
                rows={4}
              ></textarea>
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
