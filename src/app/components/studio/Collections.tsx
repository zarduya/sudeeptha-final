import { ImageWithFallback } from '../figma/ImageWithFallback';

const collections = [
  {
    title: 'Indian Wear',
    description: 'Traditional sarees, lehengas, and ethnic ensembles that celebrate Indian heritage',
    image: 'https://images.unsplash.com/photo-1769275061088-85697a30ee50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBldGhuaWMlMjBzYXJlZXxlbnwxfHx8fDE3NzE3MjUwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: '✨'
  },
  {
    title: 'Bridal Collection',
    description: 'Stunning bridal wear designed to make your special day unforgettable',
    image: 'https://images.unsplash.com/photo-1724856604254-f7cf4e9c8f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkYWwlMjBsZWhlbmdhfGVufDF8fHx8MTc3MTcyNTA2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: '💐'
  },
  {
    title: 'Western Elegance',
    description: 'Contemporary gowns and dresses with a touch of sophistication',
    image: 'https://images.unsplash.com/photo-1631291885373-bf06f629cc3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXN0ZXJuJTIwZXZlbmluZyUyMGRyZXNzfGVufDF8fHx8MTc3MTcyNTA2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: '👗'
  },
  {
    title: 'Custom Creations',
    description: 'Bespoke designs tailored to your unique vision and style',
    image: 'https://images.unsplash.com/photo-1632991727906-8386e1388975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduZXIlMjBzdHVkaW98ZW58MXx8fHwxNzcxNjg1NDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: '✂️'
  }
];

export function Collections() {
  return (
    <section id="collections" className="py-20 px-6 md:px-12" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: 'var(--maroon-light)' }}>
            Our Specialties
          </p>
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--maroon)' }}>
            Curated Collections
          </h2>
          <div 
            className="h-px w-24 mx-auto"
            style={{ backgroundColor: 'var(--gold)' }}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback 
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div 
                  className="absolute inset-0 group-hover:opacity-60 transition-opacity"
                  style={{ backgroundColor: 'var(--maroon)', opacity: 0.3 }}
                ></div>
                <div className="absolute top-4 right-4 text-4xl opacity-80">
                  {collection.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl mb-3" style={{ color: 'var(--maroon)' }}>
                  {collection.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {collection.description}
                </p>
                <button 
                  className="text-sm tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all"
                  style={{ color: 'var(--maroon-light)' }}
                >
                  Explore More 
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
