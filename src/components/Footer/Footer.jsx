import React from "react";
import Logo from "../../assets/Logo_gold.png";
import { FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="" className="w-[8rem]" />
            </div>
            <p>Manikonda Jagir, Telangana-505089, India</p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold"> About us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold"> Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact section */}

          <div className="space-y-4">
            <h1 className="text-xl font-semibold"> Contact us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <span>
                  <FaPhone />
                </span>
                <a href="#"> +91 123456789 </a>
              </li>
              <li className="flex items-center space-x-3">
                <span>
                  <FaMessage />
                </span>
                <a href="#"> hello@xwola.tech </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom section */}
        <p className="text-center text-sm font-semibold border-t-2 pt-5 mt-10">
          &copy; 2024 Xwola All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
