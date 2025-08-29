import React from 'react';
import Slider from 'react-slick';
import { Card } from 'flowbite-react';

import { articles } from '../../../source/articles';
import { sliderSettings } from './settings';

type ArticlesSliderProps = {
  openModal: (url: string) => void;
};

const ArticlesSlider = ({ openModal }: ArticlesSliderProps) => {
  return (
    <section id="articles" className="py-8 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-6">Latest Articles</h2>
      <Slider {...sliderSettings}>
        {articles.map((article) => (
          <div key={article.title} className="px-4">
            {' '}
            {/* відступ між слайдами */}
            <Card className="max-w-sm" imgSrc={article.src} imgAlt={article.alt}>
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
    </section>
  );
};

export default ArticlesSlider;
