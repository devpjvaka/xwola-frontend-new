// import React, { useState, useEffect, useRef } from "react";
// import Logo from "../../assets/Logo_gold.png";
// import { Link, NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Bars3Icon,
//   XMarkIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
// } from "@heroicons/react/24/outline";

// const NavLinks = [
//   { id: 1, title: "Home", link: "/home" },
//   {
//     id: 2,
//     title: "About",
//     link: "/about",
//   },
//   {
//     id: 3,
//     title: "Services",
//     link: "/services",
//     submenu: [
//       { id: "3-1", title: "Web Development", link: "/services/web" },
//       { id: "3-2", title: "Mobile Development", link: "/services/mobile" },
//     ],
//   },
//   {
//     id: 4,
//     title: "Industries",
//     link: "/industries",
//     submenu: [
//       { id: "4-1", title: "Telecommunication", link: "/telicommunications" },
//       { id: "4-2", title: "Retail", link: "/retail" },
//       { id: "4-3", title: "Events & Hospitality", link: "/events&hospitality" },
//     ],
//   },
//   { id: 5, title: "Contact", link: "/contactus" },
// ];

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openMenuId, setOpenMenuId] = useState(null);
//   const [isDesktopView, setIsDesktopView] = useState(true);
//   const megaMenuRef = useRef(null);

//   const toggleMenu = (id) => {
//     setOpenMenuId((prev) => (prev === id ? null : id));
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktopView(window.innerWidth >= 1024);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         megaMenuRef.current &&
//         !megaMenuRef.current.contains(event.target)
//       ) {
//         setOpenMenuId(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="w-full border-b border-gray-200 shadow-sm bg-white">
//       <motion.div
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto px-4 py-4 flex justify-between items-center"
//       >
//         {/* Logo */}
//         <Link to="/">
//           <img src={Logo} alt="logo" className="w-40" />
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden lg:flex space-x-6 items-center">
//           {NavLinks.map((link) => (
//             <div
//               key={link.id}
//               className="relative flex items-center"
//               onMouseEnter={() => link.submenu && setOpenMenuId(link.id)}
//               onMouseLeave={() =>
//                 link.submenu && openMenuId !== link.id && setOpenMenuId(null)
//               }
//             >
//               <NavLink
//                 to={link.link}
//                 className={({ isActive }) =>
//                   `text-md lg:text-xl ${isActive ? "underline decoration-yellow-500" : ""
//                   }`
//                 }
//               >
//                 {link.title}
//               </NavLink>
//               {link.submenu && (
//                 <div className="relative">
//                   <button
//                     onClick={() => toggleMenu(link.id)}
//                     className="ml-2 focus:outline-none"
//                   >
//                     {openMenuId === link.id ? (
//                       <ChevronUpIcon className="w-5 h-5 text-gray-600 hover:text-yellow-500 transition duration-200" />
//                     ) : (
//                       <ChevronDownIcon className="w-5 h-5 text-gray-600 hover:text-yellow-500 transition duration-200" />
//                     )}
//                   </button>

//                   {/* Submenu */}
//                   {openMenuId === link.id && (
//                     <div
//                       className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg border border-gray-200 rounded-md mt-2 z-50"
//                       style={{ minWidth: "1200px" }}
//                     >
//                       {link.submenu.map((submenu) => (
//                         <NavLink
//                           key={submenu.id}
//                           to={submenu.link}
//                           className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-yellow-500 transition"
//                         >
//                           {submenu.title}
//                         </NavLink>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               )}

//             </div>
//           ))}
//         </div>

//         {/* Desktop Contact Button */}
//         <Link to="/contactus" className="hidden lg:block primary-btn">
//           Get In touch
//         </Link>

//         {/* Mobile Menu Button */}
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

