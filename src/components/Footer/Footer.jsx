import React from "react";
import Logo from "../../assets/Logo_gold.png";
import { FaPhone, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
 
const Footer = () => {
  const currentYear = new Date().getFullYear();
 
  return (
    <footer className="bg-gray-100 py-10 px-4 sm:px-8 lg:px-12">
      <div className="container mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info Section */}
          <div className="space-y-4 ">
            <div className="flex items-center justify-center md:justify-start">
              <img src={Logo} alt="Xwola Logo" className="w-32" loading="lazy" />
            </div>
            <p className="text-gray-700 ">
              Manikonda Jagir, Telangana-505089, India
            </p>
          </div>
 
          {/* Footer Links Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h2 className="text-lg">About Us</h2>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-black transition ">Our Story</a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition ">Contact</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-lg">Support</h2>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-black transition">FAQ's</a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transitio">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
 
          {/* Contact Section */}
          <div className="space-y-3 ">
            <h2 className="text-lg">Contact Us</h2>
            <ul className="text-gray-700 text-sm space-y-3">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <FaPhone />
                <a href="tel:+91123456789" className="hover:text-black transition">
                  +91 123456789
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <FaMessage />
                <a href="mailto:hello@xwola.tech" className="hover:text-black transition ">
                  hello@xwola.tech
                </a>
              </li>
            </ul>
          </div>
        </div>
 
        {/* Social Media Section */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" aria-label="Facebook" className="text-yellow-400 hover:text-black transition">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#" aria-label="Twitter" className="text-yellow-400 hover:text-black transition">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-yellow-400 hover:text-black transition">
            <FaLinkedin className="text-xl" />
          </a>
        </div>
 
        {/* Bottom Section */}
        <p className="text-center text-sm text-gray-600 mt-8 border-t pt-4">
          &copy; {currentYear} Xwola. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
 
export default Footer;