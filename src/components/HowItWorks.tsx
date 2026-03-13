import { motion } from 'motion/react';
import { SmartphoneNfc, Globe, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <SmartphoneNfc size={36} />,
      title: "Tap / Scan",
      description: "Your customer simply taps their phone on the NFC product or scans the QR code.",
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      icon: <Globe size={36} />,
      title: "Open Digital Hub",
      description: "Instantly opens your custom digital page with links, promos, or interactive menus.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100"
    },
    {
      icon: <TrendingUp size={36} />,
      title: "Grow Your Business",
      description: "Drive engagement, increase followers, and boost sales with smart marketing.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">How It Works</h2>
            <p className="text-slate-600 text-lg">Three simple steps to bridge the physical and digital world.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop with animation */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-slate-100 -translate-y-1/2 z-0 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-light-blue via-indigo-400 to-emerald-400"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="relative z-10 flex flex-col items-center text-center bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 font-bold text-xl shadow-sm">
                {index + 1}
              </div>
              <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-8 ${step.color} border shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
