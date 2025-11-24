import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-black border-t border-white/10 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand / Copyright */}
        <div className="flex flex-col gap-2">
          <div className="text-xs w-16 h-16 rounded-full object-cover font-bold tracking-tighter text-white">
            <img src="/src/assets/image/iGEAR Logo.png" alt="iGEAR Logo" />
          </div>
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} iGear. All rights reserved.
          </p>
        </div>

        {/* Legal Links (Required for Ads) */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Earnings Disclaimer</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;