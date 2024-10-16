import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons/faPhoneFlip";
import { faEnvelope, faO } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";





const Navbar = () => {
  // State to handle dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className=" bg-gray-900 text-white py-4 px-0  ">
        <div className="  flex justify-evenly ml-[250px] gap-[40px]">

          <div className=" flex mx-auto space-x-4 items-center border-b-2 py-4 ">
            <span className="text-sm">
              <FontAwesomeIcon
                icon={faPhoneFlip}
                className="mr-2 text-orange-600"
              />
              (+233) 5451-04263
            </span>
            <span className="text-sm">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 text-orange-600"
              />
              support@example.com
            </span>
            {/* login/register   */}
            <div className=" flex space-x-4 items-end   ">
              <span className="text-gray-400"></span>
              <NavLink className="hover:underline after:border ">
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-orange-600 mr-1"
                />
                <Link to='/register'>Login/Register </Link>

              </NavLink>
              <Link to='/fav'>
              <FontAwesomeIcon
                icon={faCartShopping}
                className=" text-orange-600"
              /></Link>
              <FontAwesomeIcon icon={faO} className="text-orange-600" />
            </div>
          </div>
        </div>
      </div>
      

      {/* Main Nav Bar */}
      <nav className="bg-gray-900 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div>
            <img src={logo} alt="Logo" className=" -mt-14 h-20 w-60 pt-0" />
          </div>

          <div className="hidden md:flex space-x-6 relative border-b-2 border-gray-400">
            <div className="group relative">

              <Link to='/'>
              <NavLink className="hover:text-gray-300">
              <Link to='/'>  HOME </Link>
              </NavLink>
              </Link>
              {/* Dropdown Menu */}
              <div className="hidden group-hover:block absolute bg-white text-gray-800 rounded shadow-lg mt-2">
                <NavLink

                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Submenu 1
                </NavLink>
                <NavLink
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Submenu 2
                </NavLink>
              </div>
            </div>

            <div className="group relative">
              <NavLink className="hover:text-gray-300">
              <Link to='/book-list'> BOOKS&MEDIA</Link> 
              </NavLink>
             
            </div>

            <NavLink className="hover:text-gray-300">
              NEWS&EVENTS
            </NavLink>
            {/* Dropdown Menu */}
            <div className="hidden group-hover:block absolute bg-white text-gray-800 rounded shadow-lg mt-2">
              <NavLink className="block px-4 py-2 text-sm hover:bg-gray-100">
                Submenu 1
              </NavLink>
              <NavLink className="block px-4 py-2 text-sm hover:bg-gray-100">
                Submenu 2
              </NavLink>
            </div>

            <NavLink className="hover:text-gray-300">
             <Link to='/add-new'> LIBRARIAN </Link>
            </NavLink>
            {/* Dropdown Menu */}
            <div className="hidden group-hover:block absolute bg-white text-gray-800 rounded shadow-lg mt-2">
              <NavLink className="block px-4 py-2 text-sm hover:bg-gray-100">
                Submenu 1
              </NavLink>
              <NavLink className="block px-4 py-2 text-sm hover:bg-gray-100">
                Submenu 2
              </NavLink>
            </div>

            <NavLink className="hover:text-gray-300">
              BLOG
            </NavLink>
            {/* Dropdown Menu */}
            <div className="hidden group-hover:block absolute bg-white text-gray-800 rounded shadow-lg mt-2">
              <NavLink className="block px-4 py-2 text-sm hover:bg-gray-100">
                Submenu 1
              </NavLink>
              <NavLink className="block px-4 py-2 text-sm hover:bg-gray-100">
                Submenu 2
              </NavLink>
            </div>

            <NavLink className="hover:text-gray-300">
              SERVICES
            </NavLink>


            <NavLink className="hover:text-gray-300">
              CONTACT
            </NavLink>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button className="focus:outline-none" onClick={toggleDropdown}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 text-white border-t border-gray-700">
              <NavLink
                className="block px-4 py-2 hover:bg-gray-800 border-b border-gray-700"
              >
                Home
              </NavLink>
              <NavLink
                className="block px-4 py-2 hover:bg-gray-800 border-b border-gray-700"
              >
                Books&Media
              </NavLink>
              <NavLink
                className="block px-4 py-2 hover:bg-gray-800 border-b border-gray-700"
              >
                News&Events
              </NavLink>
              <NavLink
                className="block px-4 py-2 hover:bg-gray-800 border-b border-gray-700"
              >
                Librarian
              </NavLink>



              Blog
              <NavLink className="block px-4 py-2 hover:bg-gray-800">

                Contact
              </NavLink>

            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
