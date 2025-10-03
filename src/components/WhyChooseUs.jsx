const WhyChooseUs = () => {
  const features = [
    'Competitive pricing and transparent transactions',
    'Certified quality metals and machinery',
    'Global logistics and customs support'
  ]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 scroll-animate-left">
            <div className="inline-block">
              <span className="text-[#288EC2] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                › WHY CHOOSE US
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Your Reliable Trading Partner
            </h2>

            <p className="text-black text-base sm:text-lg leading-relaxed">
              With over a decade of experience in international metals and machinery trading, we connect buyers and sellers across 50+ countries. Our commitment to quality, transparency, and timely delivery has made us a trusted name in the industry.
            </p>

            {/* Features List */}
            <div className="space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#6EBD49] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black text-sm sm:text-base md:text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Large Image - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-lg mt-8">
              <img
                src="/images/Large Feature Image.png"
                alt="Global Trade Network"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
                <p className="text-black font-semibold text-lg">Global Trade Network</p>
                <button className="mt-3 bg-[#F37E3A] hover:bg-[#d66d2f] text-white px-6 py-2 rounded-full font-semibold transition-all inline-flex items-center gap-2 shadow-md">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Products Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 scroll-animate-right">
            {/* Steel Products */}
            <div className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
              <div className="h-32 sm:h-40 md:h-56 overflow-hidden">
                <img
                  src="/images/Steel Products.png"
                  alt="Steel Products"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-6 text-center">
                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-black mb-1 md:mb-2">Steel Products</h3>
                <p className="text-black text-xs sm:text-sm mb-2 md:mb-4 line-clamp-2">Flat, long products, and structural steel</p>
                <button className="bg-[#F37E3A] hover:bg-[#d66d2f] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full font-semibold transition-all shadow-md w-full sm:w-auto">
                  View Products
                </button>
              </div>
            </div>

            {/* Non-Ferrous Metals */}
            <div className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
              <div className="h-32 sm:h-40 md:h-56 overflow-hidden">
                <img
                  src="/images/Non-Ferrous Metals.png"
                  alt="Non-Ferrous Metals"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-6 text-center">
                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-black mb-1 md:mb-2">Non-Ferrous Metals</h3>
                <p className="text-black text-xs sm:text-sm mb-2 md:mb-4 line-clamp-2">Copper, aluminum, brass, and alloys</p>
                <button className="bg-[#F37E3A] hover:bg-[#d66d2f] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full font-semibold transition-all shadow-md w-full sm:w-auto">
                  View Products
                </button>
              </div>
            </div>

            {/* Scrap Materials */}
            <div className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
              <div className="h-32 sm:h-40 md:h-56 overflow-hidden">
                <img
                  src="/images/Scrap Materials.png"
                  alt="Scrap Materials"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-6 text-center">
                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-black mb-1 md:mb-2">Scrap Materials</h3>
                <p className="text-black text-xs sm:text-sm mb-2 md:mb-4 line-clamp-2">Metal scrap and recyclable materials</p>
                <button className="bg-[#F37E3A] hover:bg-[#d66d2f] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full font-semibold transition-all shadow-md w-full sm:w-auto">
                  View Products
                </button>
              </div>
            </div>

            {/* Heavy Machinery */}
            <div className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
              <div className="h-32 sm:h-40 md:h-56 overflow-hidden">
                <img
                  src="/images/Heavy Machinery.png"
                  alt="Heavy Machinery"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-6 text-center">
                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-black mb-1 md:mb-2">Heavy Machinery</h3>
                <p className="text-black text-xs sm:text-sm mb-2 md:mb-4 line-clamp-2">Construction and mining equipment</p>
                <button className="bg-[#F37E3A] hover:bg-[#d66d2f] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full font-semibold transition-all shadow-md w-full sm:w-auto">
                  View Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
