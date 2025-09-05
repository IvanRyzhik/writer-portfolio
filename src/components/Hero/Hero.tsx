import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="block text-center sm:flex w-full justify-center md:justify-start z-10 relative items-center">
          <Image
            width={200}
            height={200}
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 120px, 200px"
            className="rounded-full m-auto mb-1 sm:mb-0 sm:m-0 sm:mr-6 shadow-xl w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover border-white border"
            src="/images/Ksu.png"
            alt="avatar"
          />
          <div className="mx-auto sm:mx-0 sm:my-0 mb-0 sm:mb-4 p-2 w-fit">
            <h1 className="text-3xl md:text-5xl font-bold kitty-block text-white shadow-text">
              Ksenia Melnychenko
            </h1>
            <p className="text-left text-xs md:text-lg z-10 relative text-white">
              SEO Content Writer, Storyteller & Ghostwriter
            </p>
          </div>
        </div>
        <div className="relative z-20 px-6"></div>
      </section>
    </>
  );
};

export default HeroSection;
