import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import craneServiceHero from "../pages/crane2.jpg";
import containerLoading from "../pages/crane4.jpg";
import materialUnloading from "../pages/crane6.jpg";
import heavyEquipment from "../pages/khanCrane1.jpg";
import industrialCrane from "../pages/crane1.jpg";

const services = [
  {
    title: "Container Loading/Unloading",
    image: containerLoading,
    description: "Professional container handling services with precision crane operations. We ensure safe and efficient loading/unloading of shipping containers at ports, warehouses, and construction sites.",
    features: [
      "20-40ft container handling",
      "Precision placement",
      "24/7 availability",
      "Damage-free operations"
    ]
  },
  {
    title: "Material Handling",
    image: materialUnloading,
    description: "Specialized in bulk material unloading for construction and industrial applications. Our cranes can handle steel beams, concrete panels, piping, and other construction materials with care.",
    features: [
      "Up to 50-ton capacity",
      "Fragile material expertise",
      "On-site coordination",
      "Custom rigging solutions"
    ]
  },
  {
    title: "Heavy Equipment Installation",
    image: heavyEquipment,
    description: "Expert installation and positioning of heavy machinery for manufacturing plants and industrial facilities. We provide turnkey solutions for equipment placement and alignment.",
    features: [
      "Millimeter precision",
      "Factory equipment expertise",
      "Safety-first approach",
      "Custom lift planning"
    ]
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <div className="min-h-screen w-full text-gray-900 bg-gray-50 overflow-x-hidden">
 
      <div className="relative h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center overflow-hidden">
        <img 
          src={craneServiceHero} 
          alt="Crane loading services" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2c3e55] bg-opacity-70"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-4 max-w-6xl"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Professional Loading & Unloading Services</h1>
          <p className="text-xl text-blue-100 mt-4 max-w-3xl mx-auto">
            Precision crane services for industrial, construction, and logistics needs. 
            Our certified operators ensure safe and efficient material handling for your projects.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8  text-white px-8 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 transition-all duration-300 font-semibold shadow-lg"
          >
            Request Service Quote
          </motion.button>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1b273a] mb-4">Our Specialized Services</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive crane solutions tailored to your specific loading and unloading requirements, 
            backed by industry-leading safety standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b4e66] to-transparent"></div>
                <h3 className="absolute bottom-0 left-0 right-0 text-2xl font-bold text-white p-6">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition duration-300 font-medium">
                  Service Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      <div className="bg-amber-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Loading/Unloading Process</h2>
            <div className="w-24 h-1 bg-[#1b273a] mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Assessment",
                description: "We evaluate your site and requirements to determine the best equipment and approach."
              },
              {
                title: "Planning",
                description: "Our team creates a detailed lift plan with safety protocols and timeline."
              },
              {
                title: "Execution",
                description: "Certified operators perform the loading/unloading with precision."
              },
              {
                title: "Completion",
                description: "We ensure proper placement and conduct a post-operation review."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-amber-500 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-900">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1b273a] mb-4">Our Crane Fleet</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern, well-maintained equipment for all your material handling needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <img 
                    src={industrialCrane} 
                    alt="Industrial crane" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h3 className="text-2xl font-bold text-[#1b273a] mb-3">Mobile Hydraulic Cranes</h3>
                  <p className="text-gray-600 mb-4">
                    Our 25-300 ton hydraulic cranes provide the perfect balance of mobility and lifting power for loading/unloading operations.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>25-300 ton capacity range</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Extendable booms up to 60m</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>All-terrain capability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="md:flex flex-row-reverse">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <img 
                    src={heavyEquipment} 
                    alt="Forklift crane" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Specialized Forklifts</h3>
                  <p className="text-gray-600 mb-4">
                    For warehouse and tight space operations, our heavy-duty forklifts handle up to 15 tons with precision.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>3-15 ton capacity</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Reach up to 12m height</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Narrow aisle capability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={craneServiceHero} 
            alt="Crane service background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Streamline Your Loading Operations?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-blue-200 max-w-3xl mx-auto mb-8"
          >
            Our team of certified crane operators and rigging specialists are ready to handle your most challenging loading and unloading projects with precision and safety.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition duration-300 font-semibold shadow-lg">
              Get a Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 font-semibold">
            <a
          href={`tel:9821661352`}
        >
          Call +91 9821661352
        </a>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;