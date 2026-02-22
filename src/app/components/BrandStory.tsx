import { ImageWithFallback } from './figma/ImageWithFallback';

export function BrandStory() {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">Our Story</p>
            <h2 className="text-4xl md:text-5xl mb-6">Where Craftsmanship Meets Contemporary Design</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since our founding, AURA has been dedicated to creating clothing that transcends trends. 
              Each piece is thoughtfully designed and meticulously crafted to become a lasting part of your wardrobe.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in sustainable fashion that doesn't compromise on style. Our commitment to quality 
              materials and ethical production ensures every garment tells a story of care and attention.
            </p>
            <button className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors">
              Learn More About Us
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1753029226995-74b05a344bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbG90aGluZyUyMHN0b3JlfGVufDF8fHx8MTc3MTY2NTY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Brand story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
