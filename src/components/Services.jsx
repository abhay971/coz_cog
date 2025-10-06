const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Global Sourcing',
      description: 'Access to premium quality machinery from verified suppliers worldwide across Defence, Industrial, Construction, and Agriculture sectors. We maintain strong relationships with manufacturers and distributors across all major markets.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quality Inspection',
      description: 'Comprehensive quality control and third-party inspection services. All machinery and equipment are certified to meet international standards including ISO, CE, and industry-specific certifications for each sector.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Trade Consultation',
      description: 'Expert guidance on market trends, pricing strategies, and product selection. Our experienced team helps you make informed decisions for successful international trade operations.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Payment Solutions',
      description: 'Flexible and secure payment options including LC, TT, and escrow services. We facilitate smooth financial transactions with complete transparency and regulatory compliance.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Documentation Support',
      description: 'Complete assistance with export-import documentation, customs clearance, and regulatory compliance. We handle all paperwork to ensure hassle-free cross-border transactions.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: 'Logistics Management',
      description: 'End-to-end logistics solutions including sea freight, air cargo, and land transport. We coordinate with reliable shipping partners to ensure safe and timely delivery worldwide.'
    }
  ]

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-block mb-4">
            <span className="text-[#288EC2] font-semibold text-sm uppercase tracking-wider">
              › OUR SERVICES
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Comprehensive Machinery Solutions
          </h2>
          <p className="text-black text-lg max-w-3xl mx-auto">
            We provide end-to-end machinery solutions across Defence, Industrial, Construction, and Agriculture sectors, ensuring smooth transactions from sourcing to delivery. Our services are designed to meet the unique needs of international buyers and sellers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#F37E3A]/50 transition-all hover:transform hover:-translate-y-2 shadow-lg hover:shadow-2xl scroll-animate-scale"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#F37E3A]/10 rounded-xl flex items-center justify-center text-[#F37E3A] mb-6 group-hover:bg-[#F37E3A] group-hover:text-white transition-all group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-black mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Button */}
              <a
                href="#contact"
                className="bg-[#F37E3A] hover:bg-[#d66d2f] text-white px-6 py-2 rounded-full font-semibold transition-all inline-flex items-center gap-2 group-hover:gap-3 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
