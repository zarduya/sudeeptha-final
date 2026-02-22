export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12" style={{ backgroundColor: 'var(--maroon)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--cream)' }}>
            Begin Your Journey
          </h2>
          <div 
            className="h-px w-24 mx-auto mb-6"
            style={{ backgroundColor: 'var(--gold)' }}
          ></div>
          <p className="text-lg" style={{ color: 'var(--cream)', opacity: 0.9 }}>
            Let's create something extraordinary together. Book your consultation today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 flex items-center gap-2" style={{ color: 'var(--cream)' }}>
                <span>📍</span> Visit Us
              </h4>
              <p style={{ color: 'var(--cream)', opacity: 0.8 }}>
                <a 
                  href="https://maps.app.goo.gl/J3LN3wDGxj6Prw1X8?g_st=ic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  View on Google Maps →
                </a>
              </p>
            </div>
            <div>
              <h4 className="mb-2 flex items-center gap-2" style={{ color: 'var(--cream)' }}>
                <span>📞</span> Call Us
              </h4>
              <p style={{ color: 'var(--cream)', opacity: 0.8 }}>
                <a href="tel:+919182918484" className="hover:underline">
                  +91 91829 18484
                </a>
              </p>
            </div>
            <div>
              <h4 className="mb-2 flex items-center gap-2" style={{ color: 'var(--cream)' }}>
                <span>✉️</span> Email Us
              </h4>
              <p style={{ color: 'var(--cream)', opacity: 0.8 }}>
                <a href="mailto:sudeepthareddystudio@gmail.com" className="hover:underline">
                  sudeepthareddystudio@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="mb-2 flex items-center gap-2" style={{ color: 'var(--cream)' }}>
                <span>🕐</span> Studio Hours
              </h4>
              <p style={{ color: 'var(--cream)', opacity: 0.8 }}>
                Mon - Sat: 10:00 AM - 7:00 PM<br />
                Sunday: By Appointment Only
              </p>
            </div>
          </div>

          {/* Appointment Form */}
          <div 
            className="p-8 rounded-lg"
            style={{ backgroundColor: 'var(--cream)' }}
          >
            <h3 className="text-2xl mb-6" style={{ color: 'var(--maroon)' }}>
              Book an Appointment
            </h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ 
                    borderColor: 'var(--cream-dark)',
                    backgroundColor: 'white'
                  }}
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ 
                    borderColor: 'var(--cream-dark)',
                    backgroundColor: 'white'
                  }}
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ 
                    borderColor: 'var(--cream-dark)',
                    backgroundColor: 'white'
                  }}
                />
              </div>
              <div>
                <select 
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ 
                    borderColor: 'var(--cream-dark)',
                    backgroundColor: 'white',
                    color: '#666'
                  }}
                >
                  <option value="">Select Service</option>
                  <option value="indian">Indian Wear</option>
                  <option value="bridal">Bridal Collection</option>
                  <option value="western">Western Elegance</option>
                  <option value="custom">Custom Creation</option>
                </select>
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="w-full px-4 py-3 border focus:outline-none resize-none"
                  style={{ 
                    borderColor: 'var(--cream-dark)',
                    backgroundColor: 'white'
                  }}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-4 transition-all hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--maroon)', 
                  color: 'var(--cream)'
                }}
              >
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="mb-4" style={{ color: 'var(--cream)' }}>
            Follow Us
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="https://www.instagram.com/sudeepthastudio?igsh=MTQyZXFicnVzd2lzdw==" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border transition-all hover:scale-110"
              style={{ borderColor: 'var(--cream)', color: 'var(--cream)' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://maps.app.goo.gl/J3LN3wDGxj6Prw1X8?g_st=ic" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border transition-all hover:scale-110"
              style={{ borderColor: 'var(--cream)', color: 'var(--cream)' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
              </svg>
            </a>
            <a 
              href="mailto:sudeepthareddystudio@gmail.com"
              className="w-12 h-12 flex items-center justify-center border transition-all hover:scale-110"
              style={{ borderColor: 'var(--cream)', color: 'var(--cream)' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}