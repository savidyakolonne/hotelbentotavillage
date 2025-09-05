import React from "react";
import logo from "/logohbv.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left - Logo + About */}
        <div className="md:w-1/3">
          <div className="flex items-center gap-3 mb-4 ">
            <img src={logo} alt="Hotel Logo" className="w-50 h-50 object-contain" />
            
          </div>
          {/* <p className="text-sm leading-relaxed">
            Experience luxury and comfort by the beach.  
            Proudly serving our guests with the warmth of Sri Lanka. 🌴
          </p> */}
        </div>

        {/* Middle - Navigation */}
        <div className="md:w-1/3 flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Rooms</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm">📍 Bentota, Sri Lanka</p>
          <p className="text-sm">📞 +94 77 123 4567</p>
          <p className="text-sm">✉️ info@hotelhbv.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition">🌐</a>
            <a href="#" className="hover:text-white transition">🐦</a>
            <a href="#" className="hover:text-white transition">📸</a>
            <a href="#" className="hover:text-white transition">👍</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hotel Bentota Village. All rights reserved. Developed <a href="https://www.inlax.site/">iNLAX</a>
      </div>
    </footer>
  );
};

export default Footer;
