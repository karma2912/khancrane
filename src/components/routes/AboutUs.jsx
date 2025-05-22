import React, { useEffect } from "react";
import { motion } from "framer-motion";
import crane1 from "../pages/crane1.jpg";
import crane2 from "../pages/crane2.jpg";
import crane3 from "../pages/crane4.jpg";
import crane4 from "../pages/crane6.jpg";
import crane5 from "../pages/khanCrane1.jpg";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-white text-[#1b273a] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeInUp} 
        className="text-center mb-16 md:mb-24"
      >
        <div className="text-lg md:text-xl mb-2">ABOUT OUR COMPANY</div>
        <div className="flex justify-center">
          <div className="w-1 h-12 bg-yellow-500 mr-4"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            KHAN CRANE SERVICES
          </h1>
        </div>
        <p className="mt-6 text-base md:text-lg max-w-3xl mx-auto">
          Your Trusted Partner in Crane Services Since 2012
        </p>
      </motion.div>

      {/* Who We Are Section */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <motion.div 
            variants={fadeInLeft} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            className="lg:w-1/2"
          >
            <img 
              src={crane1} 
              alt="Khan Crane" 
              className="w-full h-auto max-h-[30rem] object-cover rounded-xl shadow-lg border-4 border-yellow-500"
            />
          </motion.div>
          
          <motion.div 
            variants={fadeInRight} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            className="lg:w-1/2"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <div className="w-8 h-1 bg-yellow-500 mr-4"></div>
              WHO WE ARE
            </h2>
            <p className="text-base md:text-lg mb-4">
              With <span className="font-bold text-yellow-600">11+ years of experience</span>, we have successfully completed <span className="font-bold">1000+ projects</span> and won <span className="font-bold">2 prestigious awards</span> in the crane service industry.
            </p>
            <p className="text-base md:text-lg mb-6">
              Our extensive fleet includes <span className="font-bold">Mobile Cranes</span>, <span className="font-bold">Hydraulic Cranes</span>, and <span className="font-bold">JCBs</span> to handle all your heavy lifting needs with precision and safety.
            </p>
            <Link 
              to="/services" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              OUR SERVICES
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">WHY CHOOSE US</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: "🚀", 
              title: "Experienced Team", 
              desc: "11+ years handling complex crane operations with precision and safety." 
            },
            { 
              icon: "💰", 
              title: "Best Prices", 
              desc: "Most competitive rates in Mumbai without compromising on quality or safety." 
            },
            { 
              icon: "🛠️", 
              title: "Wide Range", 
              desc: "Comprehensive services from crane rentals to complete project solutions." 
            },
            { 
              icon: "🏆", 
              title: "Proven Track", 
              desc: "Successfully completed 1000+ projects with client satisfaction." 
            },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Services Section */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">OUR SERVICES</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              image: crane3, 
              title: "Crane on Hire", 
              desc: "Flexible crane rentals for all your heavy lifting requirements." 
            },
            { 
              image: crane4, 
              title: "Mobile Crane", 
              desc: "Quick and efficient mobile cranes for construction sites." 
            },
            { 
              image: crane5, 
              title: "Hydraulic Crane", 
              desc: "Heavy-duty lifting operations with precision and control." 
            },
          ].map((service, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 md:h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.desc}</p>
                <Link 
                  to="/services" 
                  className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
                >
                  Learn more <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        className="max-w-4xl mx-auto bg-[#1b273a] text-white rounded-xl p-8 md:p-12 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">READY TO GET STARTED?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your project requirements and get a free quote from our crane service experts.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
        >
          CONTACT US NOW
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUs;