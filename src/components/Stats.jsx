const Stats = () => {
  return (
    <section className="relative py-12 md:py-20 bg-white overflow-hidden">
      {/* Background Pattern with light overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Stats */}
          <div className="grid grid-cols-3 gap-8 scroll-animate-left">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">98%</div>
              <div className="text-black text-sm">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">15+</div>
              <div className="text-black text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">100%</div>
              <div className="text-black text-sm">Quality Certified</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 scroll-animate-right">
            <div className="inline-block">
              <span className="text-[#6EBD49] font-semibold text-sm uppercase tracking-wider">
                › WHO WE ARE
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Building Global Trade Partnerships
            </h2>

            <p className="text-black text-lg leading-relaxed">
              Our commitment to excellence in metals and machinery trading has earned us the trust of clients worldwide. We ensure every transaction meets the highest standards of quality, compliance, and reliability, making us the preferred choice for international trade.
            </p>

            <button className="bg-[#F37E3A] hover:bg-[#d66d2f] text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg">
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#F37E3A] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#288EC2] rounded-full opacity-5 blur-3xl"></div>
    </section>
  )
}

export default Stats
