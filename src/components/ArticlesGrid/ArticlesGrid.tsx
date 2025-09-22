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
    <section id="articles" className="p-4 md:p-8 gradient-footer mt-0">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 md:mb-10 main-text">Latest Articles</h2>
      <div className="slider-container relative max-w-[1440px] m-auto">
        <div className="columns-1 gap-4 md:columns-2 md:gap-4 lg:columns-3">
          {visibleArticles.map((article) => (
            <div key={article.title} className="break-inside-avoid pb-4 md:pb-4">
              <Card
                className="group flex flex-col h-full block-shadow !border-gray-200 bg-white dark:bg-white p-1 cursor-pointer transition-transform duration-200 md:hover:scale-[1.03]"
                theme={{
                  root: {
                    children: 'flex h-full flex-col justify-center gap-4 p-0 relative overflow-hidden pb-0 md:pb-6',
                  },
                }}
                renderImage={() => (
                  <img
                    className="max-h-[200px] object-cover rounded-tl-md rounded-tr-md object-top w-full mb-2"
                    width={500}
                    height={500}
                    src={article.src}
                    alt={article.title}
                    loading="lazy"
                  />
                )}
              >
                <h3 className="text-lg md:text-xl font-bold tracking-tight main-text px-2">
                  {article.title}
                </h3>
                <p className="text-xs font-normal text-gray-700 dark:text-gray-700 px-2">
                  {article.preview}
                </p>
                <div
                  className="mt-auto action-gradient rounded-b-md w-full flex lg:mt-6 transition-all duration-600 ease-out md:gap-0 md:absolute md:-bottom-12 md:group-hover:bottom-0 bg-white"
                >
                  <a
                    href={article.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:flex-1 px-4 py-2 rounded-b-md transition text-center flex items-center justify-center text-white hover:text-white duration-600 action-hover-gradient"
                  >
                    View Source
                  </a>
                  {article.remoteAccess && (
                    <>
                      <span className="w-px bg-white self-stretch" aria-hidden="true" />
                      <button
                        onClick={() => openModal(article.source)}
                        className="w-full md:flex-1 px-4 py-2 transition text-white action-hover-gradient rounded-b-md"
                      >
                        Read Here
                      </button>
                    </>
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
