const About = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 scroll-animate-left">
            <div className="inline-block">
              <span className="text-[#6EBD49] font-semibold text-sm uppercase tracking-wider">
                › ABOUT US
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              CLUB of Machine Makers
            </h2>

            <p className="text-black text-lg leading-relaxed">
              We are a premier global supplier specializing in specialized machinery across four critical sectors.
              With extensive industry experience and a vast network of suppliers and buyers worldwide, we facilitate
              seamless transactions across borders for Defence, Industrial, Construction, and Agriculture equipment.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4 pt-6">
              <div className="bg-white border border-[#F37E3A]/20 rounded-xl p-6 hover:border-[#F37E3A]/50 transition-all shadow-md hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F37E3A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#F37E3A]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      Defence & Industrial
                    </h3>
                    <p className="text-black">
                      Tactical equipment and heavy industrial machinery
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#F37E3A]/20 rounded-xl p-6 hover:border-[#F37E3A]/50 transition-all shadow-md hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F37E3A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#F37E3A]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      Construction & Agriculture
                    </h3>
                    <p className="text-black">
                      Heavy construction and modern farming equipment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative scroll-animate-right">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Large Image */}
              <div className="col-span-2">
                <div className="relative h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                  <img
                    src="/images/Construction-Machinery.png"
                    alt="Construction Machinery"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
                    <p className="text-black font-semibold">Specialized Machinery</p>
                    <p className="text-black text-sm">
                      Four Key Sectors: Defence, Industrial, Construction & Agriculture
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Cards */}
              <div className="bg-gradient-to-br from-[#288EC2]/10 to-[#288EC2]/5 border border-[#288EC2]/30 rounded-xl p-6 hover:border-[#288EC2]/60 transition-all shadow-md">
                <h4 className="text-black font-bold mb-2 border-b-2 border-[#F37E3A] pb-2 inline-block">
                  Global Sourcing
                </h4>
                <p className="text-black text-sm mt-4">
                  Worldwide supplier network
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#6EBD49]/10 to-[#6EBD49]/5 border border-[#6EBD49]/30 rounded-xl p-6 hover:border-[#6EBD49]/60 transition-all shadow-md">
                <h4 className="text-black font-bold mb-2 border-b-2 border-[#F37E3A] pb-2 inline-block">
                  Quality Assurance
                </h4>
                <p className="text-black text-sm mt-4">
                  Certified materials & equipment
                </p>
              </div>

              <div className="col-span-2 bg-gradient-to-br from-[#F37E3A]/10 to-[#F37E3A]/5 border border-[#F37E3A]/30 rounded-xl p-6 hover:border-[#F37E3A]/60 transition-all shadow-md">
                <h4 className="text-black font-bold mb-2 border-b-2 border-[#F37E3A] pb-2 inline-block">
                  Logistics Support
                </h4>
                <p className="text-black text-sm mt-4">
                  Seamless shipping & documentation
                </p>
              </div>

              {/* Bottom Image Card */}
              <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/images/Industrial-Machinery.png"
                  alt="Industrial Machinery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <button className="w-full bg-[#F37E3A] hover:bg-[#d66d2f] text-white py-3 rounded-lg font-semibold transition-all shadow-lg">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#6EBD49] rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#288EC2] rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
