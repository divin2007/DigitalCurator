"use client";

import { useState, use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
  const [isLoading, setIsLoading] = useState(false);

  if (!property) {
    notFound();
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Property Inquiry for", property.title, formData);
    setIsLoading(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
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

        <section className="max-w-screen-2xl mx-auto px-4 md:px-8 mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="md:col-span-4 space-y-12">
            <div className="p-8 bg-surface-container-low rounded-sm space-y-6">
              <h3 className="text-xl font-headline italic">The Master Wing</h3>
              <p className="text-on-secondary-container text-sm leading-relaxed font-body">
                Features a 180-degree panoramic view, a private terrace, and a spa-inspired bathroom finished with Rwandan volcanic stone and Italian marble.
              </p>
              <button className="text-primary text-sm font-bold border-b border-primary/30 pb-1 hover:border-primary transition-all font-label uppercase" onClick={() => alert("Architectural floorplans are available for verified inquiries.")}>View Floorplans</button>
            </div>

            <div className="flex items-center gap-6 p-6 bg-surface-container-low rounded-sm border border-outline-variant/30">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 grayscale relative">
                <Image className="object-cover" alt="Emmanuel Karemera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE9XoBARxFbNT-aemmrSq0d841iXSNi7NFN6HgeIhY16egLISfVgsUfXqMRQrP68EGdOIoRpyq5Hm0AfPpcTbCZrE3egMYbXU0knCBq-T4ZAWp-ibVTrUS9vTQ_MT-sZczVbffbJmtFaE71Pt_w0eF4c3ltZTa6QQ5nYz6CxD2P-znawDc-qrcK7rQjlEgFQBIm1BnqmiuURKDR7WZBvWNjJXdx38MqwUyKn_zaeqMOi--2s1n6lIJoM_VMuTa9bmqgmRhKcohdUc" fill />
              </div>
              <div>
                <span className="text-[0.6rem] font-bold tracking-widest uppercase text-primary block mb-1 font-label">Senior Consultant</span>
                <h5 className="font-headline text-lg">Emmanuel Karemera</h5>
                <a href="https://wa.me/250788000000" target="_blank" className="text-primary text-[0.6875rem] font-bold uppercase tracking-widest flex items-center gap-2 mt-2 group font-label">
                  Direct Whatsapp <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
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
                <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Schedule Viewing
                </Button>
              </div>
              <div className="bg-surface-container p-8 rounded-sm flex flex-col justify-between">
                <div>
                  <span className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2 block font-label">Lending Options</span>
                  <h4 className="font-headline text-2xl mb-4">Flexible Financing</h4>
                  <p className="text-sm text-on-secondary-container mb-8 leading-relaxed font-body">
                    Curated financial pathways available through our premier banking partners. Flexible terms tailored to your portfolio requirements.
                  </p>
                </div>
                <Button variant="outline" onClick={() => window.open('/guide', '_blank')}>
                  Calculate Financing
                </Button>
              </div>
            </div>
          </div>

          <aside className="md:col-span-12 lg:col-span-4 relative">
            <div className="sticky top-32 space-y-8">
              <div className="bg-inverse-surface text-inverse-on-surface p-10 editorial-shadow rounded-sm border-t-4 border-primary-fixed-dim">
                <h3 className="font-headline text-2xl mb-2 text-white" id="contact-form">Inquire Portfolio</h3>
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
                    <Button className="w-full" type="submit" disabled={isLoading}>
                      {isLoading ? "SUBMITTING..." : "Submit Request"}
                    </Button>
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
