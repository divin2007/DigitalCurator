"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

import { useState } from "react";

export default function DocumentVault() {
  const [documents, setDocuments] = useState([
    { name: "Digital Property Deed - Serenity Peak", type: "PDF", date: "Sept 24, 2024", size: "2.4 MB" },
    { name: "Investment Loan Agreement #DC-8921", type: "PDF", date: "Oct 12, 2024", size: "1.8 MB" },
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUpload = async () => {
    setIsUploading(true);
    setUploadProgress(0);

    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    const newDoc = {
      name: "New Document " + (documents.length + 1),
      type: "PDF",
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      size: "1.2 MB"
    };

    setDocuments([...documents, newDoc]);
    setIsUploading(false);
  };

  const handleDownload = (name: string) => {
    alert(`Initiating secure download for: ${name}`);
  };

  return (
    <div className="space-y-16">
      <div className="">
        <Link href="/account" className="flex items-center gap-2 text-primary font-headline text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Dashboard
        </Link>
      </div>

      <header>
        <h1 className="font-headline text-5xl md:text-6xl text-on-background tracking-tight">Secure Vault</h1>
        <p className="mt-6 text-lg text-on-secondary-container leading-relaxed font-body">Bank-grade encrypted storage for your Rwandan legacy documentation.</p>
      </header>

      <div className="bg-surface-container-low p-8 md:p-12 rounded-sm border border-outline-variant/10 editorial-shadow">
        <div className="flex items-center gap-4 mb-12 p-4 bg-primary/5 border border-primary/10">
          <span className="material-symbols-outlined text-primary">verified_user</span>
          <p className="text-sm font-body text-on-surface">Your connection to the vault is end-to-end encrypted. Document access is logged for your security.</p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-12 px-6 py-4 text-[0.6875rem] uppercase tracking-widest font-bold text-on-secondary-container border-b border-outline-variant/30">
            <div className="col-span-8">Document Name</div>
            <div className="col-span-4 text-right">Date</div>
          </div>
          {documents.map((doc, i) => (
            <div key={i} className="grid grid-cols-12 px-6 py-6 items-center bg-surface-container-lowest border border-outline-variant/10 hover:border-primary/30 transition-all group cursor-pointer">
              <div className="col-span-8 flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">description</span>
                <span className="font-headline font-bold text-on-surface">{doc.name}</span>
              </div>
              <div className="col-span-4 text-right font-label text-xs text-on-secondary-container flex items-center justify-end gap-4">
                {doc.date}
                <button
                  onClick={(e) => { e.stopPropagation(); handleDownload(doc.name); }}
                  className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  download
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          {isUploading ? (
            <div className="w-full max-w-xs space-y-2">
              <div className="flex justify-between text-xs font-label uppercase tracking-widest text-on-surface-variant">
                  <span>Encrypting...</span>
                  <span>{uploadProgress}%</span>
              </div>
              <div className="h-1 bg-surface-container-highest w-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-300" style={{ width: `${uploadProgress}%` }} />
              </div>
            </div>
          ) : (
            <Button variant="outline" className="flex items-center gap-2" onClick={handleUpload}>
              <span className="material-symbols-outlined text-sm">upload</span>
              Upload New Document
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
