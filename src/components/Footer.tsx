import { Nfc, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white pt-24 pb-8 mt-12 rounded-t-[3rem] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-light-blue/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-light-blue text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-light-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-light-blue"></span>
              </span>
              Available Worldwide
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-blue to-blue-400">connect?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-md">
              Join the next generation of physical-to-digital experiences.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="group inline-flex items-center justify-center gap-3 bg-white text-navy px-8 py-5 rounded-full font-bold hover:bg-light-blue hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]"
          >
            Start Your Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-y border-white/10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="bg-light-blue text-white p-2.5 rounded-xl group-hover:scale-110 transition-transform">
                <Nfc size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">TapFlow</span>
            </Link>
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-light-blue hover:text-white hover:border-light-blue transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-light-blue hover:text-white hover:border-light-blue transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-light-blue hover:text-white hover:border-light-blue transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Products</h4>
            <ul className="space-y-4">
              <li><Link to="/product/smart-keychains" className="text-slate-400 hover:text-light-blue transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-light-blue transition-all duration-300"></span>Smart Keychains</Link></li>
              <li><Link to="/product/digital-menu-stands" className="text-slate-400 hover:text-light-blue transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-light-blue transition-all duration-300"></span>Digital Menu Stands</Link></li>
              <li><a href="/#products" className="text-slate-400 hover:text-light-blue transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-light-blue transition-all duration-300"></span>Custom Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              <li><a href="/#how-it-works" className="text-slate-400 hover:text-light-blue transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-light-blue transition-all duration-300"></span>How it Works</a></li>
              <li><a href="/#benefits" className="text-slate-400 hover:text-light-blue transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-light-blue transition-all duration-300"></span>Benefits</a></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-light-blue transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-light-blue transition-all duration-300"></span>Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-light-blue transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-light-blue transition-all duration-300"></span>Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-light-blue transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-light-blue transition-all duration-300"></span>Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-light-blue transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-light-blue transition-all duration-300"></span>Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Massive Typography Bottom */}
        <div className="pt-12 flex flex-col items-center overflow-hidden">
          <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter text-white/[0.03] select-none text-center w-full">
            TAPFLOW
          </h1>
          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 text-slate-500 text-sm gap-4">
            <p>© {new Date().getFullYear()} TapFlow Digital Solutions. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Designed with <span className="text-light-blue">♥</span> for the future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
