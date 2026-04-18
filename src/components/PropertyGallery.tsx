import Image from "next/image";

interface PropertyGalleryProps {
  mainImage: string;
  images: string[];
}

export default function PropertyGallery({ mainImage, images }: PropertyGalleryProps) {
  return (
    <section className="px-4 md:px-8 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Reduced Width/Height Main Cover */}
        <div className="col-span-12 md:col-span-7 lg:col-span-6 overflow-hidden rounded-sm relative group aspect-[4/3] md:h-[500px]">
          <Image
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            src={mainImage}
            alt="Main Property View"
            fill
          />
          <div className="absolute top-6 right-6">
            <span className="bg-primary-fixed text-on-primary-fixed-variant px-4 py-1 rounded-full text-[0.6875rem] font-bold tracking-[0.1em] uppercase shadow-sm">Exclusive Listing</span>
          </div>
        </div>

        {/* Cinematic Grid of Sub-images */}
        <div className="col-span-12 md:col-span-5 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.slice(0, 2).map((img, i) => (
            <div key={i} className="overflow-hidden rounded-sm h-64 md:h-[242px] relative">
              <Image className="object-cover hover:scale-105 transition-transform duration-500" src={img} alt={`Property view ${i + 1}`} fill />
            </div>
          ))}
          {images.length > 2 && (
             <div className="overflow-hidden rounded-sm relative h-64 md:h-[242px] md:col-span-2">
                <Image className="object-cover" src={images[2]} alt="Property gallery preview" fill />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/20 transition-colors">
                  <span className="text-white font-headline text-lg italic border-b border-white">+ {images.length - 2} Photos</span>
                </div>
             </div>
          )}
        </div>
      </div>
    </section>
  );
}