//       {/* Mega Menu */}
//   {isDesktopView &&
//     openMenuId &&
//     NavLinks.find((link) => link.id === openMenuId)?.submenu && (
//       <div
//         ref={megaMenuRef}
//         className={`absolute top-full left-0 bg-white shadow-lg z-50`}
//         onMouseEnter={() => setOpenMenuId(openMenuId)}
//         onMouseLeave={() => setOpenMenuId(null)}
//         style={{
//           minWidth: "200px", // Adjust as needed for submenu width
//           left: "50%", // Position submenu horizontally relative to the parent
//           transform: "translateX(-50%)", // Center-align submenu under its parent
//         }}
//       >
//         <div
//           className={`container mx-auto ${openMenuId === 4
//             ? "flex flex-col items-start space-y-4 pl-4"
//             : "grid grid-cols-1 gap-6"
//             }`}
//         >
//           {NavLinks.find((link) => link.id === openMenuId).submenu.map(
//             (submenu) => (
//               <div
//                 key={submenu.id}
//                 className={`${openMenuId === 4 ? "w-full text-left" : ""
//                   }`}
//               >
//                 <Link
//                   to={submenu.link}
//                   className="block text-lg hover:underline"
//                 >
//                   {submenu.title}
//                 </Link>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     )}
// </nav>
//   );
// };

// export default Navbar;



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



// import React from 'react';
// import Logo from "../../assets/Logo_gold.png";

// const Navbar = () => {
//   return (
//     <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
//       <div className="flex flex-wrap Store-center relative w-full">
//         <a href="#">
//           <img
//             src= {Logo}
//             alt="logo"
//             className="w-36"
//           />
//         </a>

//         <div
//           id="collapseMenu"
//           className="max-lg:hidden lg:!flex lg:items-center lg:justify-between lg:gap-y-4 lg:gap-x-10 lg:px-10 lg:py-2 max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
//         >
//           <button
//             id="toggleClose"
//             className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-4 fill-black"
//               viewBox="0 0 320.591 320.591"
//             >
//               <path
//                 d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
//                 data-original="#000000"
//               ></path>
//               <path
//                 d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
//                 data-original="#000000"
//               ></path>
//             </svg>
//           </button>

