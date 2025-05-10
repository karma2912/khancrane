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
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen w-full bg-white text-gray-800 py-20 px-4 md:px-12">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">About Khan Crane</h1>
        <p className="mt-4 text-lg text-gray-600">Your Trusted Partner in Crane Services Since 2012</p>
      </motion.div>

      <div className="mt-16 flex flex-col md:flex-row items-center gap-12">
        <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex-1 flex justify-center items-center">
          <img src={crane1} alt="Khan Crane" className="rounded-xl shadow-lg md:w-auto md:h-[50vh] h-[45vh]" />
        </motion.div>
        <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With <strong>11+ years of experience</strong>, we have successfully completed <strong>1000+ projects</strong> and won <strong>2 prestigious awards</strong>.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our fleet includes <strong>Mobile Cranes</strong>, <strong>Hydraulic Cranes</strong>, and <strong>JCBs</strong> for all your heavy lifting needs.
          </p>
        </motion.div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: "🚀 Experienced Team", desc: "11+ years handling complex crane operations." },
          { title: "💰 Best Prices", desc: "Most competitive rates without compromising quality." },
          { title: "🛠️ Wide Range of Services", desc: "From crane rentals to JCB services." },
          { title: "⚙️ 1000+ Projects", desc: "A proven track record of excellence." },
        ].map((item, index) => (
          <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { image: crane3, title: "🔧 Crane on Hire", desc: "Flexible crane rentals for heavy lifting." },
          { image: crane4, title: "🏗️ Mobile Crane on Hire", desc: "Quick and efficient mobile cranes." },
          { image: crane5, title: "💪 Hydraulic Crane on Hire", desc: "Heavy-duty lifting operations with precision." },
        ].map((service, index) => (
          <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6">
            <img src={service.image} alt={service.title} className="rounded-xl shadow-md w-full max-w-xs" />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-700">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-24 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Ready to Get Started?</h2>
        <Link className="rounded-lg bg-yellow-500 transition-colors duration-300 hover:bg-yellow-600 p-3 text-white" to='/contact'>
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUs;