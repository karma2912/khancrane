import React, { useEffect } from 'react';
import khanCrane from './khanCrane1.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Page1 = () => {
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
    </>
  );
};

export default Page1;