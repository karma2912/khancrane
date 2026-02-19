import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import kcLogo from "./khanCraneLogo.webp";
import WhatsApp from "./Whatsapp";
import Call from "./Call";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <div className="flex items-center">
            <img src={kcLogo} className="h-12 w-12 md:h-16 md:w-16" alt="Khan Crane Services Logo" />
            <span className="ml-3 text-xl md:text-2xl font-semibold">SK CRANE SERVICES</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <i className="fa-solid fa-phone-volume text-2xl mr-2"></i>
              <div>
                <div className="text-sm">Online Appointment:</div>
                <div className="font-medium">9821661352</div>
              </div>
            </div>
            <Link 
              className="px-4 py-2 border-2 font-semibold border-yellow-500 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 text-lg" 
              to='/contact'
            >
              Appointment
            </Link>
          </div>

          <button 
            className="md:hidden text-2xl focus:outline-none" 
            onClick={toggleButton}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${toggle ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {toggle && (
          <div className="md:hidden bg-gray-50 rounded-lg shadow-md p-4 mb-3">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({isActive}) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700"}
                onClick={toggleButton}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className={({isActive}) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700"}
                onClick={toggleButton}
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                className={({isActive}) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700"}
                onClick={toggleButton}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({isActive}) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700"}
                onClick={toggleButton}
              >
                Contact
              </NavLink>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
              <WhatsApp />
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fa-brands fa-meta text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <i className="fa-brands fa-youtube text-xl"></i>
              </a>
              <Call />
            </div>
          </div>
        )}

        <div className="hidden md:flex justify-between items-center py-3 border-t border-b border-gray-200">
     
          <div className="flex items-center space-x-4">
            <WhatsApp />
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fa-brands fa-meta text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600">
              <i className="fa-brands fa-youtube text-xl"></i>
            </a>
            <Call />
          </div>

          <nav className="flex space-x-8">
            <NavLink
              to="/"
              className={({isActive}) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700 hover:text-yellow-500"}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({isActive}) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700 hover:text-yellow-500"}
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive}) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700 hover:text-yellow-500"}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({isActive}) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700 hover:text-yellow-500"}
            >
              Contact
            </NavLink>
          </nav>

          <div className="font-semibold text-gray-700">Explore</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;