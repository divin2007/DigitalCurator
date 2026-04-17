"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Inquiry:", formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", interest: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="label-sm uppercase tracking-[0.2em] text-primary mb-4 block font-semibold text-[0.6875rem]">Inquiry & Engagement</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-8">
              Let’s discuss your <br /> <span className="italic text-primary-container">Rwandan Legacy.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-on-secondary-container max-w-2xl leading-relaxed">
              Whether you are acquiring a hilltop sanctuary in Rebero or curating an investment portfolio in Nyarutarama, our experts are at your disposal.
            </p>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="aspect-[4/5] bg-surface-container-low overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Luxury Office"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPorpByTLl79Keywt1m9QR-GzXhGzEKihW9ksnAXq7h45jWY45xZogt3Ond9G9wklHj5vh2QQOHA0ZzS5bKVvnUKZNk92def2vFMBVPWNwqUVkwgEcF6yRfarkaf5sotVqSkqdkkeszChUB6j4VmltSqALFYx7pvBKSkVU2t9gqdW3kg9l_mA2tQuptV3VQ8wA8eu_DNZE5jjjPmJRYLAxhRmKDX8J_wLN7J0zslAMrBDB-0Hli-Zea6N4rZGFV8pxY7KWNBS98cs"
              />
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16">
          {/* Form Section */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-16 ambient-shadow relative z-10">
            <h2 className="font-headline text-3xl mb-12">Digital Inquiry</h2>
            {submitted ? (
              <div className="py-20 text-center space-y-4">
                <span className="material-symbols-outlined text-6xl text-primary">verified</span>
                <h3 className="text-2xl font-headline">Connection Initiated</h3>
                <p className="text-on-secondary-container">Our curators will reach out to you within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input
                      className="block w-full px-0 py-3 text-lg bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary peer transition-colors font-body"
                      id="name"
                      placeholder=" "
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label className="absolute text-sm text-on-surface-variant duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-primary font-label" htmlFor="name">FULL NAME</label>
                  </div>
                  <div className="relative group">
                    <input
                      className="block w-full px-0 py-3 text-lg bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary peer transition-colors font-body"
                      id="email"
                      placeholder=" "
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label className="absolute text-sm text-on-surface-variant duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-primary font-label" htmlFor="email">EMAIL ADDRESS</label>
                  </div>
                </div>
                <div className="relative group">
                  <select
                    className="block w-full px-0 py-3 text-lg bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary peer transition-colors appearance-none font-body"
                    id="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                  >
                    <option disabled value="">Nature of Inquiry</option>
                    <option value="acquisition">Property Acquisition</option>
                    <option value="listing">Estate Listing</option>
                    <option value="investment">Investment Consultation</option>
                  </select>
                  <label className="absolute text-sm text-on-surface-variant duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-primary font-label" htmlFor="interest">I AM INTERESTED IN</label>
                </div>
                <div className="relative group">
                  <textarea
                    className="block w-full px-0 py-3 text-lg bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary peer transition-colors resize-none font-body"
                    id="message"
                    placeholder=" "
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label className="absolute text-sm text-on-surface-variant duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-primary font-label" htmlFor="message">MESSAGE</label>
                </div>
                <Button type="submit" className="inline-flex items-center group">
                  Initiate Connection
                  <span className="material-symbols-outlined ml-3 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Button>
              </form>
            )}
          </div>
          {/* Sidebar Info */}
          <div className="lg:col-span-5 space-y-16 mt-24 lg:mt-0">
            {/* Location & Map */}
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-primary-fixed p-4 rounded-full">
                  <span className="material-symbols-outlined text-on-primary-fixed-variant">location_on</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl mb-2">Kigali Headquarters</h3>
                  <p className="text-on-secondary-container leading-relaxed font-body">
                    Grand Legacy Plaza, 4th Floor<br />
                    KG 234 St, Remera, Kigali<br />
                    Rwanda
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low aspect-video w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  className="w-full h-full object-cover"
                  alt="Kigali Map"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7ZPnGCXImUrYJ6rFayWL5GKQsLuAEAwGI4qYfje-tjWLqPXBZ6dVCTyYUgcOddA9g1cESUhfku8wJQVW7pbSrQDc0lLZXBaLj3P2OGgcRGkBFgSTP6I7Du2cS4TqlzwkJvDNXbwD3CuvHTh6oWOcCzQ3AYkFQAfDECwUnZ7QaR64ibsDTORT1qSQ2ATIsK3jOl1t4nalLI3CoTLRAr-SGhH6N1XbM5w7f206xorBDJXfzOo5q83z6XjZ07SqC6qfhqCtC4tZBIbI"
                />
              </div>
            </div>
            {/* Easy Connection */}
            <div className="space-y-6">
              <h3 className="font-headline text-xl">Direct Channels</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a className="flex items-center p-6 bg-surface-container-high hover:bg-primary-container hover:text-white transition-all group" href="https://wa.me/250788000000">
                  <span className="material-symbols-outlined mr-4">chat</span>
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-widest font-bold opacity-60 font-label">WhatsApp</p>
                    <p className="font-medium font-body">+250 788 000 000</p>
                  </div>
                </a>
                <a className="flex items-center p-6 bg-surface-container-high hover:bg-primary-container hover:text-white transition-all group" href="mailto:curator@digital.rw">
                  <span className="material-symbols-outlined mr-4">mail</span>
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-widest font-bold opacity-60 font-label">Email</p>
                    <p className="font-medium font-body">curator@digital.rw</p>
                  </div>
                </a>
              </div>
            </div>
            {/* Security Badge */}
            <div className="p-8 border-l-2 border-primary-container bg-surface-container-low">
              <div className="flex items-center mb-4">
                <span className="material-symbols-outlined text-primary mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                <span className="text-[0.7rem] uppercase tracking-[0.2em] font-bold text-primary font-label">Advanced Encryption</span>
              </div>
              <p className="text-sm text-on-secondary-container leading-relaxed font-body">
                Your data is handled with the same exclusivity as our listings. All communications are protected via end-to-end encryption protocols.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
