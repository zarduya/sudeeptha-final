import logo from '../../../assets/e975df2d06c10203554d9efa84b808199e386946.png';

export function StudioFooter() {
  return (
    <footer className="py-12 px-6 md:px-12" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Sudeeptha Studio" className="h-12 w-12" />
              <span className="text-xl tracking-wide" style={{ color: 'var(--maroon)' }}>
                SUDEEPTHA STUDIO
              </span>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Crafting exquisite Indian, Bridal, Western, and Custom creations with passion and precision. 
              Your dream outfit, our masterpiece.
            </p>
            <div className="space-y-1 text-sm text-gray-600 mb-4">
              <p>
                <a href="tel:+919182918484" className="hover:underline">
                  📞 +91 91829 18484
                </a>
              </p>
              <p>
                <a href="mailto:sudeepthareddystudio@gmail.com" className="hover:underline">
                  ✉️ sudeepthareddystudio@gmail.com
                </a>
              </p>
            </div>
            <p className="text-sm text-gray-600">
              © 2026 Sudeeptha Studio. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4" style={{ color: 'var(--maroon)' }}>Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#collections" className="hover:underline">Collections</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Gallery</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4" style={{ color: 'var(--maroon)' }}>Services</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:underline">Indian Wear</a></li>
              <li><a href="#" className="hover:underline">Bridal Collection</a></li>
              <li><a href="#" className="hover:underline">Western Elegance</a></li>
              <li><a href="#" className="hover:underline">Custom Creations</a></li>
              <li><a href="#" className="hover:underline">Alterations</a></li>
            </ul>
          </div>
        </div>
        
        <div 
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600"
          style={{ borderColor: 'var(--cream-dark)' }}
        >
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
          <p>Designed with ❤️ for elegance</p>
        </div>
      </div>
    </footer>
  );
}