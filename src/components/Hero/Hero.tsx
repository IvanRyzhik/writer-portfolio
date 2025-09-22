import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative py-5 md:py-10 md:pb-0">
      <div className="gradient absolute left-1/2 -translate-x-1/2 top-0 w-screen h-[100px] sm:h-[96px] md:h-[143px]" />
      <div className="block text-center sm:flex w-full justify-center md:justify-start z-10 relative items-center">
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
        <div className="mx-auto sm:mx-0 sm:my-0 mb-0 sm:mb-4 p-2 w-fit sm:mt-[65px] md:mt-[95px]">
          <h1 className="text-3xl md:text-5xl font-bold kitty-block">
            Ksenia Melnychenko
          </h1>
          <p className="text-center md:text-left text-xs md:text-lg z-10 relative">
            SEO Content Writer, Storyteller & Ghostwriter
          </p>
        </div>
      </div>
      <div className="relative z-20 px-6"></div>
    </div>
  );
};

export default HeroSection;
