import React, { useState, useEffect, useRef } from "react";
import kcImg from "./khanCrane2.jpg";
import Accordion from "./Accordian";

const Page2 = () => {
  const [toggle1, setToggle1] = useState("hidden");
  const [toggle2, setToggle2] = useState("hidden");
  const [toggle3, setToggle3] = useState("hidden");
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef(null);

  const toggleButton1 = () => {
    setToggle1((prevDisp) => (prevDisp === "hidden" ? "block" : "hidden"));
    setToggle2("hidden");
    setToggle3("hidden");
  };

  const toggleButton2 = () => {
    setToggle2((prevDisp) => (prevDisp === "hidden" ? "block" : "hidden"));
    setToggle1("hidden");
    setToggle3("hidden");
  };

  const toggleButton3 = () => {
    setToggle3((prevDisp) => (prevDisp === "hidden" ? "block" : "hidden"));
    setToggle1("hidden");
    setToggle2("hidden");
  };

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
      className="w-full overflow-hidden min-h-[52rem] flex flex-col md:flex-row md:justify-center items-center bg-white"
    >

      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={kcImg}
          className="md:h-[40rem] h-[30rem] md:w-[30rem] max-w-full md:rounded-none rounded-xl"
          alt="Khan Crane"
        />
      </div>

      <div
        className={`transition-transform duration-1000 ease-in-out ${
          isVisible ? "translate-x-0" : "-translate-x-10"
        }`}
      >
        <div className="relative flex flex-col md:pl-40  justify-center">
          <div className="text-lg pt-20 pl-6">
            INTRODUCTION OF US
            <div className="pt-6 gap-5">
              <div className="text-5xl font-bold flex gap-5">
                <div className="w-1 bg-yellow-500"></div>HOW WE BECAME BEST
                <br />
                AMONG OTHERS
              </div>
            </div>
            <div className="text-base pt-4">
              Relevant and Trusted in the market from 20 YEARS. More than 1000+
              <br /> happy customers from the date we started <br />
            </div>
          </div>

          <Accordion/>
          
        </div>
      </div>
    </div>
  );
};

export default Page2;
