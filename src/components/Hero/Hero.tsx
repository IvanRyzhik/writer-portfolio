import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative py-5 md:py-10 md:pb-0">
      <div className="gradient absolute left-1/2 -translate-x-1/2 top-0 w-screen h-full" />
      <div className="block text-center sm:flex w-full justify-center md:justify-start z-10 relative items-center max-w-[1440px] m-auto px-4 lg:px-6">
        <Image
          width={200}
          height={200}
          priority
          fetchPriority="high"
          sizes="(max-width: 640px) 120px, 200px"
          className="avatar rounded-full m-auto mb-1 sm:mb-0 sm:m-0 sm:mr-4 shadow-xl w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover border-white border"
          src="/images/Ksu-1.png"
          alt="avatar"
        />
        <div className="mx-auto sm:mx-0 sm:my-0 mb-0 sm:mb-4 p-2 w-fit main-text">
          <h1 className="text-2xl md:text-4xl font-bold kitty-block text-center sm:text-left">
            SEO Content Writer and Ghostwriter
          </h1>
          <p className="text-center sm:text-left text-md md:text-lg z-10 relative">
            Ksenia Melnychenko 
          </p>
        </div>
      </div>
      <div className="relative z-20 px-6"></div>
    </div>
  );
};

export default HeroSection;
