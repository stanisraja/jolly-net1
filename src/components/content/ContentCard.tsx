import React from 'react';
import { ContentItem } from '../../types/content';
import { ContentActions } from './ContentActions';
import { TriviaOptions } from './TriviaOptions';

interface ContentCardProps {
  content: ContentItem;
  onUpdate: () => void;
}

export function ContentCard({ content, onUpdate }: ContentCardProps) {
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
          <TriviaOptions 
            options={content.options} 
            correctAnswer={content.correct_answer} 
          />
        )}

        <ContentActions
          contentId={content.id}
          likes={content.likes}
          dislikes={content.dislikes}
          created_at={content.created_at}
          onUpdate={onUpdate}
        />
      </div>
    </div>
  );
}