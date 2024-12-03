import React, { useState } from "react";
import Logo from "../../assets/Logo_gold.png";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const NavLinks = [
  { id: 1, title: "Home", link: "/home", subMenu: [] },
  {
    id: 2,
    title: "About",
    link: "/about",
    subMenu: ["Our Story", "Mission", "Team","Our Story", "Mission", "Team","Our Story", "Mission", "Team"],
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
    subMenu: ["Web Development", "App Development", "SEO","Web Development", "App Development", "SEO","Web Development", "App Development", "SEO"],
  },
  {
    id: 4,
    title: "Industries",
    link: "/industries",
    subMenu: ["Healthcare", "Finance", "Education","Healthcare", "Finance", "Education","Healthcare", "Finance", "Education"],
  },
  { id: 5, title: "Contact", link: "/contactus", subMenu: [] },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 border-b border-gray-200 shadow-sm bg-white">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="logo" className="w-40" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6">
          {NavLinks.map((link) => (
            <div key={link.id} className="relative flex items-center ">
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  `text-md lg:text-[17px] font-bold  flex items-center ${
                    isActive ? "underline decoration-yellow-500 underline-offset-8" : ""
                  }`
                }
              >
                {link.title}
              </NavLink>
              {link.subMenu.length > 0 && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown(link.id);
                  }}
                  className="ml-1 focus:outline-none "
                  aria-label="Toggle dropdown menu"
                >
                  {activeDropdown === link.id ? (
                    <ChevronUpIcon className="h-4 w-4 " />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4 " />
                  )}
                </button>
              )}

              {activeDropdown === link.id && (
                <div className="absolute top-full left-0 mt-6 bg-white shadow-lg z-40 p-4 grid grid-cols-3 gap-x-4 gap-y-2"
                   style={{ minWidth: "400px", maxWidth: "900px" }}
                   >
                  {link.subMenu.map((item, index) => (
                    <Link
                      key={index}
                      to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <Link to="/contactus" className="hidden lg:block primary-btn">
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white bg-yellow-500 rounded focus:outline-none"
          >
            {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4">
          {NavLinks.map((link) => (
            <div key={link.id} className="mb-2">
              <div className="flex justify-between items-center">
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `block py-2 text-md ${
                      isActive ? "underline decoration-yellow-500" : ""
                    }`
                  }
                >
                  {link.title}
                </NavLink>
                {link.subMenu.length > 0 && (
                  <button
                    onClick={() => toggleDropdown(link.id)}
                    className="focus:outline-none"
                  >
                    {activeDropdown === link.id ? (
                      <ChevronUpIcon className="h-4 w-4" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4" />
                    )}
                  </button>
                )}
              </div>
              {activeDropdown === link.id && (
                <div className="ml-4 bg-gray-100 mt-2 p-2 rounded">
                  {link.subMenu.map((item, index) => (
                    <Link
                      key={index}
                      to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="block py-1 text-sm"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4">
            <Link to="/contactus" className="primary-btn w-full text-base px-4 py-2 sm:text-lg sm:px-6 sm:py-3">
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
// import React, { useState } from "react";
// import Logo from "../../assets/Logo_gold.png";
// import { Link, NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
// const NavLinks = [
//   { id: 1, title: "Home", link: "/home" },
//   { id: 2, title: "About", link: "/about" },
//   { id: 3, title: "Services", link: "/services" },
//   { id: 4, title: "Industries", link: "/industries" },
//   { id: 5, title: "Contact us", link: "/contactus" },
// ];
 
// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
 
//   return (
//     <nav className="w-full border-b border-gray-200 shadow-sm bg-white">
//       <motion.div
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto px-4 py-4 flex justify-between items-center"
//       >
//         {/* Logo section */}
//         <Link to="/">
//           <img src={Logo} alt="logo" className="w-40" />
//         </Link>
 
//         {/* Desktop Links Section with Megamenu */}
//         <div className="hidden lg:flex space-x-6 relative">
//           {NavLinks.map((link) => (
//             <div key={link.id} className="group">
//               <NavLink
//                 to={link.link}
//                 className={({ isActive }) =>
//                   `text-md lg:text-xl ${
//                     isActive ? "underline decoration-yellow-500" : ""
//                   }`
//                 }
//               >
//                 {link.title}
//               </NavLink>
//             </div>
//           ))}
//         </div>
 
//         {/* Desktop Contact Button */}
//         <Link to="/contactus" className="hidden lg:block primary-btn">
//           Get In touch
//         </Link>
 
//         {/* Mobile menu button */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//             className="p-2 text-white bg-yellow-500 rounded focus:outline-none"
//           >
//             {isMobileMenuOpen ? (
//               <XMarkIcon className="h-6 w-6" />
//             ) : (
//               <Bars3Icon className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//       </motion.div>
 
//       {/* Mobile Links Section */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-white shadow-md p-4">
//           {NavLinks.map((link) => (
//             <NavLink
//               key={link.id}
//               to={link.link}
//               className={({ isActive }) =>
//                 `block py-2 text-md ${
//                   isActive ? "underline decoration-yellow-500" : ""
//                 }`
//               }
//             >
//               {link.title}
//             </NavLink>
//           ))}
//           <div className="mt-4">
//             <Link
//               to="/contactus"
//               className="primary-btn w-full text-base px-4 py-2 sm:text-lg sm:px-6 sm:py-3" // Adjusts for mobile
//             >
//               Get in touch
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };
 
// export default Navbar;
 
 