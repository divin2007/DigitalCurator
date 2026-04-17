export default function AddedListings() {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
        <h2 className="font-headline text-3xl">Added Listings</h2>
        <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 font-label cursor-pointer">
          <span className="material-symbols-outlined text-sm">add</span> Add New Property
        </button>
      </div>
      <div className="bg-surface-container-lowest border border-dashed border-outline-variant p-12 text-center">
        <p className="text-on-secondary-container font-serif italic mb-4 font-body">You haven't listed any properties for sale or lease yet.</p>
        <button className="text-sm font-bold text-primary underline font-body cursor-pointer">Learn about listing with the Curator</button>
      </div>
    </section>
  );
}
