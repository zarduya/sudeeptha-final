import { ImageWithFallback } from './figma/ImageWithFallback';

const collections = [
  {
    title: 'Minimal',
    description: 'Clean lines, timeless style',
    image: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMG91dGZpdHxlbnwxfHx8fDE3NzE3MTY4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Urban',
    description: 'Street-ready essentials',
    image: 'https://images.unsplash.com/photo-1635650805015-2fa50682873a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldHdlYXIlMjBzdHlsZXxlbnwxfHx8fDE3NzE3MTY4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Elegant',
    description: 'Refined sophistication',
    image: 'https://images.unsplash.com/photo-1771480303028-63b0c1e68273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2xvdGhpbmclMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc3MTcxNjgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function FeaturedCollections() {
  return (
    <section id="collections" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-2">Explore</p>
          <h2 className="text-4xl md:text-5xl">Featured Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <ImageWithFallback 
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              </div>
              <h3 className="text-2xl mb-1">{collection.title}</h3>
              <p className="text-gray-600">{collection.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
