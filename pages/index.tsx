// pages/index.tsx
'use client';

import React from 'react';
import { useState } from 'react';
import 'keen-slider/keen-slider.min.css';

import ArticlesGrid from '../src/components/ArticlesGrid/ArticlesGrid';
import HeroSection from '@components/Hero/Hero';
import Footer from '@components/Footer/Footer';
import ArticleModal from '@components/ArticleModal/ArticleModal';
import SeoHead from '@components/SeoHead/SeoHead';

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
    <div className="bg-gray-50 min-h-screen font-sans pt-0 md:pt-0 py-3 md:py-4 pb-16 md:pb-24 relative">
      <SeoHead />
      <HeroSection />
      <ArticlesGrid openModal={openModal} />
      <ArticleModal isOpen={modalIsOpen} onRequestClose={closeModal} url={modalUrl} />
      <Footer />
    </div>
  );
}
