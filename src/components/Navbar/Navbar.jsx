import React from "react";
import Logo from "../../assets/Logo_gold.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { NavLink } from "react-router-dom"; // Use NavLink for active styling
// import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
 
const NavLinks = [
  {
    id: 1,
    title: "About",
    link: "/about", // Update to match the route for the About page
  },
  {
    id: 1,
    title: "Services",
    link: "/services",
  },
  {
    id: 1,
    title: "Industries",
    link: "/industries",
  },
  {
    id: 1,
    title: "Contact us",
    link: "/contactus",
  },
];
 
const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-4 flex
      justify-between items-center"
      >
        {/* Logo section */}
        <Link to="/">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="w-[10rem]" />
          </div>
        </Link>
 
        {/* Link section */}
        <div className="hidden md:block">
          {NavLinks.map((link) => {
            return (
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
            );
          })}
        </div>
 
        {/* Button section */}
        <div>
          <button className="primary-btn">Get In touch</button>
        </div>
      </motion.div>
    </>
  );
};
 
export default Navbar;
 