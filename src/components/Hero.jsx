const Hero = () => {
  return (
    <div className="relative bg-white min-h-screen pt-20 overflow-hidden">
      {/* Simple Clean Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 scroll-animate-left">
            <div className="inline-block">
              <span className="text-[#F37E3A] font-semibold text-xs sm:text-sm uppercase tracking-wide sm:tracking-wider bg-[#F37E3A]/10 px-3 sm:px-4 md:px-5 py-2 rounded-full border border-[#F37E3A]/30">
                › Global Machinery & Metals Trading
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
              Leading International Supplier of Heavy Machinery
            </h1>

            <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed">
              Premier trader of construction equipment, industrial machinery, and quality metals. Connecting verified buyers and sellers across 50+ countries with complete logistics and certification support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#equipment"
                className="bg-[#F37E3A] hover:bg-[#d66d2f] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2 sm:gap-3"
              >
                View Machinery Catalog
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="border-2 border-black hover:bg-black hover:text-white text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all text-center"
              >
                Request Quote
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 md:pt-8 border-t-2 border-gray-200">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-1 md:mb-2">50+</div>
                <div className="text-black text-xs sm:text-sm font-medium">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-1 md:mb-2">10K+</div>
                <div className="text-black text-xs sm:text-sm font-medium">Machines Traded</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-1 md:mb-2">500+</div>
                <div className="text-black text-xs sm:text-sm font-medium">Active Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Machinery Image Grid */}
          <div className="relative scroll-animate-right">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Large Image */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-500">
                <img
                  src="/images/Heavy Machinery.png"
                  alt="Heavy Construction Equipment"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Heavy Construction Equipment</h3>
                  <p className="text-lg">Excavators • Bulldozers • Loaders</p>
                </div>
              </div>

              {/* Secondary Images */}
              <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-white transform hover:scale-105 transition-all">
                <img
                  src="/images/Machinery Trading.png"
                  alt="Industrial Machinery"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-bold">Industrial Machinery</p>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-white transform hover:scale-105 transition-all">
                <img
                  src="/images/Metal Trading.png"
                  alt="Metal Trading"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-bold">Premium Metals</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
          <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-[#F37E3A]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-black font-bold text-sm sm:text-base">4.9/5</span>
            <span className="text-black text-xs sm:text-sm">from 2,500+ reviews</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#F37E3A] to-[#288EC2] border-2 border-white"></div>
              ))}
            </div>
            <span className="text-black font-bold text-xs sm:text-sm md:text-base">Trusted by 10,000+ clients</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
