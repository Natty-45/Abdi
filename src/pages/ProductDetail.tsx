import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ShoppingBag, MessageCircle } from 'lucide-react';
import Contact from '../components/Contact';

const productData = {
  'smart-keychains': {
    title: "Smart NFC Keychains",
    subtitle: "Your Digital Business Card & Promotional Hub",
    description: "Custom-designed keychains that connect your physical brand to your digital presence. Perfect for influencers, real estate agents, and modern professionals.",
    heroImage: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Custom 3D printed designs with your logo",
      "Embedded high-quality NTAG215 NFC chips",
      "Laser-engraved QR code fallback for older phones",
      "Water-resistant and highly durable",
      "No monthly subscription required for basic links"
    ],
    pricing: "1,500 – 2,000 ETB",
    styles: [
      {
        name: "Minimalist Wood",
        image: "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=800&auto=format&fit=crop",
        desc: "Eco-friendly bamboo or walnut finish with laser engraving."
      },
      {
        name: "Premium Resin",
        image: "https://images.unsplash.com/photo-1565520651265-1148c3b277f4?q=80&w=800&auto=format&fit=crop",
        desc: "High-gloss, durable resin with embedded NFC and vibrant colors."
      },
      {
        name: "Matte Black Metal",
        image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?q=80&w=800&auto=format&fit=crop",
        desc: "Sleek, professional matte black finish with silver accents."
      },
      {
        name: "Custom 3D Logo",
        image: "https://images.unsplash.com/photo-1620168222156-6e1075670870?q=80&w=800&auto=format&fit=crop",
        desc: "Your exact logo 3D printed in dual-color PLA or PETG."
      }
    ]
  },
  'digital-menu-stands': {
    title: "NFC Digital Menu Stands",
    subtitle: "Modernize Your Restaurant Experience",
    description: "Elegant table stands that let customers tap or scan to view your interactive digital menu. Update prices and items instantly without reprinting.",
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Dual NFC tap and QR scan functionality",
      "Beautiful, mobile-optimized digital restaurant menu",
      "Instant updates anytime from your dashboard",
      "Eliminate reprinting costs and hygienic concerns",
      "Analytics to track which tables get the most scans"
    ],
    pricing: "3,500 – 4,000 ETB / stand",
    styles: [
      {
        name: "Acrylic Table Tent",
        image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=800&auto=format&fit=crop",
        desc: "Clear, modern acrylic stand with an embedded NFC base."
      },
      {
        name: "Wooden Block Stand",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        desc: "Rustic wooden block, perfect for cafes and artisan bakeries."
      },
      {
        name: "Metal Engraved Plaque",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
        desc: "Premium brushed steel or brass finish for high-end dining."
      },
      {
        name: "Minimalist NFC Puck",
        image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=800&auto=format&fit=crop",
        desc: "A subtle, adhesive NFC puck that sticks directly to the table."
      }
    ]
  }
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? productData[id as keyof typeof productData] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 pt-24">
        <h1 className="text-4xl font-bold text-navy mb-4">Product Not Found</h1>
        <Link to="/" className="text-light-blue hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-navy transition-colors mb-8 font-medium">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 mb-16">
          <div className="grid lg:grid-cols-2">
            <div className="h-[400px] lg:h-auto relative">
              <img 
                src={product.heroImage} 
                alt={product.title} 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent lg:hidden"></div>
            </div>
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-blue/10 text-light-blue text-sm font-bold mb-6">
                  {product.pricing}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">{product.title}</h1>
                <p className="text-xl text-light-blue font-medium mb-6">{product.subtitle}</p>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{product.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-light-blue transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <ShoppingBag size={20} />
                    Order Now
                  </Link>
                  <a href="https://wa.me/251900000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] px-8 py-4 rounded-xl font-bold hover:bg-[#25D366] hover:text-white transition-all duration-300">
                    <MessageCircle size={20} />
                    Ask a Question
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features & Details */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-navy mb-6">Key Features</h2>
            <ul className="space-y-4">
              {product.features.map((feature, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100"
                >
                  <CheckCircle2 size={24} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-navy mb-6">Available Styles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {product.styles.map((style, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative h-[400px] rounded-3xl overflow-hidden shadow-md border border-slate-100 group cursor-pointer"
                >
                  <img 
                    src={style.image} 
                    alt={style.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Gradient overlay that fades in on hover to make text readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Text content that slides up and fades in on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">{style.name}</h3>
                    <p className="text-slate-200 text-sm leading-relaxed">{style.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
      
      {/* Contact Section */}
      <Contact />
    </main>
  );
}
