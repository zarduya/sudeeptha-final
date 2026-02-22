import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative h-screen">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-white">AURA</h1>
          <div className="hidden md:flex items-center gap-8 text-sm text-white">
            <a href="#collections" className="hover:opacity-70 transition-opacity">Collections</a>
            <a href="#shop" className="hover:opacity-70 transition-opacity">Shop</a>
            <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
          </div>
          <div className="flex items-center gap-4 text-white">
            <button className="hover:opacity-70 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1620777888789-0ee95b57a277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzE2MTYxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Fashion model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="text-center text-white max-w-4xl">
          <p className="text-sm tracking-widest uppercase mb-4">Spring Collection 2026</p>
          <h2 className="text-5xl md:text-7xl mb-6 tracking-tight">Elegance Redefined</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover timeless pieces that blend contemporary design with classic sophistication
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
            <button className="px-8 py-4 border border-white text-white hover:bg-white/10 transition-colors">
              View Collection
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
