export default function SecuredAssets() {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
        <h2 className="font-headline text-3xl">Secured Assets</h2>
        <span className="text-on-secondary-container text-xs uppercase tracking-widest font-label">Property Management Enabled</span>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col md:flex-row gap-8 bg-zinc-900 text-white p-8 editorial-shadow group">
          <div className="w-full md:w-1/3 aspect-video md:aspect-square overflow-hidden">
            <img
              alt="Serenity Peak Estate"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBazJI622wRiagsGt7w3oUBGO54vXJs2hicyBOrZtCjL9YbsagKm7SWwZpx9CDcLV10Vpz1pI1r4eRb2JX9fbosk9jGacWEMielPtRtz9SiwdTmqyThnYHlUne01sH-7sVbWXSVUtyv0pDFUp6kBAxmBMxmNFgEtpl_oFAzhj1C2oa5JcbwE_YrrY2jDYTGURg5PYjYZ_xXtgd-XE1oYs6g8YEeBNxw6n7lIfTZzu-Xcduoo7FttHU3RwQpHBDJln8DM7ISKHL2-CQ"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[0.6875rem] text-primary uppercase font-bold tracking-widest font-label">Verified Ownership</span>
                <h3 className="font-headline text-3xl mt-1">Serenity Peak Estate</h3>
              </div>
              <span className="material-symbols-outlined text-primary text-4xl">verified</span>
            </div>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed font-body">Closed: Sept 2024. Property management portal is active for maintenance, digital deeds, and secure documentation.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-6 py-3 text-[0.6875rem] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors flex items-center gap-2 font-label cursor-pointer">
                <span className="material-symbols-outlined text-base">dashboard_customize</span> Management Console
              </button>
              <button className="border border-white/20 px-6 py-3 text-[0.6875rem] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors font-label cursor-pointer">Digital Deed</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
