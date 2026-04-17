import Button from "@/components/ui/Button";
import Link from "next/link";

export default function AddedListings() {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
        <h2 className="font-headline text-3xl">Added Listings</h2>
        <Button href="/account/add-listing" variant="outline" className="!border-primary !text-primary !text-xs !py-2">
          <span className="material-symbols-outlined text-sm">add</span> Add New Property
        </Button>
      </div>
      <div className="bg-surface-container-lowest border border-dashed border-outline-variant p-12 text-center">
        <p className="text-on-secondary-container font-headline italic mb-4">You haven&apos;t listed any properties for sale or lease yet.</p>
        <Link href="/services#listing" className="text-sm font-bold text-primary underline font-body">Learn about listing with the Curator</Link>
      </div>
    </section>
  );
}
