import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "./Hero";
import FeaturedProperties from "./FeaturedProperties";
import Expertise from "./Expertise";
import TrustSection from "./TrustSection";
import LandingCTA from "./LandingCTA";

export default function LandingPage() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        <Expertise />
        <TrustSection />
        <LandingCTA />
      </main>
      <Footer />
    </div>
  );
}
