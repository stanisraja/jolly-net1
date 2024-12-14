import React, { useEffect, useRef, useCallback } from 'react';
import { ContentCard } from '../components/content/ContentCard';
import { useContent } from '../hooks/useContent';

export function HomePage() {
  const { content, isLoading, error, fetchContent, hasMore } = useContent();
  const observer = useRef<IntersectionObserver>();
  const lastContentRef = useCallback((node: HTMLDivElement | null) => {
    if (isLoading) return;
    
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        fetchContent();
      }
    });

    if (node) {
      observer.current.observe(node);
    }
  }, [isLoading, hasMore, fetchContent]);

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {content.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            ref={index === content.length - 1 ? lastContentRef : undefined}
          >
            <ContentCard content={item} onUpdate={fetchContent} />
          </div>
        ))}
        {isLoading && (
          <div className="text-center py-4">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
          </div>
        )}
      </div>
    </div>
  );
}