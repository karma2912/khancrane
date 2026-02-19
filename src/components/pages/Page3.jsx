import React from "react";
import building1 from "./hydraCrane2.webp";
import faranaCrane from "./faranaCrane.jpg";
import forkLift from "./forkLift.webp";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
const Page3 = () => {
  return (
    <div className="min-h-screen w-full bg-[#1b273a] text-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <Helmet>
        <title>SK Crane Service | Home</title>
        <meta name="description" content="Welcome to SK Crane Service – trusted crane rental in Mumbai." />
      </Helmet>
      <div className="w-full max-w-6xl text-center mb-12 md:mb-16">
        <div className="text-lg md:text-xl mb-2">OUR SERVICES</div>
        <div className="flex justify-center">
          <div className="w-1 h-12 bg-yellow-500 mr-4"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            WE OFFER TOP CRANES
          </h2>
        </div>
        <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto">
          We have variety of cranes suitable for your needs and requirements.
          Here are our few cranes which are shown below.
        </p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-12">
        <div className="flex flex-col items-center">
          <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden shadow-lg border-4 border-yellow-500">
            <img
              src={faranaCrane}
              className="w-full h-full object-cover"
              alt="Farana Crane"
            />
          </div>
          <div className="w-11/12 bg-white text-black -mt-6 border-2 shadow-md z-50">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Farana Crane</h3>
              <p className="text-base">Use for lifting Heavy objects</p>
            </div>
            <Link
              to="/about"
              className="block w-full py-3 border-t-2 border-gray-200 text-center font-semibold hover:bg-gray-100 transition-colors"
            >
              LEARN MORE <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden shadow-lg border-4 border-yellow-500">
            <img
              src={forkLift}
              className="w-full h-full object-cover"
              alt="ForkLift Crane"
            />
          </div>
          <div className="w-11/12 bg-white text-black -mt-6 border-2 shadow-md z-50">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">ForkLift Crane</h3>
              <p className="text-base">Use for lifting Heavy objects</p>
            </div>
            <Link
              to="/about"
              className="block w-full py-3 border-t-2 border-gray-200 text-center font-semibold hover:bg-gray-100 transition-colors"
            >
              LEARN MORE <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden shadow-lg border-4 border-yellow-500">
            <img
              src={building1}
              className="w-full h-full object-cover"
              alt="Hydra Crane"
            />
          </div>
          <div className="w-11/12 bg-white text-black -mt-6 border-2 shadow-md z-50">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Hydra Crane</h3>
              <p className="text-base">Use for lifting Heavy objects</p>
            </div>
            <Link
              to="/about"
              className="block w-full py-3 border-t-2 border-gray-200 text-center font-semibold hover:bg-gray-100 transition-colors"
            >
              LEARN MORE <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </div>

      <Link
        to="/services"
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
      >
        MORE SERVICES
      </Link>
    </div>
  );
};

export default Page3;