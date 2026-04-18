"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AgentDashboard() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filter, setFilter] = useState("All");

  const [propertyList, setPropertyList] = useState([
    { id: "DC-8802", title: "The Obsidian Pavilion", location: "Kigali, Rebero District", status: "Active", views: "4.8k", leads: "12", value: "$2.4M", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ChgPjdeXg_Hhxb7UZI7XQkf9FD-g-FdaLw-UHRccsLcE7FVCtdcDnc1Rkp3uMNGTiCNH1QFcLrd7SI8BF7uO5xhs9TrOAk-OB4JxcD3VGXsxnnXvJ-VgCnom3B5JbQQyD9eqdQbo7CrILvMN9I2OhBKvcVYWjuN-kZag2GkRfl9Me6dsjI1irFjejGCH1BSrdK20PBoU76KXhifJictHheWpaSCAxTziRH1UOpu8vEZl3VEzDKWSaKgJ6vs1QIltrVkoIm28xIk" },
    { id: "DC-4419", title: "Lake Kivu Serenity Suite", location: "Gisenyi Waterfront", status: "Pending", views: "12.2k", leads: "84", value: "$1.8M", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLOnaxejwFxkjpPBzk2Eof6bHbiLzxP6j_WL0qNq9B2Iq7PZE1WX4EaZK4blSmeM-dh0LG55e3M3oSjpTCg4NO7AivV74jKUd6lfF0WE4lNi_AYF-d--1um4F12FbrWvQyFY17uz_k4MmZJHswko9fVFZr5h3XWpGHQiINdMMPgrGhXq5PGOguR5zUrMwECBa-8pT8aK4MOdQzz98ip79RTbkKuJ6dz-TcVWPLcvKqoKzKpdZKmuZTCXBV4y3RB6n0x8rnh1ztfl8" },
    { id: "DC-1002", title: "The Canopy Retreat", location: "Nyarutarama District", status: "Sold", views: "25k", leads: "156", value: "$3.1M", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbucCSo5-cEaC9GFsIdUHghaQdc3fxpBnFrvVZpde0PfJgsQmVLZy0MdJ6DV_7Kji7_67ouGy-ydYUs3zXLE6VDxFXDKcZABpmzqAhetSGT1gLSaAVjeqm1zIa-VkF06Cc2RsGhdHqTZ74KlZxeOMTdI9AS0VxquQHSZ8rPfufClGZtTFk7FqZPO5brxOZSH1QPrh2-7IVpHFlqDm3OPQ-chbf8NgNLgfMzVYH1ybZg_vW4vb-Scbbvgvh1Cet1w6fF0BJdoy5aH8" },
  ]);

  const filteredListings = propertyList.filter(p => filter === "All" || p.status === filter);

  const toggleStatus = (id: string) => {
    setPropertyList(prev => prev.map(p => {
      if (p.id === id) {
        const nextStatus = p.status === "Active" ? "Pending" : p.status === "Pending" ? "Sold" : "Active";
        return { ...p, status: nextStatus };
      }
      return p;
    }));
  };

  const [editProperty, setEditProperty] = useState<{
    id: string;
    title: string;
    location: string;
    status: string;
    views: string;
    leads: string;
    value: string;
    imageUrl: string;
  } | null>(null);

  const handleEditSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editProperty) return;
    setPropertyList(prev => prev.map(p => p.id === editProperty.id ? editProperty : p));
    setEditProperty(null);
  };

  const inquiries = [
    { name: "Jean-Paul Karekezi", property: "The Obsidian Pavilion", action: "Inquired" },
    { name: "Elena Rossi", property: "Lake Kivu Suite", action: "Requested viewing" },
  ];

  const handleAddProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowAddForm(false);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2">
            <span className="label-sm text-[0.6875rem] uppercase tracking-[0.1em] text-primary font-bold font-label">Agent Dashboard</span>
            <h1 className="text-5xl font-headline font-bold tracking-tight text-on-surface">Curated Portfolios</h1>
            <p className="text-on-surface-variant max-w-md font-body">Oversee your collection of ultra-luxury estates and monitor engagement metrics in real-time.</p>
          </div>
          <Button onClick={() => setShowAddForm(true)}>
            <span className="material-symbols-outlined text-sm mr-2">add</span>
            Add New Property
          </Button>
        </header>

        {/* Analytics Overview */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-sm editorial-shadow flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="label-sm text-[0.6875rem] uppercase tracking-[0.1em] text-on-surface-variant font-label">Portfolio Performance</span>
              <h3 className="text-3xl font-headline mt-2">124,802 <span className="text-sm font-body text-primary">+12%</span></h3>
            </div>
            <div className="flex items-end gap-1 h-12">
              {[20, 40, 35, 60, 50, 90, 70].map((h, i) => (
                <div key={i} className="w-full bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-low p-8 rounded-sm flex flex-col justify-between">
            <span className="material-symbols-outlined text-primary text-3xl">chat_bubble_outline</span>
            <div>
              <span className="label-sm text-[0.6875rem] uppercase tracking-[0.1em] text-on-surface-variant font-label">Active Inquiries</span>
              <h3 className="text-3xl font-headline mt-1">42</h3>
            </div>
          </div>
          <div className="bg-inverse-surface p-8 rounded-sm flex flex-col justify-between text-surface-container-lowest">
            <span className="material-symbols-outlined text-primary-fixed text-3xl">visibility</span>
            <div>
              <span className="label-sm text-[0.6875rem] uppercase tracking-[0.1em] text-surface-variant/60 font-label">Global Views</span>
              <h3 className="text-3xl font-headline mt-1 text-white">1.2M</h3>
            </div>
          </div>
        </section>

        {/* Property Management List */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-headline font-semibold">Active Listings</h2>
            <div className="flex gap-4">
              {["All", "Pending", "Sold"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-sm font-medium pb-1 font-label uppercase transition-all ${filter === f ? 'border-b-2 border-primary text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {filteredListings.map((item) => (
              <div key={item.id} className="group bg-surface-container-lowest overflow-hidden flex flex-col md:flex-row editorial-shadow transition-all hover:bg-surface-container-low cursor-pointer">
                <div className="md:w-64 h-48 overflow-hidden bg-zinc-200 relative">
                  <Image alt={item.title} className="object-cover group-hover:scale-105 transition-transform duration-700" src={item.imageUrl} fill />
                </div>
                <div className="flex-1 p-6 flex flex-col md:flex-row justify-between md:items-center gap-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-0.5 rounded-full text-[0.6rem] font-bold tracking-widest uppercase font-label ${
                        item.status === "Active" ? "bg-primary-fixed text-on-primary-fixed-variant" :
                        item.status === "Pending" ? "bg-secondary-container text-on-secondary-container" :
                        "bg-inverse-surface text-white"
                      }`}>{item.status}</span>
                      <span className="text-on-surface-variant text-xs font-body">ID: {item.id}</span>
                    </div>
                    <h4 className="text-xl font-headline font-semibold">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm font-light font-body">{item.location}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                      <span className="block text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1 font-label">Views</span>
                      <span className="font-headline font-semibold">{item.views}</span>
                    </div>
                    <div>
                      <span className="block text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1 font-label">Leads</span>
                      <span className="font-headline font-semibold">{item.leads}</span>
                    </div>
                    <div>
                      <span className="block text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1 font-label">Value</span>
                      <span className="font-headline font-semibold">{item.value}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors" onClick={(e) => { e.stopPropagation(); setEditProperty(item) }}>
                      <span className="material-symbols-outlined text-on-surface-variant">edit</span>
                    </button>
                    <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors" onClick={(e) => { e.stopPropagation(); toggleStatus(item.id) }}>
                      <span className="material-symbols-outlined text-on-surface-variant">sync</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-headline italic">Recent Inquiries</h3>
            <div className="divide-y divide-outline-variant/20">
              {inquiries.map((inq, i) => (
                <div key={i} className="py-4 flex justify-between items-center group cursor-pointer">
                  <div>
                    <p className="font-medium text-on-surface font-headline">{inq.name}</p>
                    <p className="text-xs text-on-secondary-container font-body">{inq.action} about &quot;{inq.property}&quot;</p>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary/5 p-10 rounded-sm border border-primary/10">
            <h3 className="text-3xl font-headline mb-4">Curator&apos;s Tip</h3>
            <p className="font-light leading-relaxed text-on-surface-variant mb-6 font-body">
              Properties with sunset-timed photography see a 40% higher engagement rate in the Kigali luxury sector. Consider updating your lead image for <span className="font-medium italic">The Obsidian Pavilion</span>.
            </p>
            <Link href="/guide" className="text-primary font-bold text-[0.7rem] uppercase tracking-[0.2em] flex items-center gap-2 group font-label">
              View Optimization Guide
              <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all"></span>
            </Link>
          </div>
        </section>
      </main>

      {/* Add Property Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white max-w-2xl w-full p-12 relative editorial-shadow max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowAddForm(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h2 className="font-headline text-3xl mb-8">Add New Property</h2>
            {isSubmitted ? (
              <div className="py-20 text-center space-y-4">
                <span className="material-symbols-outlined text-6xl text-primary">verified</span>
                <h3 className="text-2xl font-headline">Listing Created</h3>
                <p className="text-on-secondary-container font-body">The property has been added to the curated collection.</p>
              </div>
            ) : (
            <form className="space-y-6" onSubmit={handleAddProperty}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[0.6875rem] uppercase tracking-widest text-secondary font-bold font-label">Property Title</label>
                  <input className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none font-body" type="text" placeholder="The Marble Sanctuary" />
                </div>
                <div className="space-y-1">
                  <label className="text-[0.6875rem] uppercase tracking-widest text-secondary font-bold font-label">Location</label>
                  <input className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none font-body" type="text" placeholder="Nyarutarama, Kigali" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[0.6875rem] uppercase tracking-widest text-secondary font-bold font-label">Price (USD)</label>
                  <input className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none font-body" type="text" placeholder="$1,250,000" />
                </div>
                <div className="space-y-1">
                  <label className="text-[0.6875rem] uppercase tracking-widest text-secondary font-bold font-label">Type</label>
                  <select className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none font-body">
                    <option>House</option>
                    <option>Land</option>
                    <option>Apartment</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[0.6875rem] uppercase tracking-widest text-secondary font-bold font-label">Description</label>
                <textarea className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none font-body resize-none" rows={3} placeholder="A masterwork of contemporary design..."></textarea>
              </div>
              <div className="pt-4">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "CREATING..." : "Create Listing"}
                </Button>
              </div>
            </form>
            )}
          </div>
        </div>
      )}

      {/* Edit Property Modal */}
      {editProperty && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white max-w-2xl w-full p-12 relative editorial-shadow max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setEditProperty(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h2 className="font-headline text-3xl mb-8">Edit Portfolio Item</h2>
            <form className="space-y-6" onSubmit={handleEditSave}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[0.6875rem] uppercase tracking-widest text-secondary font-bold font-label">Property Title</label>
                  <input
                    value={editProperty.title}
                    onChange={(e) => setEditProperty({...editProperty, title: e.target.value})}
                    className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none font-body"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[0.6875rem] uppercase tracking-widest text-secondary font-bold font-label">Location</label>
                  <input
                    value={editProperty.location}
                    onChange={(e) => setEditProperty({...editProperty, location: e.target.value})}
                    className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none font-body"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[0.6875rem] uppercase tracking-widest text-secondary font-bold font-label">Price / Value</label>
                  <input
                    value={editProperty.value}
                    onChange={(e) => setEditProperty({...editProperty, value: e.target.value})}
                    className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none font-body"
                    type="text"
                  />
                </div>
              </div>
              <div className="pt-4">
                <Button type="submit" className="w-full">Save Changes</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
