import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-4xl mx-auto min-h-screen">
        <h1 className="font-headline text-5xl mb-12">Press</h1>
        <div className="prose prose-zinc max-w-none font-body text-on-secondary-container leading-relaxed space-y-6 text-lg">
          <p>
            Stay updated with the latest news and announcements from The Digital Curator.
          </p>
          <div className="space-y-12 mt-12">
            <article className="border-b border-outline-variant/30 pb-8">
              <span className="text-primary font-bold text-sm font-label uppercase">October 2024</span>
              <h3 className="font-headline text-2xl mt-2">The Digital Curator Expands Luxury Portfolio in Musanze</h3>
              <p className="mt-4">Announcing our latest curation of exclusive volcano-view retreats in the Northern Province.</p>
            </article>
            <article className="border-b border-outline-variant/30 pb-8">
              <span className="text-primary font-bold text-sm font-label uppercase">August 2024</span>
              <h3 className="font-headline text-2xl mt-2">Redefining Real Estate Tech in East Africa</h3>
              <p className="mt-4">How our proprietary digital curation platform is bridging the gap for international investors.</p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
