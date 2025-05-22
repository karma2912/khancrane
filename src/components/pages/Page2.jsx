import React, { useState, useEffect, useRef } from "react";
import kcImg from "./khanCrane2.jpg";
import Accordion from "./Accordian";

const Page2 = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (pageRef.current) observer.observe(pageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={pageRef}
      className="w-full overflow-hidden min-h-[80vh] lg:min-h-[48rem] flex flex-col lg:flex-row justify-center items-center bg-white px-6 md:px-12 py-12 lg:py-0"
    >
      <div className={`hidden lg:flex lg:w-1/2 xl:w-2/5 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } justify-end pr-8`}>
        <img
          src={kcImg}
          className="h-full max-h-[40rem] w-auto object-contain"
          alt="Khan Crane"
          style={{ maxWidth: "100%" }}
        />
      </div>

      <div className={`w-full lg:w-1/2 xl:w-3/5 transition-transform duration-1000 ease-in-out ${
        isVisible ? "translate-x-0" : "lg:-translate-x-10"
      }`}>
        <div className="relative flex flex-col justify-center lg:pl-8 xl:pl-12">
          <div className="text-lg pt-0 lg:pt-4">
            INTRODUCTION OF US
            <div className="pt-6 gap-5">
              <div className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold flex gap-5">
                <div className="w-1 bg-yellow-500"></div>
                <div>
                  HOW WE BECAME BEST
                  <br />
                  AMONG OTHERS
                </div>
              </div>
            </div>
            <div className="text-base pt-4">
              Relevant and Trusted in the market from 20 YEARS. More than 1000+{' '}
              <br className="hidden lg:block" />
              happy customers from the date we started
            </div>
          </div>

          <div className="pt-8 w-full">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;