import React from 'react';
import Slider from 'react-slick';
import { Card } from 'flowbite-react';
import Image from 'next/image';

import { articles } from '../../../source/articles';
import { sliderSettings } from './settings';

type ArticlesSliderProps = {
  openModal: (url: string) => void;
};

const ArticlesSlider = ({ openModal }: ArticlesSliderProps) => {
  return (
    <section id="articles" className="py-8 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">Latest Articles</h2>
      <div className="slider-container">
        <Slider className="flex items-stretch" {...sliderSettings}>
          {articles.map((article) => (
            <div key={article.title} className="px-4 h-full flex">
              <Card
                className="flex flex-col h-full shadow-md"
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
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {article.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{article.preview}</p>
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
      </div>
    </section>
  );
};

export default ArticlesSlider;
