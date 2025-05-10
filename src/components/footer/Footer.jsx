import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6 md:px-16" style={{backgroundColor: "#1b273a"}} >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7"
      >

        <div>
          <h2 className="text-2xl font-bold text-white">Khan Crane</h2>
          <p className="mt-3 text-gray-500">
            Providing top-quality crane services 24/7 for all your heavy lifting needs.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-white transition"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition"><FaLinkedin size={24} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-white transition">Home</a></li>
            <li><a href="#" className="text-gray-500 hover:text-white transition">Services</a></li>
            <li><a href="#" className="text-gray-500 hover:text-white transition">About Us</a></li>
            <li><a href="#" className="text-gray-500 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <div className="mt-3 space-y-2">
            <p className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-500" />
              <span><a href="tel:9821661352" className="text-gray-500 hover:text-white transition">+91 9821661352</a></span>
            </p>
            <p className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-500" />
              <span><a href="tel:9967519974" className="text-gray-500 hover:text-white transition">+91 9967519974</a></span>
            </p>
            <p className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-500" />
              <span><a href="tel:8369594756" className="text-gray-500 hover:text-white transition">+91 8369594756</a></span>
            </p>
            <p className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-500" />
              <span><a href="mailto:khancraneservice53@gmail.com" className="text-gray-500 hover:text-white transition">khancraneservice53@gmail.com</a></span>
            </p>
            <p className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <span className="text-gray-500 hover:text-white">Kandivali (W), Mumbai</span>
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-gray-500 mt-12 border-t pt-6"
      >
        <p className="text-white">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
