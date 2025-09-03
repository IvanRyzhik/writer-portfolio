import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { Card } from 'flowbite-react';

import { articles } from '../../../source/articles';

type ArticlesSliderProps = {
  openModal: (url: string) => void;
};

const ArticlesSlider = ({ openModal }: ArticlesSliderProps) => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 768px)': {
          slides: { perView: 2, spacing: 16 },
        },
        '(min-width: 1024px)': {
          slides: { perView: 3, spacing: 16 },
        },
      },
    },
    []
  );

  return (
    <section id="articles" className="p-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-10">Latest Articles</h2>
      <div className="slider-container relative">
        <div ref={sliderRef} className="keen-slider">
          {articles.map((article) => (
            <div key={article.title} className="keen-slider__slide h-full flex px-2 md:px-4 pb-6">
              <Card
                className="flex flex-col h-full block-shadow"
                renderImage={() => (
                  <img
                    className="max-h-[200px] object-cover rounded-md object-top w-full"
                    width={500}
                    height={500}
                    src={article.src}
                    alt={article.alt}
                  />
                )}
              >
                <h5 className="text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {article.title}
                </h5>
                <p className="text-xs font-normal text-gray-700 dark:text-gray-400">{article.preview}</p>
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
        </div>
        <button
          type="button"
          aria-label="Previous"
          onClick={() => instanceRef.current?.prev()}
          className="absolute -left-10 md:-left-11 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow rounded-full p-2 md:p-3 z-10 border border-gray-200 backdrop-blur-sm focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => instanceRef.current?.next()}
          className="absolute -right-10 md:-right-11 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow rounded-full p-2 md:p-3 z-10 border border-gray-200 backdrop-blur-sm focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ArticlesSlider;
