import Link from "next/link";
import { properties } from "@/lib/mock-data";

export default function FeaturedProperties() {
  const featured = properties.slice(0, 2);

  return (
    <section className="py-32 px-8 md:px-24 bg-surface" id="properties">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-2xl space-y-4">
          <span className="text-primary font-bold text-[0.6875rem] uppercase tracking-[0.15em] font-label">The Collection</span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-on-background">Featured Curations</h2>
        </div>
        <Link href="/properties" className="text-primary font-semibold flex items-center gap-2 mb-2 group font-label uppercase tracking-widest text-xs">
          Explore All Properties
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_flat</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        {/* Card 1 */}
        <div className="md:col-span-7 group">
          <Link href={`/properties/${featured[0].id}`}>
            <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-lowest shadow-xl">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={featured[0].imageUrl}
                alt={featured[0].title}
              />
              <div className="absolute top-6 right-6">
                <span className="bg-primary-fixed text-on-primary-fixed-variant px-4 py-2 rounded-full text-[0.6875rem] font-extrabold uppercase tracking-widest">
                  {featured[0].price}
                </span>
              </div>
            </div>
          </Link>
          <div className="mt-8 space-y-2 max-w-md">
            <p className="text-secondary text-sm font-medium tracking-wide font-label uppercase">{featured[0].location}</p>
            <h3 className="font-headline text-3xl font-bold">{featured[0].title}</h3>
            <p className="text-on-surface-variant font-light leading-relaxed pt-4 font-body">
              {featured[0].description}
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="md:col-span-5 md:mt-32 group">
          <Link href={`/properties/${featured[1].id}`}>
            <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-lowest shadow-xl">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={featured[1].imageUrl}
                alt={featured[1].title}
              />
              <div className="absolute top-6 right-6">
                <span className="bg-primary-fixed text-on-primary-fixed-variant px-4 py-2 rounded-full text-[0.6875rem] font-extrabold uppercase tracking-widest">
                  {featured[1].price}
                </span>
              </div>
            </div>
          </Link>
          <div className="mt-8 space-y-2">
            <p className="text-secondary text-sm font-medium tracking-wide font-label uppercase">{featured[1].location}</p>
            <h3 className="font-headline text-3xl font-bold">{featured[1].title}</h3>
            <p className="text-on-surface-variant font-light leading-relaxed pt-4 font-body">
              {featured[1].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
