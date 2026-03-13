import { Send, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-light-blue/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] rounded-full bg-navy/5 blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden"
        >
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-navy text-white flex flex-col justify-between relative overflow-hidden">
              {/* Background Image for Contact Panel */}
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
                alt="Digital communication" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/95"></div>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-light-blue/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
              
              <div className="relative z-10 p-10">
                <h3 className="text-3xl font-bold mb-3">Get in Touch</h3>
                <p className="text-slate-300 text-sm mb-10 leading-relaxed">Ready to digitize your physical products? Let's build something amazing together.</p>
                
                <div className="space-y-8">
                  <div className="group">
                    <p className="text-xs text-light-blue uppercase tracking-wider font-bold mb-2">Email</p>
                    <a href="mailto:hello@tapflow.com" className="text-lg font-medium group-hover:text-light-blue transition-colors">hello@tapflow.com</a>
                  </div>
                  <div>
                    <p className="text-xs text-light-blue uppercase tracking-wider font-bold mb-2">Location</p>
                    <p className="text-lg font-medium">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 p-10 mt-auto">
                <a 
                  href="https://wa.me/251900000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 px-4 rounded-2xl font-bold hover:bg-[#20bd5a] transition-all hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1"
                >
                  <MessageCircle size={22} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="md:col-span-3 p-10 lg:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-light-blue/50 focus:border-light-blue transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-light-blue/50 focus:border-light-blue transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="business" className="text-sm font-bold text-slate-700">Business Type</label>
                  <select 
                    id="business" 
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-light-blue/50 focus:border-light-blue transition-all appearance-none"
                  >
                    <option value="">Select your business type</option>
                    <option value="restaurant">Restaurant / Cafe</option>
                    <option value="influencer">Influencer / Creator</option>
                    <option value="retail">Retail Store</option>
                    <option value="event">Event Organizer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-light-blue/50 focus:border-light-blue transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-navy text-white py-4 rounded-xl font-bold hover:bg-light-blue transition-all duration-300 hover:shadow-lg hover:shadow-light-blue/30 hover:-translate-y-1"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
