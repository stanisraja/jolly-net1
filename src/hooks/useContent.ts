import { useState, useEffect, useCallback } from 'react';
import { ContentItem } from '../types/content';
import { fetchRandomContent } from '../lib/api/content';

export function useContent(category?: string) {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [lastDoc, setLastDoc] = useState<any>(null);

  const fetchContent = useCallback(async () => {
    if (!hasMore || isLoading) return;

    try {
      setIsLoading(true);
      setError(null);
      
      const result = await fetchRandomContent(category, lastDoc);
      
      if (!result.content || result.content.length === 0) {
        setHasMore(false);
        if (content.length === 0) {
          setError('No content available for this category');
        }
      } else {
        setContent(prev => {
          // Filter out duplicates and shuffle the new content
          const newContent = [...prev];
          const shuffledNewContent = result.content
            .filter(item => !newContent.some(existing => existing.id === item.id))
            .sort(() => Math.random() - 0.5);
          
          return [...newContent, ...shuffledNewContent];
        });
        setLastDoc(result.lastDoc);
        setHasMore(result.hasMore);
      }
    } catch (err) {
      console.error('Error fetching content:', err);
      setError('Failed to fetch content. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [category, hasMore, isLoading, lastDoc, content.length]);

  // Reset content when category changes
  useEffect(() => {
    setContent([]);
    setLastDoc(null);
    setHasMore(true);
    setError(null);
    fetchContent();
  }, [category]);

  return { content, isLoading, error, fetchContent, hasMore };
}