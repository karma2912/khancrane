import React, { useEffect } from 'react';
import khanCrane from './khanCrane1.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import containerLoading from "../pages/crane4.jpg";
import materialUnloading from "../pages/crane6.jpg";
import heavyEquipment from "../pages/khanCrane1.jpg";
import { motion } from "framer-motion";
const Page1 = () => {
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
  useEffect(() => {
    const textElements = document.querySelectorAll('.animate-fade-in');
    const imageElement = document.querySelector('.animate-slide-in');
    
    setTimeout(() => {
      textElements.forEach((element) => {
        element.classList.remove('opacity-0');
        element.classList.add('opacity-100');
      });
      if (imageElement) {
        imageElement.classList.remove('translate-x-10', 'opacity-0');
        imageElement.classList.add('translate-x-0', 'opacity-100');
      }
    }, 100);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Khan Crane Service | Home</title>
        <meta name="description" content="Welcome to Khan Crane Service – trusted crane rental in Mumbai." />
      </Helmet>

      <div className='min-h-[70vh] md:min-h-[48rem] w-full text-white bg-[#1b273a] flex flex-col lg:flex-row justify-center lg:justify-end items-center overflow-hidden'>
        <div className='relative flex flex-col px-6 md:px-12 lg:pl-40 justify-center py-20 lg:py-0 w-full lg:w-auto'>
          <h1 className='text-lg animate-fade-in opacity-0 transition-opacity duration-1000'>
            KHAN CRANE SERVICES
            <div className='pt-6 gap-5'>
              <div className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold flex gap-5 animate-fade-in opacity-0 transition-opacity duration-1000 delay-200'>
                <div className='w-1 bg-yellow-500'></div>
                <div>
                  WE OFFER <br /> GREAT SERVICE
                </div>
              </div>
            </div>
            <div className='text-base pt-4 animate-fade-in opacity-0 transition-opacity duration-1000 delay-500'>
              We rent our cranes for all needs of services required. You can have{' '}
              <br className='hidden lg:block' />
              your own driver to drive the crane or we can send from our sector{' '}
              <br className='hidden lg:block' />
              We have various types of cranes suitable for your work at the most affordable{' '}
              <br className='hidden lg:block' />
              prices in the whole market.
            </div>
          </h1>
          <div className='pt-10 animate-fade-in opacity-0 transition-opacity duration-1000 delay-700'>
            <Link className='h-14 w-36 bg-yellow-500 p-3 transition-colors duration-300 hover:bg-yellow-600 rounded-lg flex items-center justify-center' to='/about'>
              LEARN MORE
            </Link>
          </div>
        </div>

        <div className='hidden lg:block'>
          <img
            src={khanCrane}
            className='h-full animate-slide-in transform translate-x-10 opacity-0 transition-all duration-1000 ease-in-out max-w-full'
            style={{ clipPath: 'polygon(0 0,100% 0,100% 100%,25% 100%)' }}
            alt="Crane"
          />
        </div>
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

    </>
  );
};

export default Page1;