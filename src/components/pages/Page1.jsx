import React, { useEffect } from 'react';
import khanCrane from './khanCrane1.jpg';
import { Link } from 'react-router-dom';

const Page1 = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll('.animate-fade-in');
    const imageElement = document.querySelector('.animate-slide-in');
    
    setTimeout(() => {
      textElements.forEach((element) => {
        element.classList.remove('opacity-0');
        element.classList.add('opacity-100');
      });
      imageElement.classList.remove('translate-x-10', 'opacity-0');
      imageElement.classList.add('translate-x-0', 'opacity-100');
    }, 100);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className='h-[48rem] w-full text-white bg-[#1b273a] flex justify-end overflow-hidden' >
      <div className='relative flex flex-col md:pl-40 pl-12 justify-center'>
        <div className='text-lg pt-20 animate-fade-in opacity-0 transition-opacity duration-1000'>
          CRANE BUSINESS
          <div className='pt-6 gap-5'>
            <div className='text-7xl font-bold flex gap-5 animate-fade-in opacity-0 transition-opacity duration-1000 delay-200'>
              <div className='w-1 bg-yellow-500'></div>
              WE OFFER <br /> GREAT SERVICE
            </div>
          </div>
          <div className='text-base pt-4 animate-fade-in opacity-0 transition-opacity duration-1000 delay-500'>
            We rent our cranes for all needs of services required. You can have <br />
            your own driver to drive the crane or we can send from our sector <br />
            We have various types of cranes suitable for your work at the most affordable <br />
            prices in the whole market.
          </div>
        </div>
        <div className='pt-10 animate-fade-in opacity-0 transition-opacity duration-1000 delay-700'>
          <Link  className='h-14 w-36 bg-yellow-500 p-3 transition-colors duration-300 hover:bg-yellow-600 rounded-lg' to='/about'>
            LEARN MORE
          </Link>
        </div>
      </div>

      <div>
        <img
          src={khanCrane}
          className='md:h-full h-0 animate-slide-in transform translate-x-10 opacity-0 transition-all duration-1000 ease-in-out max-w-full'
          style={{ clipPath: 'polygon(0 0,100% 0,100% 100%,25% 100%)' }}
          alt="Crane"
        />
      </div>
    </div>
  );
};

export default Page1;
