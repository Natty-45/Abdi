import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, HelpCircle, ChevronRight } from 'lucide-react';

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect for the hero background
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const contactCards = [
    {
      icon: <MapPin size={32} className="text-light-blue" />,
      title: "Our Headquarters",
      details: ["123 Innovation Drive", "Addis Ababa, Ethiopia"],
      delay: 0.1,
      direction: { x: -100, y: 0 } // From left
    },
    {
      icon: <Phone size={32} className="text-light-blue" />,
      title: "Phone Support",
      details: ["+251 911 234 567", "+251 922 345 678"],
      delay: 0.2,
      direction: { x: 0, y: 100 } // From bottom
    },
    {
      icon: <Mail size={32} className="text-light-blue" />,
      title: "Email Us",
      details: ["hello@tapflow.com", "support@tapflow.com"],
      delay: 0.3,
      direction: { x: 0, y: -100 } // From top
    },
    {
      icon: <Clock size={32} className="text-light-blue" />,
      title: "Working Hours",
      details: ["Mon - Fri: 8:30 AM - 5:30 PM", "Sat: 9:00 AM - 1:00 PM"],
      delay: 0.4,
      direction: { x: 100, y: 0 } // From right
    }
  ];

  const faqs = [
    {
      q: "How long does it take to get my custom NFC keychain?",
      a: "Standard orders take 3-5 business days for 3D printing and programming. Bulk orders may take up to 10 days."
    },
    {
      q: "Do I need an app to use the NFC products?",
      a: "No app is required! Modern smartphones have built-in NFC readers. Just tap the product to the top back of the phone."
    },
    {
      q: "Can I update the link on my keychain later?",
      a: "Yes, if you opt for our dynamic link service, you can update the destination URL anytime from your dashboard."
    },
    {
      q: "Do you ship internationally?",
      a: "Currently, we primarily serve the Ethiopian market, but we can arrange international shipping for bulk orders. Please contact us for details."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-20 overflow-hidden">
      
      {/* Parallax Hero Section */}
      <section ref={containerRef} className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }} 
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            alt="Modern Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-light-blue/20 text-light-blue font-semibold text-sm mb-6 border border-light-blue/30">
              We're Here to Help
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-blue to-emerald-400">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you have a question about our products, pricing, or want to discuss a custom enterprise solution, our team is ready to answer all your questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Directional Animated Cards Section */}
      <section className="py-24 relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: card.direction.x, y: card.direction.y }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: card.delay, type: "spring", bounce: 0.4 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{card.title}</h3>
                {card.details.map((detail, i) => (
                  <p key={i} className="text-slate-600 font-medium">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form - Slides in from left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-slate-50 rounded-[2.5rem] p-10 lg:p-14 shadow-lg border border-slate-100 relative overflow-hidden"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-light-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">Send a Message</h2>
                <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-bold text-navy">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-light-blue/50 focus:border-light-blue transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-bold text-navy">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-light-blue/50 focus:border-light-blue transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-navy">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-light-blue/50 focus:border-light-blue transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-navy">Subject</label>
                    <select 
                      id="subject" 
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-light-blue/50 focus:border-light-blue transition-all text-slate-600 appearance-none"
                    >
                      <option value="">Select a topic...</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="custom">Custom Order</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-navy">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-light-blue/50 focus:border-light-blue transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="button" 
                    className="w-full bg-navy text-white py-4 rounded-xl font-bold text-lg hover:bg-light-blue transition-colors duration-300 flex items-center justify-center gap-2 group shadow-md hover:shadow-xl"
                  >
                    Send Message
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* FAQs - Slides in from right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center h-full"
            >
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold mb-6">
                  <HelpCircle size={16} /> FAQ
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
                <p className="text-slate-600 text-lg">Find quick answers to common questions about our NFC products and services.</p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    className="bg-slate-50 rounded-2xl p-6 border border-slate-100 group hover:border-light-blue/30 transition-colors cursor-pointer"
                  >
                    <h4 className="text-lg font-bold text-navy mb-2 flex items-center justify-between">
                      {faq.q}
                      <ChevronRight size={20} className="text-light-blue group-hover:translate-x-1 transition-transform" />
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-navy rounded-3xl p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop')] opacity-20 mix-blend-overlay object-cover"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">Need immediate assistance?</h3>
                  <p className="text-slate-300 mb-6">Our support team is available on WhatsApp for quick responses.</p>
                  <a 
                    href="https://wa.me/251900000000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                  >
                    <MessageCircle size={24} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
