import React from 'react';
import { Heart, Share2, ThumbsDown } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '../ui/Button';
import { updateContentLikes } from '../../lib/api/content';

interface ContentActionsProps {
  contentId: string;
  likes: number;
  dislikes: number;
  created_at: string;
  onUpdate: () => void;
}

export function ContentActions({ 
  contentId, 
  likes, 
  dislikes, 
  created_at, 
  onUpdate 
}: ContentActionsProps) {
  const handleLike = async () => {
    const success = await updateContentLikes(contentId, 'like');
    if (success) onUpdate();
  };

  const handleDislike = async () => {
    const success = await updateContentLikes(contentId, 'dislike');
    if (success) onUpdate();
  };

  const handleShare = () => {
    navigator.share({
      url: window.location.href,
    }).catch(console.error);
  };

  return (
    <div className="flex items-center justify-between text-gray-500 text-sm">
      <div className="flex items-center space-x-4">
        <Button variant="icon" onClick={handleLike} className="hover:text-orange-500">
          <Heart size={20} />
          <span className="ml-1">{likes}</span>
        </Button>
        <Button variant="icon" onClick={handleDislike} className="hover:text-orange-500">
          <ThumbsDown size={20} />
          <span className="ml-1">{dislikes}</span>
        </Button>
        <Button variant="icon" onClick={handleShare} className="hover:text-orange-500">
          <Share2 size={20} />
        </Button>
      </div>
      <span>{format(new Date(created_at), 'MMM d, yyyy')}</span>
    </div>
  );
}