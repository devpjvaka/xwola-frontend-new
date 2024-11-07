import React, { useState } from "react";
import Logo from "../../assets/Logo_gold.png";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavLinks = [
  { id: 1, title: "Home", link: "/home" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Services", link: "/services" },
  { id: 4, title: "Industries", link: "/industries" },
  { id: 5, title: "Contact us", link: "/contactus" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 shadow-sm bg-white">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        {/* Logo section */}
        <Link to="/">
          <img src={Logo} alt="logo" className="w-40" />
        </Link>

        {/* Desktop Links Section */}
        <div className="hidden lg:flex space-x-6 ">
          {NavLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.link}
              className={({ isActive }) =>
                `text-md lg:text-xl  ${
                  isActive ? "underline decoration-yellow-500" : ""
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Link
          to="/contactus"
          className="hidden lg:block primary-btn"
        >
          Get In touch
        </Link>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white bg-yellow-500 rounded focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Links Section */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4">
          {NavLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.link}
              className={({ isActive }) =>
                `block py-2 text-md  ${
                  isActive ? "underline decoration-yellow-500" : ""
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
          <div className="mt-4">
            <Link
              to="/contactus"
              className="primary-btn w-full  text-base px-4 py-2 sm:text-lg sm:px-6 sm:py-3" // Adjusts for mobile
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
