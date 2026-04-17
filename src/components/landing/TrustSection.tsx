export default function TrustSection() {
  return (
    <section className="py-24 border-t border-outline-variant/20 max-w-screen-2xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="font-headline text-3xl mb-12">The Digital Curator Standards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <span className="material-symbols-outlined text-4xl text-primary">verified_user</span>
            <h4 className="font-label font-bold uppercase tracking-widest text-sm">Verified Listings</h4>
            <p className="font-body text-sm text-on-secondary-container">Every property undergoes a 48-point verification process.</p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-4xl text-primary">encrypted</span>
            <h4 className="font-label font-bold uppercase tracking-widest text-sm">Secure Escrow</h4>
            <p className="font-body text-sm text-on-secondary-container">Bank-grade security for all financial transmissions.</p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-4xl text-primary">support_agent</span>
            <h4 className="font-label font-bold uppercase tracking-widest text-sm">Direct Concierge</h4>
            <p className="font-body text-sm text-on-secondary-container">Personalized assistance throughout the lifecycle.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
