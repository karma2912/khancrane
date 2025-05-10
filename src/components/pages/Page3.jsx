import React from "react";
import building1 from "./hydraCrane2.webp";
import faranaCrane from "./faranaCrane.jpg";
import forkLift from "./forkLift.webp";
import { Link } from "react-router-dom";

const Page3 = () => {
  return (
    <>
      <div
        className="md:min-h-[68rem] min-h-[150rem] w-full bg-gray-100 flex flex-col justify-evenly items-center text-white"
        style={{ backgroundColor: "#1b273a" }}
      >
        <div className="md:text-center text-start">
          <div className="relative flex flex-col justify-center ">
            <div className="text-base pt-20 pl-6">
              OUR SERVICES
              <div className="pt-6 gap-5">
                <div className="text-5xl font-bold flex gap-5">
                  <div className="w-1 bg-yellow-500"></div>WE OFFER TOP CRANES
                </div>
              </div>
              <div className="text-base pt-4">
                We have variety of cranes suitable for your needs and
                requirements <br />
                Here are our few cranes which are shown below
              </div>
            </div>
            <div className="pt-10"></div>
          </div>
        </div>
        <div className="md:w-3/4 w-11/12 flex md:flex-row flex-col justify-around items-center">
          <div className="flex flex-col items-center md:pb-10 pb-16">
            <img
              src={faranaCrane}
              className="h-[28rem] w-[25rem] shadow-md shadow-white border-4 border-yellow-500"
            ></img>
            <div className="h-[10rem] w-4/5 bg-white -mt-10 flex flex-col border-2 justify-between items-center text-black">
              <div className="h-full flex flex-col justify-evenly items-center text-xl font-semibold">
                Farana Crane
                <div className="text-base font-normal">
                  Use for lifting Heavy objects
                </div>
              </div>
              <div className="w-full">
                <Link
                  className="h-12 w-full border-2 border-gray-200 shadow-2xl font-semibold flex justify-center gap-4 items-center"
                  to="/about"
                >
                  LEARN MORE<i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:pb-10 pb-16">
            <img
              src={forkLift}
              className="h-[28rem] w-[25rem] shadow-md shadow-white border-4 border-yellow-500"
            ></img>
            <div className="h-[10rem] w-4/5 bg-white -mt-10 flex flex-col border-2 justify-between items-center text-black">
              <div className="h-full flex flex-col justify-evenly items-center text-xl font-semibold">
                ForkLift Crane
                <div className="text-base font-normal">
                  Use for lifting Heavy objects
                </div>
              </div>
              <div className="w-full">
                <Link
                  className="h-12 w-full border-2 border-gray-200 shadow-2xl font-semibold flex justify-center gap-4 items-center"
                  to="/about"
                >
                  LEARN MORE<i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:pb-10 pb-16">
            <img
              src={building1}
              className="h-[28rem] w-[25rem] shadow-md shadow-white border-4 border-yellow-500"
            ></img>
            <div className="h-[10rem] w-4/5 bg-white -mt-10 flex flex-col border-2 justify-between items-center  text-black">
              <div className="h-full flex flex-col justify-evenly items-center text-xl font-semibold">
                Hydra Crane
                <div className="text-base font-normal">
                  Use for lifting Heavy objects
                </div>
              </div>
              <div className="w-full">
                <Link
                  className="h-12 w-full border-2 border-gray-200 shadow-2xl font-semibold flex justify-center gap-4 items-center"
                  to="/about"
                >
                  LEARN MORE<i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link
            className="font-semibold border-yellow-500 bg-yellow-500 transition-colors duration-300 hover:bg-yellow-600 rounded-lg w-36 h-14 text-white p-3"
            to="/services"
          >
            MORE SERVICES
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page3;
