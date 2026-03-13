import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Key, Utensils, PlayCircle } from 'lucide-react';

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const products = [
    {
      id: "smart-keychains",
      icon: <Key size={28} className="text-light-blue" />,
      title: "Smart NFC Keychains",
      description: "Custom-designed keychains that act as your digital business card or promotional hub.",
      features: [
        "Custom 3D printed designs",
        "Logos, initials, cultural motifs",
        "NFC + QR code support",
        "Opens social media, promo page, or shop"
      ],
      pricing: "1,500 – 2,000 ETB",
      premium: "Premium influencer edition available with resin finish.",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      poster: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "digital-menu-stands",
      icon: <Utensils size={28} className="text-light-blue" />,
      title: "NFC Digital Menu Stands",
      description: "Modernize your restaurant experience with tap-to-view digital menus.",
      features: [
        "NFC tap or QR scan functionality",
        "Beautiful digital restaurant menu",
        "Instant updates anytime",
        "Eliminate reprinting costs"
      ],
      pricing: "3,500 – 4,000 ETB / stand",
      subscription: "1,000 ETB / month for menu hosting & updates",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      poster: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-24 bg-slate-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Products</h2>
            <p className="text-slate-600 text-lg">Innovative solutions tailored for modern businesses and creators.</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ y: yParallax }}
            >
              <Link 
                to={`/product/${product.id}`}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500 group block"
              >
                <div className="h-72 overflow-hidden relative cursor-pointer">
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors duration-500 z-10 pointer-events-none"></div>
                  
                  <video 
                    src={product.video}
                    poster={product.poster}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onMouseEnter={(e) => {
                      const video = e.currentTarget;
                      video.play().catch(() => {
                        // Ignore autoplay errors
                      });
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget;
                      video.pause();
                    }}
                  />

                  <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-sm pointer-events-none">
                    {product.icon}
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 transform scale-100 group-hover:scale-90 transition-transform duration-300">
                      <PlayCircle size={32} className="text-white fill-white/20" />
                    </div>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-navy mb-4 group-hover:text-light-blue transition-colors">{product.title}</h3>
                  <p className="text-slate-600 mb-8 text-lg">{product.description}</p>
                  
                  <ul className="space-y-4 mb-10 flex-grow">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={22} className="text-light-blue shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-auto group-hover:bg-light-blue/5 transition-colors duration-300">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl font-bold text-navy">{product.pricing}</span>
                    </div>
                    {product.premium && (
                      <p className="text-sm text-slate-600 flex items-center gap-2 font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        {product.premium}
                      </p>
                    )}
                    {product.subscription && (
                      <p className="text-sm text-slate-600 flex items-center gap-2 font-medium">
                        <span className="w-2 h-2 rounded-full bg-light-blue"></span>
                        {product.subscription}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
