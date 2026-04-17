"use client";

import { useState, use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import PropertyGallery from "@/components/PropertyGallery";

export default function PropertyDetail({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = use(paramsPromise);
  const property = properties.find((p) => p.id === params.id);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!property) {
    notFound();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Property Inquiry for", property.title, formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id === "name-detail" ? "name" : "email"]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="px-4 md:px-8 max-w-screen-2xl mx-auto mb-8">
          <Link href="/properties" className="flex items-center gap-2 text-primary font-headline text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Properties
          </Link>
        </div>

        <PropertyGallery mainImage={property.imageUrl} images={property.images} />

        <section className="px-4 md:px-8 max-w-screen-2xl mx-auto mt-12">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col justify-center py-4">
              <div className="mb-8">
                <h1 className="font-headline text-4xl md:text-5xl text-on-background tracking-tighter mb-4 leading-tight">{property.title}</h1>
                <p className="text-primary font-headline italic text-lg">{property.location}</p>
              </div>
              <div className="prose prose-zinc max-w-none">
                <h3 className="font-headline text-2xl mb-6">Curated Living</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6 font-light font-body">
                  {property.description}
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-6 font-light font-body">
                  Nestled within prestigious surroundings, this architectural masterpiece redefines luxury. Utilizing natural materials to blend seamlessly with the lush topography of Rwanda, every room is oriented to maximize the panoramic views.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto px-4 md:px-8 mt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 mb-12 bg-surface-container-low rounded-sm px-8">
              <div className="flex flex-col">
                <span className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2 font-label">Area</span>
                <span className="font-headline text-2xl">{property.area}</span>
              </div>
              {property.beds && (
                <div className="flex flex-col">
                  <span className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2 font-label">Bedrooms</span>
                  <span className="font-headline text-2xl">{property.beds.toString().padStart(2, '0')}</span>
                </div>
              )}
              {property.baths && (
                <div className="flex flex-col">
                  <span className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2 font-label">Bathrooms</span>
                  <span className="font-headline text-2xl">{property.baths.toString().padStart(2, '0')}</span>
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2 font-label">Status</span>
                <span className="font-headline text-2xl uppercase text-primary">{property.status}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="bg-surface-container-lowest p-8 editorial-shadow rounded-sm flex flex-col justify-between border-l-4 border-primary">
                <div>
                  <span className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-primary mb-2 block font-label">Acquisition</span>
                  <h4 className="font-headline text-3xl mb-4">{property.price}</h4>
                  <ul className="space-y-3 text-sm text-on-surface-variant mb-8 font-body">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> All-inclusive Transfer Taxes</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> 24-Month Structural Warranty</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Custom Interior Finishing</li>
                  </ul>
                </div>
                <Button>Schedule Viewing</Button>
              </div>
              <div className="bg-surface-container p-8 rounded-sm flex flex-col justify-between">
                <div>
                  <span className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2 block font-label">Lending Options</span>
                  <h4 className="font-headline text-2xl mb-4">Flexible Financing</h4>
                  <p className="text-sm text-on-secondary-container mb-8 leading-relaxed font-body">
                    Curated financial pathways available through our premier banking partners. Flexible terms tailored to your portfolio requirements.
                  </p>
                </div>
                <Button variant="outline">Calculate Financing</Button>
              </div>
            </div>
          </div>

          <aside className="md:col-span-4 relative">
            <div className="sticky top-32 space-y-8">
              <div className="bg-inverse-surface text-inverse-on-surface p-10 editorial-shadow rounded-sm border-t-4 border-primary-fixed-dim">
                <h3 className="font-headline text-2xl mb-2 text-white">Inquire Portfolio</h3>
                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <span className="material-symbols-outlined text-4xl text-primary-fixed">verified</span>
                    <p className="text-white font-headline italic">Request Received</p>
                  </div>
                ) : (
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="relative">
                      <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-outline-variant block mb-2 font-label">Full Name</label>
                      <input
                        className="w-full bg-transparent border-0 border-b border-outline-variant py-2 px-0 focus:ring-0 focus:border-primary-fixed-dim transition-colors text-sm text-white font-body"
                        placeholder="Jean-Claude Mutara"
                        type="text"
                        id="name-detail"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="relative">
                      <label className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-outline-variant block mb-2 font-label">Private Email</label>
                      <input
                        className="w-full bg-transparent border-0 border-b border-outline-variant py-2 px-0 focus:ring-0 focus:border-primary-fixed-dim transition-colors text-sm text-white font-body"
                        placeholder="jc.mutara@domain.com"
                        type="email"
                        id="email-detail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button className="w-full" type="submit">Submit Request</Button>
                  </form>
                )}
                <p className="text-[0.6rem] text-outline-variant mt-8 text-center uppercase tracking-widest leading-relaxed font-label">
                  Our concierge will respond within 2 hours. Your data is protected by the Digital Curator privacy protocol.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
