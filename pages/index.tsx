// pages/index.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import Modal from 'react-modal'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Card, Button } from "flowbite-react";
import { articles } from '../source/articles'

Modal.setAppElement('#__next')

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  const openModal = (url: string) => {
    setModalUrl(url)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setModalUrl('')
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // показуємо 3
    slidesToScroll: 3, // крутимо одразу по 3
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
        {/* <Image
          src="/images/ksu.jpg"
          alt="Writer"
          fill
          className="object-cover opacity-50 relative z-0"
        /> */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center">
        <div className="relative z-20 px-6">
          <h1 className="text-5xl font-bold mb-4">Ksenia Melnychenko</h1>
          <p className="max-w-xl mx-auto text-lg">
            Creative Content Writer & Storyteller — Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <nav className="absolute top-6 flex gap-6 z-20 text-white text-lg">
          <a href="#articles" className="hover:underline">
            Articles
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </section>

      {/* Articles */}
      <section id="articles" className="py-8 px-8 bg-white">
        <h2 className="text-4xl font-bold text-center mb-6">Latest Articles</h2>
        <Slider {...sliderSettings}>
          {articles.map((article) => (
            <div key={article.title} className="px-4"> {/* відступ між слайдами */}
              <Card className="max-w-sm" imgSrc={article.src} imgAlt={article.alt}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {article.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {article.preview}
                </p>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                  <a
                    href={article.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    View Source
                  </a>
                  <button
                    onClick={() => openModal(article.source)}
                    className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
                  >
                    Read Here
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </Slider>

      </section>

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
        className="bg-gray-900 text-white py-8 text-center mt-12"
      >
        <p>
          Contact me at{' '}
          <a href="mailto:john@example.com" className="underline">
            john@example.com
          </a>
        </p>
      </footer>
    </div>
  )
}
