export function Newsletter() {
  return (
    <section className="py-20 px-6 md:px-12 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-4">Stay in Touch</h2>
        <p className="text-gray-300 mb-8">
          Subscribe to receive exclusive updates, new arrivals, and special offers
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-white/40"
          />
          <button 
            type="submit"
            className="px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="text-sm text-gray-400 mt-4">
          By subscribing, you agree to our Privacy Policy
        </p>
      </div>
    </section>
  );
}
