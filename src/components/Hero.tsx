import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play, Nfc, Smartphone } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-light-blue/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-navy/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl z-10"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-light-blue text-sm font-medium mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-light-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-light-blue"></span>
              </span>
              Next-Gen Smart NFC Solutions
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold text-navy leading-[1.1] tracking-tight mb-6">
              Turn Physical Products into <span className="text-gradient">Digital Experiences</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Smart NFC keychains and digital menus that connect customers instantly. No apps required, just a simple tap to grow your business.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-medium hover:bg-light-blue transition-all duration-300 hover:shadow-lg hover:shadow-light-blue/30 hover:-translate-y-1"
              >
                Explore Products
                <ArrowRight size={18} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all duration-300 hover:shadow-md"
              >
                <Play size={18} className="text-light-blue fill-light-blue/20" />
                See How It Works
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            style={{ y: yParallax }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer"
          >
            {/* Main Video */}
            <video 
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              poster="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=2000&auto=format&fit=crop"
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover animate-ken-burns group-hover:animate-none group-hover:scale-105 transition-transform duration-700"
              onMouseEnter={(e) => {
                const video = e.currentTarget;
                video.play().catch(() => {});
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget;
                video.pause();
              }}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent pointer-events-none"></div>

            {/* Floating Elements */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-end">
                <div className="glass px-4 py-2 rounded-full flex items-center gap-2 animate-float">
                  <Nfc size={16} className="text-light-blue" />
                  <span className="text-sm font-bold text-navy">Tap Detected</span>
                </div>
              </div>

              <div className="glass p-6 rounded-3xl max-w-xs animate-float-delayed">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-light-blue/20 flex items-center justify-center">
                    <Smartphone size={24} className="text-light-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Instant Connection</p>
                    <p className="text-navy font-bold">Digital Menu Opened</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    className="h-full bg-light-blue rounded-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Center Play Button Overlay (Simulating Video) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 transform scale-100 group-hover:scale-90 transition-transform duration-300">
                <Play size={32} className="text-white fill-white translate-x-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
