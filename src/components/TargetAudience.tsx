import { motion } from 'motion/react';
import { Camera, Store, Coffee, CalendarHeart } from 'lucide-react';

export default function TargetAudience() {
  const audiences = [
    {
      icon: <Camera size={28} />,
      title: "Influencers",
      description: "Share your social links, portfolios, and latest content with a single tap.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Store size={28} />,
      title: "Small Businesses",
      description: "Connect customers to your online store, promotions, and contact info instantly.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Coffee size={28} />,
      title: "Restaurants & Cafes",
      description: "Provide hygienic, easily updatable digital menus right at the table.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <CalendarHeart size={28} />,
      title: "Event Organizers",
      description: "Share event schedules, speaker info, and networking details seamlessly.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Who It's For</h2>
            <p className="text-slate-600 text-lg">Versatile solutions designed for anyone looking to bridge the physical and digital gap.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-14 h-14 rounded-2xl glass-dark flex items-center justify-center mb-6 text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 transform transition-transform duration-300 group-hover:-translate-y-2">{item.title}</h3>
                <p className="text-slate-200 text-sm leading-relaxed opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
