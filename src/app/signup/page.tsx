"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    console.log("Registering with:", formData);
    // Redirect to account dashboard
    router.push("/account");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#cbd5e1] font-body text-on-background overflow-hidden h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl aspect-[16/10] bg-white rounded-lg shadow-2xl overflow-hidden flex relative">
        {/* Left Side: Sign Up Form */}
        <div className="w-full md:w-[55%] h-full bg-white relative z-10 diagonal-split flex flex-col items-center justify-center px-12 lg:px-24">
          <div className="w-full max-w-sm">
            {/* Branding Header */}
            <div className="mb-8">
              <Link href="/">
                <h1 className="text-xl font-headline italic text-on-background/80 tracking-tight cursor-pointer">The Digital Curator</h1>
              </Link>
            </div>
            <div className="mb-8">
              <h2 className="font-bold text-3xl text-neutral-800 tracking-tight">Join the Elite</h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name Field */}
              <div className="relative group">
                <label className="font-label text-[0.75rem] text-neutral-400 mb-1 block" htmlFor="name">Full Name</label>
                <input
                  className="w-full bg-transparent border-0 border-b border-neutral-300 py-2 px-0 focus:ring-0 focus:border-neutral-800 font-body text-on-background transition-all placeholder:text-neutral-200"
                  id="name"
                  name="name"
                  placeholder="John Dean"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Phone Number Field */}
              <div className="relative group">
                <label className="font-label text-[0.75rem] text-neutral-400 mb-1 block" htmlFor="phone">Phone Number</label>
                <input
                  className="w-full bg-transparent border-0 border-b border-neutral-300 py-2 px-0 focus:ring-0 focus:border-neutral-800 font-body text-on-background transition-all placeholder:text-neutral-200"
                  id="phone"
                  name="phone"
                  placeholder="+250 788 000 000"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Email Field */}
              <div className="relative group">
                <label className="font-label text-[0.75rem] text-neutral-400 mb-1 block" htmlFor="email">Email</label>
                <input
                  className="w-full bg-transparent border-0 border-b border-neutral-300 py-2 px-0 focus:ring-0 focus:border-neutral-800 font-body text-on-background transition-all placeholder:text-neutral-200"
                  id="email"
                  name="email"
                  placeholder="john.dean@gmail.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Password Field */}
              <div className="relative group">
                <div className="flex justify-between items-end mb-1">
                  <label className="font-label text-[0.75rem] text-neutral-400" htmlFor="password">Password</label>
                </div>
                <input
                  className="w-full bg-transparent border-0 border-b border-neutral-300 py-2 px-0 focus:ring-0 focus:border-neutral-800 font-body text-on-background transition-all placeholder:text-neutral-200"
                  id="password"
                  name="password"
                  placeholder="••••••••••••••••"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="pt-4 flex flex-col items-center gap-8">
                <Button className="w-full" type="submit">
                  CREATE ACCOUNT
                </Button>
                <div className="flex items-center justify-center gap-1">
                  <span className="font-body text-[0.75rem] text-neutral-400">Already have an account?</span>
                  <Link href="/login" className="font-body text-[0.75rem] text-neutral-800 font-bold hover:underline underline-offset-4">Login</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Right Side: Visual Section */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%] z-0">
          <img
            alt="Luxury Architecture"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyxzMS8EL2O3pm5K0twimFVj4G77D-jwz6iUTsEs15_51lYNJbt0a0kiazkko2PBsskoULCHFsVnH61XBDbJijyvursMlUQ3TR_d2UisDE6PKiBr7gY77uNc611yLsjkrAZUyGA1_ABRJB7whQHPACDZqPaRG8XMC9Gg33XOo9JJhBSaZ3mjcl15Z9O9l_Lq2nz2LftNIyaERX1oKP3XV3RrFsx-HMJWEKYdWmSZ0XHarsk5yrqiKfGalgUBqgMXAamks_iGHXfC4"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </div>
  );
}
