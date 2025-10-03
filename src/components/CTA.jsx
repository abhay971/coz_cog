const CTA = () => {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center scroll-animate">
        <div className="inline-block mb-4">
          <span className="text-[#6EBD49] font-semibold text-sm uppercase tracking-wider">
            › GET STARTED
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
          Ready to Start Trading?
        </h2>

        <p className="text-black text-lg mb-10 max-w-2xl mx-auto">
          Partner with us for reliable metals and machinery trading. Get competitive quotes, quality assurance, and seamless logistics support for your international trade needs.
        </p>

        <button className="bg-[#F37E3A] hover:bg-[#d66d2f] text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-3">
          Get Quote Now
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#F37E3A] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#288EC2] rounded-full opacity-10 blur-3xl"></div>
      </div>
    </section>
  )
}

export default CTA
