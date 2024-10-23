import React, { useState } from "react";
import Logo from "../../assets/Logo_gold.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { NavLink } from "react-router-dom"; // Use NavLink for active styling
import { motion } from "framer-motion";

const NavLinks = [
  {
    id: 1,
    title: "About",
    link: "/about", // Update to match the route for the About page
  },
  {
    id: 2,
    title: "Services",
    link: "/services",
  },
  {
    id: 3,
    title: "Industries",
    link: "/industries",
  },
  {
    id: 4,
    title: "Contact us",
    link: "/contactus",
  },
];

const Navbar = () => {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo section */}
        <Link to="/">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="w-[10rem]" />
          </div>
        </Link>

        {/* Desktop Link section */}
        <div className="hidden md:flex">
          {NavLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.link}
              className={({ isActive }) =>
                isActive
                  ? "mx-4 md:text-md lg:text-lg font-semibold underline decoration-line decoration-2 decoration-yellow-500 underline-offset-4"
                  : "mx-4 md:text-md lg:text-lg font-semibold"
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        {/* Button section for Desktop */}
        <div className="hidden md:block">
        <Link to="/contactus" className="primary-btn w-full">Get In touch</Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-lg p-2 bg-yellow-500 text-white rounded"
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </motion.div>

      {/* Mobile Link section */}
      {isMobileMenuOpen && (
        <div className="flex flex-col md:hidden bg-white shadow-md p-4">
          {NavLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.link}
              className={({ isActive }) =>
                isActive
                  ? "py-2 text-md font-semibold underline decoration-line decoration-2 decoration-yellow-500 underline-offset-4"
                  : "py-2 text-md font-semibold"
              }
            >
              {link.title}
            </NavLink>
          ))}
          {/* Button section for Mobile */}
          <div className="mt-4">
          <Link to="/contactus" className="primary-btn w-full">Get In touch</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;