import React from 'react';
import { Instagram, Youtube, Mail, ArrowUpRight } from 'lucide-react';
import logo from '../assets/image/iGEAR Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020202] border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      
      {/* Background Ambience (Subtle) */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#2E86AB]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* COLUMN 1: BRAND & LOGO */}
            <div className="flex flex-col items-start gap-6">
                {/* Logo Placeholder */}
                <div className="flex items-center gap-2">
                    {/* Replace with your actual Logo Image */}
                    <img src={logo} alt="iGear Logo" width={50}/>
                    <span className="text-2xl font-bold text-white tracking-tight">
                        iGear
                    </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    Turning expertise into authority. We build high-converting YouTube channels for service-based businesses.
                </p>
            </div>

            {/* COLUMN 2: QUICK LINKS */}
            <div className="flex flex-col gap-6">
                <h5 className="text-white font-bold uppercase tracking-widest text-sm">Legal</h5>
                <ul className="space-y-4">
                    <li>
                        <a href="#" className="text-gray-400 hover:text-[#F79F1A] transition-colors flex items-center gap-2 group">
                            Privacy Policy
                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-[#F79F1A] transition-colors flex items-center gap-2 group">
                            Terms of Service
                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                        </a>
                    </li>
                </ul>
            </div>

            {/* COLUMN 3: SOCIALS */}
            <div className="flex flex-col gap-6">
                <h5 className="text-white font-bold uppercase tracking-widest text-sm">Connect</h5>
                <div className="flex gap-4">
                    
                    {/* Instagram */}
                    <SocialLink href="https://www.instagram.com/igear.vfxedit?igsh=MWF1MDdpZDc3MW5yMA%3D%3D&utm_source=qr" target="_blank" icon={<Instagram size={20} />} label="Instagram" />
                    
                    {/* YouTube */}
                    <SocialLink href="https://youtube.com/@igearmedia?si=vmdd6Wdl_lY05ga7" target="_blank" icon={<Youtube size={20} />} label="YouTube" />
                    
                    {/* Mail */}
                    <SocialLink href="mailto:igearenterprises@gmail.com" target="_blank" icon={<Mail size={20} />} label="Email" />
                
                </div>
                
            </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-600 text-sm">
                &copy; {currentYear} iGear. All rights reserved.
            </p>
            
        </div>

      </div>
    </footer>
  );
};

// --- SUB-COMPONENT: SOCIAL LINK ---
function SocialLink({ href, icon, label }) {
    return (
        <a 
            href={href} 
            aria-label={label}
            className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-amber-600 hover:border-amber-600 hover:shadow-[0_0_20px_rgba(46,134,171,0.4)] transition-all duration-300 group"
        >
            <div className="group-hover:scale-110 transition-transform">
                {icon}
            </div>
        </a>
    );
}

export default Footer;