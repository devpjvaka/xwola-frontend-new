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
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-10 py-4 flex justify-between items-center mt-4"
      >
        {/* Logo section */}
        <Link to="/">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="w-[10rem]" />
          </div>
        </Link>

        {/* Desktop Links Section (only visible on large screens) */}
        <div className="hidden lg:flex">
          {NavLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.link}
              className={({ isActive }) =>
                isActive
                  ? "mx-4 md:text-md lg:text-lg font-handwritting underline decoration-yellow-500"
                  : "mx-4 md:text-md lg:text-lg font-handwritting"
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        {/* Contact Button for Desktop (only visible on large screens) */}
        <div className="hidden lg:block">
          <Link
            to="/contactus"
            className="primary-btn w-full font-handwritting uppercase"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile menu button (visible on medium and smaller screens) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-lg p-2 bg-yellow-500 text-white rounded"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Link section (only visible on medium and smaller screens) */}
      {isMobileMenuOpen && (
        <div className="flex flex-col lg:hidden bg-white shadow-md p-4">
          {NavLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.link}
              className={({ isActive }) =>
                isActive
                  ? "py-2 text-md font-handwritting underline decoration-yellow-500"
                  : "py-2 text-md font-handwritting"
              }
            >
              {link.title}
            </NavLink>
          ))}
          {/* Button section for Mobile */}
          <div className="mt-4">
            <Link
              to="/contactus"
              className="primary-btn w-full font-handwritting"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
