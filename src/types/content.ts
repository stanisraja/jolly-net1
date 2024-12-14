export type ContentType = 'basic' | 'detailed' | 'trivia';

export interface ContentItem {
  id: string;
  title: string;
  image_url: string;
  description?: string;
  category: string;
  type: ContentType;
  options?: string[];
  correct_answer?: number;
  likes: number;
  dislikes: number;
  created_at: string;
}