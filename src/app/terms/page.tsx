import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-4xl mx-auto min-h-screen">
        <h1 className="font-headline text-5xl mb-12">Terms of Service</h1>
        <div className="prose prose-zinc max-w-none font-body text-on-secondary-container leading-relaxed space-y-6 text-lg">
          <p>
            Welcome to The Digital Curator. By accessing our platform, you agree to be bound by the following terms and conditions.
          </p>
          <h2 className="font-headline text-3xl text-on-background mt-12">Use of Platform</h2>
          <p>
            Our platform is designed to facilitate luxury real estate transactions in Rwanda. You agree to use the platform for lawful purposes and in accordance with these terms.
          </p>
          <h2 className="font-headline text-3xl text-on-background mt-12">Property Listings</h2>
          <p>
            While we strive for accuracy, all property listings are subject to verification. Prices and availability may change without notice.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
