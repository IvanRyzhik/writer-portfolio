import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      <section>
        {/* <nav className="flex w-full justify-center gap-6 z-20 text-lg p-4">
          <a href="#articles" className="hover:underline">
            Articles
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav> */}
        <div className='flex w-full justify-center items-center py-6'>
          <Image width='200' height='200' className='rounded-full mr-6' src='/images/ksu.jpeg' alt='avatar' />
          <div className='mb-4 p-2'>
            <h1 className="text-5xl font-bold ">Ksenia Melnychenko</h1>
            <p className="text-lg">
              Creative Content Writer & Storyteller
              adipiscing elit.
            </p>
          </div>
        </div>
        <div className="relative z-20 px-6">
        </div>
      </section>
    </>
  );
};

export default HeroSection;
