import { motion } from 'motion/react';
import { Zap, PiggyBank, RefreshCw, BarChart3, ThumbsUp } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <ThumbsUp size={24} />,
      title: "Modern Customer Experience",
      description: "Impress your clients with cutting-edge, frictionless technology that shows your brand is forward-thinking."
    },
    {
      icon: <PiggyBank size={24} />,
      title: "No Printing Costs",
      description: "Stop wasting money on reprinting menus, business cards, or promotional flyers every time something changes."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Instant Updates",
      description: "Change your links, menu items, or contact info anytime from our dashboard without changing the physical product."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Smart Marketing",
      description: "Track taps, analyze customer engagement, and understand which products or tables get the most interaction."
    },
    {
      icon: <Zap size={24} />,
      title: "Easy to Use",
      description: "No apps required. Works natively with all modern iOS and Android devices instantly upon tapping."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-navy text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-light-blue/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Why Choose Smart <span className="text-light-blue">NFC Solutions?</span></h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-md">
                Upgrade your business operations and marketing strategy with technology that works seamlessly for you and your customers.
              </p>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Customer using smartphone at a cafe" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 glass-dark p-4 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-light-blue flex items-center justify-center shrink-0">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Instant Engagement</p>
                    <p className="text-slate-300 text-sm">Zero friction for your customers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scrolling Right Column */}
          <div className="flex flex-col gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-light-blue/20 text-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
