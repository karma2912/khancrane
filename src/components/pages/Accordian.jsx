import React, { useState } from "react";

const Accordion = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const toggleButton1 = () => {
    setToggle1(!toggle1);
    setToggle2(false);
    setToggle3(false);
  };

  const toggleButton2 = () => {
    setToggle2(!toggle2);
    setToggle1(false);
    setToggle3(false);
  };

  const toggleButton3 = () => {
    setToggle3(!toggle3);
    setToggle1(false);
    setToggle2(false);
  };

  return (
    <div className="pt-10 mb-10 md:w-[40rem] w-[20rem] mx-auto">
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 bg-gray-50 border border-gray-200 rounded-t-xl hover:bg-gray-100 transition-colors duration-300 ${
              toggle1 ? "rounded-b-none" : ""
            }`}
            onClick={toggleButton1}
          >
            <span>Why Choose SK Cranes?</span>
            <svg
              className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                toggle1 ? "rotate-180" : ""
              }`}
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          className={`${
            toggle1 ? "max-h-[20rem]" : "max-h-0"
          } overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <div className="p-5 border border-gray-200 bg-white">
            <p className="text-gray-600">
              SK Cranes stands out in the industry due to our <strong>11+ years of experience</strong>, <strong>1000+ successful projects</strong>, and <strong>award-winning services</strong>. We offer the best prices in the market, ensuring cost-effective solutions without compromising on quality. Our team of experts is dedicated to providing safe, reliable, and efficient crane services across Mumbai.
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors duration-300 ${
              toggle2 ? "rounded-t-none" : ""
            }`}
            onClick={toggleButton2}
          >
            <span>What Services Do We Offer?</span>
            <svg
              className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                toggle2 ? "rotate-180" : ""
              }`}
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          className={`${
            toggle2 ? "max-h-[20rem]" : "max-h-0"
          } overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <div className="p-5 border border-gray-200 bg-white">
            <div className="text-gray-600">
              At SK Cranes, we provide a wide range of services to meet all your heavy lifting and transportation needs. Our services include:
              <ul className="list-disc list-inside mt-2">
                <li><strong>Crane on Hire</strong>: Flexible rental options for all types of cranes.</li>
                <li><strong>Clip Service</strong>: Precision clip services for construction and industrial projects.</li>
                <li><strong>Mobile Crane on Hire</strong>: Quick and efficient mobile crane solutions.</li>
                <li><strong>Hydraulic Crane on Hire</strong>: Heavy-duty hydraulic cranes for complex lifting operations.</li>
                <li><strong>JCB on Hire</strong>: Reliable JCB services for excavation and material handling.</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors duration-300 ${
              toggle3 ? "rounded-t-none" : ""
            }`}
            onClick={toggleButton3}
          >
            <span>Where Do We Operate?</span>
            <svg
              className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                toggle3 ? "rotate-180" : ""
              }`}
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          className={`${
            toggle3 ? "max-h-[20rem]" : "max-h-0"
          } overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <div className="p-5 border border-gray-200 bg-white rounded-b-xl">
            <p className="text-gray-600">
              SK Cranes is based in <strong>Kandivali, Mumbai</strong> and we proudly serve the entire Mumbai region. Whether you're in the heart of the city or the outskirts, our team is ready to deliver top-notch crane services wherever you need us. With our extensive fleet and experienced operators, we ensure timely and efficient service across all locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;