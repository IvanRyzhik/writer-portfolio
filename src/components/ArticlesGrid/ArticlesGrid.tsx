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
    <section id="articles" className="bg-[#fbfbfb] mt-0 py-4 md:py-8">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
        <h2 className="text-xl md:text-2xl font-normal text-left mb-2.5 md:mb-5 main-text">
          Latest Articles
        </h2>
        <div className="slider-container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {visibleArticles.map((article) => (
              <article key={article.title} className="relative h-[430px]">
                <Card
                  className="group relative flex flex-col h-full card-shadow !border-white hover:!border-gray-300 bg-white dark:bg-white p-1.5 overflow-hidden transition-colors duration-200"
                  theme={{
                    root: {
                      children: 'flex h-full flex-col gap-3 p-0 overflow-hidden pb-3',
                    },
                  }}
                >
                  <div className="flex h-full flex-col gap-3">
                    <div className="relative h-[200px] w-full overflow-hidden rounded-tl-md rounded-tr-md">
                      <img
                        className="h-full w-full object-cover object-top"
                        width={500}
                        height={500}
                        src={article.src}
                        alt={article.title}
                        loading="lazy"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-[#e1eec5] opacity-1000"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-normal tracking-tight main-text px-2">
                      <a
                        href={article.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="after:absolute after:inset-0 after:content-[''] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      >
                        {article.title}
                      </a>
                    </h3>
                    <p className="text-xs font-normal text-gray-700 dark:text-gray-700 px-2 line-clamp-4">
                      {article.preview}
                    </p>
                    {article.remoteAccess && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openModal(article.source);
                        }}
                        aria-label="Read article here in modal"
                        className="relative z-10 mx-2 mt-auto inline-flex items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_3px_10px_rgba(0,0,0,0.08)] transition-colors duration-200 hover:border-gray-300"
                      >
                        Read here
                      </button>
                    )}
                  </div>
                </Card>
              </article>
            ))}
          </div>
          {hasMore && <div ref={sentinelRef} className="h-4 w-full" aria-hidden="true" />}
        </div>
      </div>
    </section>
  );
};

export default ArticlesGrid;
