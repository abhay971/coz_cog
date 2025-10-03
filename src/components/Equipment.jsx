const Equipment = () => {
  const products = [
    {
      name: "Heavy Machinery",
      label: "Heavy Construction Equipment",
      image: "/images/Feature1.png",
      description: "Excavators, Bulldozers, Loaders, Cranes",
      featured: true,
    },
    {
      name: "Machinery Trading",
      label: "Industrial Machinery",
      image: "/images/Feature2.png",
      description: "Mining Equipment, Compressors, Generators",
      featured: true,
    },
    {
      name: "Steel Bars & Rods",
      label: "Steel Bars & Rods",
      image: "/images/Feature3.png",
      description: "Reinforcement bars, round bars, deformed bars",
    },
    {
      name: "Steel Sheets & Plates",
      label: "Steel Sheets & Plates",
      image: "/images/Feature4.png",
      description: "Hot rolled, cold rolled, galvanized sheets",
    },
    {
      name: "Copper & Brass",
      label: "Copper & Brass Products",
      image: "/images/Feature5.png ",
      description: "Copper pipes, brass fittings, bronze alloys",
    },
    {
      name: "Metal Scrap",
      label: "Metal Scrap Trading",
      image: "/images/Feature7.png",
      description: "HMS 1&2, aluminum scrap, copper scrap",
    },
    // {
    //   name: 'Metal Scrap',
    //   label: 'Metal Scrap Trading',
    //   image: '/images/Metal Scrap.png',
    //   description: 'HMS 1&2, aluminum scrap, copper scrap'
    // }
  ];

  // Separate featured (machinery) and regular products
  const featuredProducts = products.filter((p) => p.featured);
  const regularProducts = products.filter((p) => !p.featured);

  return (
    <section id="equipment" className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Simple Clean Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-block mb-4">
            <span className="text-[#F37E3A] font-bold text-sm uppercase tracking-wider bg-[#F37E3A]/10 px-6 py-3 rounded-full border border-[#F37E3A]/30">
              › OUR PRODUCTS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            Heavy Machinery &<br />
            Premium Metals
          </h2>
          <p className="text-black text-xl max-w-4xl mx-auto leading-relaxed">
            We specialize in trading{" "}
            <strong>heavy construction equipment</strong> and{" "}
            <strong>industrial machinery</strong> from world-leading
            manufacturers. Our comprehensive range also includes premium quality
            metals with complete certification and documentation.
          </p>
        </div>

        {/* Featured Machinery Section - Large Cards */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center scroll-animate">
            Heavy Machinery & Equipment
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProducts.map((item, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#F37E3A]/30 transition-all transform hover:-translate-y-3 border-2 border-gray-100 hover:border-[#F37E3A] duration-500 ${
                  index === 0 ? "scroll-animate-left" : "scroll-animate-right"
                }`}
              >
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-[#F37E3A]/80 transition-all duration-500"></div>

                  {/* Featured Badge */}
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-[#F37E3A] to-[#d66d2f] text-white px-6 py-2 rounded-full font-bold text-sm shadow-xl">
                    FEATURED
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                      {item.label}
                    </h3>
                    <p className="text-lg mb-4 opacity-90">
                      {item.description}
                    </p>
                    <a
                      href="#contact"
                      className="bg-white text-[#F37E3A] px-8 py-3 rounded-full font-bold transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 group/btn"
                    >
                      View Catalog
                      <svg
                        className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center my-16">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-3xl"></div>
          <span className="px-6 text-black font-bold text-xl whitespace-nowrap">
            Premium Metals
          </span>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-3xl"></div>
        </div>

        {/* Metals Section - Regular Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {regularProducts.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 hover:border-[#288EC2] duration-300 scroll-animate-scale"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-[#288EC2]/60 transition-all duration-500"></div>

                {/* Quick View Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-[#288EC2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 text-center">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#288EC2] transition-colors">
                  {item.label}
                </h3>
                <p className="text-black text-sm mb-4 opacity-80">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  className="w-full bg-gradient-to-r from-[#288EC2] to-[#1e6b96] hover:from-[#1e6b96] hover:to-[#288EC2] text-white px-4 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-xl inline-flex items-center justify-center gap-2"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-[#F37E3A]/10 via-white to-[#288EC2]/10 rounded-3xl p-12 border-2 border-gray-200 shadow-2xl scroll-animate">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            We have access to an extensive network of suppliers worldwide.
            Contact us with your specific requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="group bg-gradient-to-r from-[#F37E3A] to-[#d66d2f] hover:from-[#d66d2f] hover:to-[#F37E3A] text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-110 shadow-2xl hover:shadow-[#F37E3A]/50">
              <span className="flex items-center gap-3">
                Request Custom Quote
                <svg
                  className="w-6 h-6 group-hover:rotate-90 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </button>
            <button className="group border-3 border-black hover:bg-black hover:text-white text-black px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
              <span className="flex items-center gap-3">
                Download Catalog
                <svg
                  className="w-6 h-6 group-hover:translate-y-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
