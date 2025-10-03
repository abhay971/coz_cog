const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 scroll-animate-left">
            <div className="inline-block">
              <span className="text-[#6EBD49] font-semibold text-sm uppercase tracking-wider">
                › ABOUT US
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              Leading Metals and
              <br />
              Machinery Traders
            </h2>

            <p className="text-black text-lg leading-relaxed">
              We are a premier global trading company specializing in ferrous
              and non-ferrous metals, scrap materials, and heavy machinery. With
              extensive industry experience and a vast network of suppliers and
              buyers worldwide, we facilitate seamless transactions across
              borders.
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      Metal Trading
                    </h3>
                    <p className="text-black">
                      Steel, copper, aluminum, and specialty alloys
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      Machinery Trading
                    </h3>
                    <p className="text-black">
                      Heavy equipment and industrial machinery
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
                    src="/images/About Heavy Machinery.png"
                    alt="Heavy Machinery"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
                    <p className="text-black font-semibold">Heavy Machinery</p>
                    <p className="text-black text-sm">
                      Construction & Mining Equipment
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
                  src="/images/About Metal Trading.png"
                  alt="Metal Trading"
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
