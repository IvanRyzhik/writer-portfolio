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
    <div className="bg-gray-50 min-h-screen font-sans">
      <HeroSection />

      <ArticlesSlider openModal={openModal} />

      {/* Modal */}
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
        className="bg-gray-900 text-white py-8 text-center mt-12 absolute w-full bottom-0"
      >
        <p>
          Contact me at{' '}
          <a href="mailto:john@example.com" className="underline">
            john@example.com
          </a>
        </p>
      </footer>
    </div>
  );
}
