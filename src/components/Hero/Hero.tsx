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
        <div className="block text-center sm:flex w-full justify-center md:justify-start  items-center">
          <Image
            width="200"
            height="200"
            className="rounded-full m-auto mb-5 sm:mb-0 sm:m-0 sm:mr-6 shadow-xl w-[120px] h-[120px] md:w-[200px] md:h-[200px] object-cover"
            src="/images/ksu.png"
            alt="avatar"
          />
          <div className="mx-auto sm:mx-0 sm:my-0 mb-0 sm:mb-4 p-2 w-fit">
            <h1 className="text-3xl md:text-5xl font-bold kitty-block">Ksenia Melnychenko</h1>
            <p className="text-xs md:text-lg z-10 relative">SEO Content Writer, Storyteller & Ghostwriter</p>
          </div>
        </div>
        <div className="relative z-20 px-6"></div>
      </section>
    </>
  );
};

export default HeroSection;
