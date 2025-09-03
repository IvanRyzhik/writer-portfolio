// pages/index.tsx
'use client';

import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ArticlesSlider from '../src/components/ArticlesSlider/ArticlesSlider';
import HeroSection from '@components/Hero/Hero';

Modal.setAppElement('#__next');

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  const openModal = (url: string) => {
    setModalUrl(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalUrl('');
  };

  return (
    <div className="bg-gray-50 sm:min-h-screen font-sans p-3 md:p-6 pb-16 md:pb-24 relative">
      <HeroSection />

      <ArticlesSlider openModal={openModal} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="bg-white w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
      >
        <iframe src={modalUrl} className="w-full h-[80vh]" />
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          ✕
        </button>
      </Modal>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-900 text-white py-4 md:py-8 text-center absolute w-full bottom-0 left-0"
      >
        <div className='w-full flex justify-center items-center'>
          {/* <p className='mx-2'>Contact me at</p>
          <a href="mailto:kseniamelia@gmail.com" target="_blank" className="inline-block ">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0a66c2">
              <path d="M12 13.065l-12-7.065h24l-12 7.065zm0 2.935l-12-7.065v11h24v-11l-12 7.065z" />
            </svg>
          </a>
          <span className='mx-2'> or </span> */}
          <a href="https://www.linkedin.com/in/kseniamely" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0A66C2">
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.57a2.03 2.03 0 110-4.06 2.03 2.03 0 010 4.06zm14.9 12.88h-3.5v-5.91c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13v6.01h-3.5V9h3.36v1.57h.05c.47-.9 1.61-1.85 3.32-1.85 3.55 0 4.21 2.34 4.21 5.39v6.9z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
