import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-4xl mx-auto min-h-screen">
        <h1 className="font-headline text-5xl mb-12">Privacy Policy</h1>
        <div className="prose prose-zinc max-w-none font-body text-on-secondary-container leading-relaxed space-y-6 text-lg">
          <p>
            At The Digital Curator, your privacy is of paramount importance. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services.
          </p>
          <h2 className="font-headline text-3xl text-on-background mt-12">Information Collection</h2>
          <p>
            We collect information that you provide to us directly, such as when you create an account, inquire about a property, or contact our curators. This may include your name, email address, phone number, and financial preferences.
          </p>
          <h2 className="font-headline text-3xl text-on-background mt-12">Data Security</h2>
          <p>
            We implement bank-grade encryption and secure protocols to ensure that your data is protected against unauthorized access. Your information is handled with the same exclusivity as our luxury listings.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