//           <ul className="lg:!flex lg:gap-x-10 lg:ml-24 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
//             <li className="mb-6 hidden max-lg:block">
//               <a href="#">
//                 <img
//                   src="https://readymadeui.com/readymadeui.svg"
//                   alt="logo"
//                   className="w-36"
//                 />
//               </a>
//             </li>
//             <li className="group max-lg:border-b max-lg:py-2">
//               <a
//                 href="#"
//                 className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block"
//               >
//                  Industries
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16px"
//                   height="16px"
//                   className="ml-1 inline-block"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
//                     data-name="16"
//                     data-original="#000000"
//                   />
//                 </svg>
//               </a>
//               {/* Dropdown menu */}
//               <div className="absolute group-hover:grid shadow-lg bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16 gap-8 px-6 pb-4 py-4 lg:top-14 top-28 left-0 w-max z-50">
//                 <ul className="space-y-3">
//                   <li className="text-[#077bff] text-base font-semibold px-2">
//                     Industries
//                   </li>
//                   <li className="hover:bg-gray-100">
//                     <a
//                       href="#"
//                       className="px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block"
//                     >
//                       {/* Add SVG and text */}
//                     </a>
//                   </li>
//                   {/* Add more menu items */}
//                 </ul>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Navbar;
import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/Logo_gold.png";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CpuChipIcon,
  MagnifyingGlassIcon, 
  CodeBracketIcon,
  WrenchIcon,
  PhoneIcon,
  ShoppingCartIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const NavLinks = [
  { id: 1, title: "Home", link: "/home" },
  { id: 2, title: "About", link: "/about" },
  {
    id: 3,
    title: "Services",
    link: "/services",
    submenu: [
      { id: "3-1", title: "Software Development", link: "/softwaredevelopment", icon: CodeBracketIcon },
      { id: "3-2", title: "Artificial Intelligence", link: "/ai", icon: CpuChipIcon },
      { id: "3-3", title: "Search Engine Optimization", link: "/seo", icon: MagnifyingGlassIcon },
      { id: "3-4", title: "Support & Maintenance", link: "/supportmaintanace", icon: WrenchIcon },
    ],
  },
  {
    id: 4,
    title: "Industries",
    link: "/industries",
    submenu: [
      { id: "4-1", title: "Telecommunication", link: "/telicommunications", icon: PhoneIcon },
      { id: "4-2", title: "Retail", link: "/retail", icon: ShoppingCartIcon },
      { id: "4-3", title: "Events & Hospitality", link: "/events&hospitality", icon: CalendarDaysIcon },
    ],
  },
  { id: 5, title: "Contact", link: "/contactus" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [isDesktopView, setIsDesktopView] = useState(true);
  const megaMenuRef = useRef(null);

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setOpenMenuId(null);
        if (!isDesktopView) setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDesktopView]);

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
        {isDesktopView && (
          <div className="hidden lg:flex space-x-8 items-center">
            {NavLinks.map((link) => (
              <div
                key={link.id}
                className="relative flex items-center"
                onMouseEnter={() => link.submenu && setOpenMenuId(link.id)}
                onMouseLeave={() => link.submenu && openMenuId !== link.id && setOpenMenuId(null)}
              >
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `text-md lg:text-xl ${isActive ? "underline decoration-yellow-500" : ""}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </NavLink>
                {link.submenu && (
                  <>
                    <button className="ml-2 focus:outline-none">
                      {openMenuId === link.id ? (
                        <ChevronUpIcon className="w-5 h-5 text-gray-600 hover:text-yellow-500 transition duration-200" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-600 hover:text-yellow-500 transition duration-200" />
                      )}
                    </button>
                    {openMenuId === link.id && (
                      <motion.div
                        ref={megaMenuRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-[300px] mt-2 bg-white shadow-lg rounded-md py-4 z-50"
                      >
                        <div className="flex flex-col items-start gap-4 p-4">
                          {link.submenu.map((submenu) => (
                            <Link
                              key={submenu.id}
                              to={submenu.link}
                              className="flex items-center gap-2 text-lg text-gray-800 hover:underline"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenMenuId(null); // Close submenu
                              }}
                            >
                              <submenu.icon className="w-5 h-5 text-yellow-500" />
                              {submenu.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Mobile Menu */}
        {!isDesktopView && (
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white bg-yellow-500 rounded focus:outline-none"
            >
              {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md py-4 z-50">
                <div className="flex flex-col items-start gap-4 px-4">
                  {NavLinks.map((link) => (
                    <div key={link.id} className="w-full">
                      <div className="flex items-center justify-between">
                        <NavLink
                          to={link.link}
                          className={({ isActive }) =>
                            `text-lg text-gray-800 hover:underline ${isActive ? "font-bold text-yellow-500" : ""
                            }`
                          }
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.title}
                        </NavLink>
                        {link.submenu && (
                          <button
                            onClick={() => toggleMenu(link.id)}
                            className="flex items-center ml-2 text-gray-600"
                          >
                            {openMenuId === link.id ? (
                              <ChevronUpIcon className="w-5 h-5" />
                            ) : (
                              <ChevronDownIcon className="w-5 h-5" />
                            )}
                          </button>
                        )}
                      </div>
                      {/* Submenu Links */}
                      {link.submenu && openMenuId === link.id && (
                        <div className="flex flex-col gap-2 mt-2 pl-4">
                          {link.submenu.map((submenu) => (
                            <NavLink 
                              key={submenu.id}
                              to={submenu.link}
                              className={({ isActive }) =>
                                `block flex items-center gap-2 text-md text-gray-600 hover:underline ${isActive ? "font-bold text-yellow-500" : ""
                                }`
                              }
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <submenu.icon className="w-4 h-4 text-yellow-500" />
                              {submenu.title}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  {/* Get In Touch Button */}
                  <Link
                    to="/contactus"
                    className="primary-btn w-1/2 md:w-auto mt-5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}




        {/* Contact Button */}
        {isDesktopView && (
          <Link to="/contactus" className="hidden lg:block primary-btn">
            Get In Touch
          </Link>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
