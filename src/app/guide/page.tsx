import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GuidePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-4xl mx-auto min-h-screen">
        <h1 className="font-headline text-5xl mb-12">Investment Guide</h1>
        <div className="prose prose-zinc max-w-none font-body text-on-secondary-container leading-relaxed space-y-6 text-lg">
          <p>
            Rwanda is rapidly becoming a global destination for strategic real estate investment. Our guide provides insights into the market trends and acquisition processes.
          </p>
          <h2 className="font-headline text-3xl text-on-background mt-12">Market Overview</h2>
          <p>
            Kigali's luxury sector has shown consistent growth, driven by infrastructure development and a stable economic environment.
          </p>
          <h2 className="font-headline text-3xl text-on-background mt-12">Step-by-Step Acquisition</h2>
          <p>
            From initial viewing to title transfer, we handle the complexities of Rwandan land laws to ensure a seamless acquisition journey.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
