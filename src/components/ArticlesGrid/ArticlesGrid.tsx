import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'flowbite-react';

import { articles } from '../../../source/articles';

type ArticlesGridProps = {
  openModal: (url: string) => void;
};

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_STEP = 3;

const ArticlesGrid = ({ openModal }: ArticlesGridProps) => {
  const [visibleCount, setVisibleCount] = useState(() => Math.min(INITIAL_VISIBLE_COUNT, articles.length));
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (visibleCount >= articles.length) {
      return;
    }

    const sentinel = sentinelRef.current;

    if (!sentinel) {
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisibleCount(articles.length);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCount((prev) => {
              if (prev >= articles.length) {
                return prev;
              }

              return Math.min(prev + LOAD_STEP, articles.length);
            });
          }
        });
      },
      {
        rootMargin: '200px 0px',
        threshold: 0.1,
      },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [visibleCount]);

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  return (
    <section id="articles" className="py-4 md:p-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 md:mb-10">Latest Articles</h2>
      <div className="slider-container relative">
        <div className="columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3">
          {visibleArticles.map((article) => (
            <div key={article.title} className="break-inside-avoid pb-4 md:pb-6">
              <Card
                className="flex flex-col h-full block-shadow !border-gray-200 bg-white dark:bg-white p-2"
                renderImage={() => (
                  <img
                    className="max-h-[200px] object-cover rounded-tl-md rounded-tr-md object-top w-full"
                    width={500}
                    height={500}
                    src={article.src}
                    alt={article.title}
                    loading="lazy"
                  />
                )}
              >
                <h3 className="text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
                  {article.title}
                </h3>
                <p className="text-xs font-normal text-gray-700 dark:text-gray-700">
                  {article.preview}
                </p>
                <div className="mt-4 flex justify-center md:justify-start space-x-3 lg:mt-6">
                  <a
                    href={article.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    View Source
                  </a>
                  {article.remoteAccess && (
                    <button
                      onClick={() => openModal(article.source)}
                      className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
                    >
                      Read Here
                    </button>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
        {hasMore && <div ref={sentinelRef} className="h-4 w-full" aria-hidden="true" />}
      </div>
    </section>
  );
};

export default ArticlesGrid;
