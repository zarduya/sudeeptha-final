import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    name: 'Classic Timepiece',
    category: 'Accessories',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1762513461072-5008c7f6511d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjB3YXRjaHxlbnwxfHx8fDE3NzE3MTY4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Signature Coat',
    category: 'Outerwear',
    price: '$549',
    image: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMG91dGZpdHxlbnwxfHx8fDE3NzE3MTY4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Urban Streetwear Set',
    category: 'Collections',
    price: '$399',
    image: 'https://images.unsplash.com/photo-1635650805015-2fa50682873a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldHdlYXIlMjBzdHlsZXxlbnwxfHx8fDE3NzE3MTY4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Evening Ensemble',
    category: 'Formal',
    price: '$799',
    image: 'https://images.unsplash.com/photo-1771480303028-63b0c1e68273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2xvdGhpbmclMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc3MTcxNjgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function ProductShowcase() {
  return (
    <section id="shop" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-2">New Arrivals</p>
          <h2 className="text-4xl md:text-5xl mb-4">Latest Drops</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated pieces for the modern wardrobe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer bg-white">
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <ImageWithFallback 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Quick View
                </button>
              </div>
              <div className="px-4 pb-4">
                <p className="text-xs tracking-widest uppercase text-gray-500 mb-1">
                  {product.category}
                </p>
                <h3 className="text-lg mb-2">{product.name}</h3>
                <p className="font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border border-black text-black hover:bg-black hover:text-white transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
