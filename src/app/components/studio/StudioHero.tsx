import logo from '../../../assets/e975df2d06c10203554d9efa84b808199e386946.png';

export function StudioHero() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: 'var(--maroon)' }}>
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Sudeeptha Studio" className="h-12 w-12" />
            <span className="text-xl tracking-wide" style={{ color: 'var(--cream)' }}>
              SUDEEPTHA STUDIO
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: 'var(--cream)' }}>
            <a href="#collections" className="hover:opacity-70 transition-opacity">Collections</a>
            <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
          </div>
          <button 
            className="px-6 py-2 border transition-all hover:scale-105"
            style={{ 
              borderColor: 'var(--cream)', 
              color: 'var(--cream)',
              backgroundColor: 'transparent'
            }}
          >
            Book Appointment
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <img src={logo} alt="Sudeeptha Studio Logo" className="h-32 w-32 mx-auto mb-8" />
          <h1 
            className="text-5xl md:text-7xl mb-6 tracking-wider"
            style={{ color: 'var(--cream)', fontWeight: '300', letterSpacing: '0.1em' }}
          >
            SUDEEPTHA STUDIO
          </h1>
          <div 
            className="h-px w-24 mx-auto mb-6"
            style={{ backgroundColor: 'var(--gold)' }}
          ></div>
          <p 
            className="text-xl md:text-2xl mb-4"
            style={{ color: 'var(--cream)', fontWeight: '300' }}
          >
            Where Tradition Meets Elegance
          </p>
          <p 
            className="text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--cream)', opacity: 0.9 }}
          >
            Exquisite Indian, Bridal, Western, and Custom Creations Crafted with Passion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 transition-all hover:scale-105"
              style={{ 
                backgroundColor: 'var(--cream)', 
                color: 'var(--maroon)'
              }}
            >
              Explore Collections
            </button>
            <button 
              className="px-8 py-4 border transition-all hover:scale-105"
              style={{ 
                borderColor: 'var(--cream)', 
                color: 'var(--cream)',
                backgroundColor: 'transparent'
              }}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        background: `linear-gradient(to top, var(--cream), transparent)`
      }}></div>
    </div>
  );
}
