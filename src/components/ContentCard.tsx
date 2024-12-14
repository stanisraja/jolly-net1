import React from 'react';
import { Heart, Share2, ThumbsDown } from 'lucide-react';
import { format } from 'date-fns';
import { ContentItem } from '../types/content';

interface ContentCardProps {
  content: ContentItem;
}

export function ContentCard({ content }: ContentCardProps) {
  const handleLike = () => {
    // TODO: Implement like functionality
  };

  const handleDislike = () => {
    // TODO: Implement dislike functionality
  };

  const handleShare = () => {
    navigator.share({
      title: content.title,
      text: content.description,
      url: window.location.href,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto mb-8">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">{content.title}</h2>
        <img
          src={content.image_url}
          alt={content.title}
          className="w-full h-auto rounded-lg mb-4"
        />
        
        {content.type === 'detailed' && content.description && (
          <p className="text-gray-700 mb-4">{content.description}</p>
        )}

        {content.type === 'trivia' && content.options && (
          <div className="space-y-2 mb-4">
            {content.options.map((option, index) => (
              <button
                key={index}
                className="w-full text-left p-2 rounded border border-gray-200 hover:bg-gray-50"
              >
                {option}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className="flex items-center space-x-1 hover:text-red-500"
            >
              <Heart size={20} />
              <span>{content.likes}</span>
            </button>
            <button
              onClick={handleDislike}
              className="flex items-center space-x-1 hover:text-blue-500"
            >
              <ThumbsDown size={20} />
              <span>{content.dislikes}</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center space-x-1 hover:text-green-500"
            >
              <Share2 size={20} />
            </button>
          </div>
          <span>{format(new Date(content.created_at), 'MMM d, yyyy')}</span>
        </div>
      </div>
    </div>
  );
}