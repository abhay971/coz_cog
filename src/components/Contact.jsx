const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 scroll-animate">
          <div className="inline-block mb-4">
            <span className="text-[#F37E3A] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              › GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6">
            Contact Us
          </h2>
          <p className="text-black text-base sm:text-lg max-w-3xl mx-auto">
            Have questions or need a quote? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Contact Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100 scroll-animate-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">Send us a Message</h3>
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-black font-semibold mb-2 text-sm sm:text-base">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37E3A] focus:outline-none transition-colors text-black text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-black font-semibold mb-2 text-sm sm:text-base">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37E3A] focus:outline-none transition-colors text-black text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-black font-semibold mb-2 text-sm sm:text-base">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37E3A] focus:outline-none transition-colors text-black text-sm sm:text-base"
                  placeholder="+1 (123) 456-7890"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-black font-semibold mb-2 text-sm sm:text-base">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37E3A] focus:outline-none transition-colors text-black text-sm sm:text-base"
                  placeholder="Product Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-black font-semibold mb-2 text-sm sm:text-base">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37E3A] focus:outline-none transition-colors resize-none text-black text-sm sm:text-base"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#F37E3A] hover:bg-[#d66d2f] text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-3"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right - Contact Information */}
          <div className="space-y-6 scroll-animate-right">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:border-[#F37E3A]/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F37E3A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#F37E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-black mb-2">Phone</h4>
                  <p className="text-black text-base sm:text-lg font-semibold">(123) 456-7890</p>
                  <p className="text-gray-600 text-sm mt-1">Mon-Fri 9am to 6pm</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:border-[#288EC2]/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#288EC2]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#288EC2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-black mb-2">Email</h4>
                  <p className="text-black text-base sm:text-lg font-semibold">contact@cozcog.com</p>
                  <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:border-[#6EBD49]/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#6EBD49]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#6EBD49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-black mb-2">Office Location</h4>
                  <p className="text-black text-base sm:text-lg">123 Business Street</p>
                  <p className="text-black text-base sm:text-lg">City, State 12345</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-[#F37E3A] to-[#d66d2f] rounded-2xl p-6 sm:p-8 shadow-xl text-white">
              <h4 className="text-xl sm:text-2xl font-bold mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
