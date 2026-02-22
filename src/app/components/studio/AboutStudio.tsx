import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutStudio() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p 
              className="text-sm tracking-widest uppercase mb-4"
              style={{ color: 'var(--maroon-light)' }}
            >
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--maroon)' }}>
              Crafting Dreams into Reality
            </h2>
            <div 
              className="h-px w-24 mb-6"
              style={{ backgroundColor: 'var(--gold)' }}
            ></div>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              At Sudeeptha Studio, we believe that every garment tells a story. With years of expertise 
              in traditional Indian craftsmanship and contemporary design, we create pieces that honor 
              heritage while embracing modern elegance.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team of skilled artisans works meticulously to bring your vision to life, whether 
              it's a traditional bridal ensemble, an elegant western gown, or a custom creation that 
              reflects your unique personality.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Each piece is crafted with attention to detail, using premium fabrics and exquisite 
              embellishments that ensure you look and feel extraordinary.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-4xl mb-2" style={{ color: 'var(--maroon)' }}>500+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-2" style={{ color: 'var(--maroon)' }}>15+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-2" style={{ color: 'var(--maroon)' }}>1000+</p>
                <p className="text-sm text-gray-600">Custom Designs</p>
              </div>
            </div>

            <button 
              className="px-8 py-4 transition-all hover:scale-105"
              style={{ 
                backgroundColor: 'var(--maroon)', 
                color: 'var(--cream)'
              }}
            >
              Our Story
            </button>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1676132068619-f015a54cee3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYnJpZGFsJTIwZ293bnxlbnwxfHx8fDE3NzE3MjUwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Elegant bridal creation"
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute -bottom-6 -right-6 w-64 h-64 -z-10"
              style={{ backgroundColor: 'var(--cream)' }}
            ></div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center p-6">
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
              style={{ backgroundColor: 'var(--cream)' }}
            >
              💎
            </div>
            <h4 className="mb-2" style={{ color: 'var(--maroon)' }}>Premium Quality</h4>
            <p className="text-sm text-gray-600">Finest fabrics and materials</p>
          </div>
          <div className="text-center p-6">
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
              style={{ backgroundColor: 'var(--cream)' }}
            >
              🎨
            </div>
            <h4 className="mb-2" style={{ color: 'var(--maroon)' }}>Custom Design</h4>
            <p className="text-sm text-gray-600">Personalized to perfection</p>
          </div>
          <div className="text-center p-6">
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
              style={{ backgroundColor: 'var(--cream)' }}
            >
              ✨
            </div>
            <h4 className="mb-2" style={{ color: 'var(--maroon)' }}>Expert Craftsmanship</h4>
            <p className="text-sm text-gray-600">Years of experience</p>
          </div>
          <div className="text-center p-6">
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
              style={{ backgroundColor: 'var(--cream)' }}
            >
              ⏰
            </div>
            <h4 className="mb-2" style={{ color: 'var(--maroon)' }}>Timely Delivery</h4>
            <p className="text-sm text-gray-600">On-time, every time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
