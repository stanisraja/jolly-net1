export type ContentType = 'basic' | 'detailed' | 'trivia';

export interface BaseContent {
  id: string;
  title: string;
  image_url: string;
  category: string;
  likes: number;
  dislikes: number;
  created_at: string;
}

export interface BasicContent extends BaseContent {
  type: 'basic';
}

export interface DetailedContent extends BaseContent {
  type: 'detailed';
  description: string;
}

export interface TriviaContent extends BaseContent {
  type: 'trivia';
  description: string;
  options: string[];
  correct_answer: number;
}

export type ContentItem = BasicContent | DetailedContent | TriviaContent;