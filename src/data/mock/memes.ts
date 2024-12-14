import { ContentItem } from '../schema/content';

export const memes: ContentItem[] = [
  {
    id: 'meme1',
    title: 'Programming Meme',
    image_url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    category: 'memes',
    type: 'basic',
    likes: 420,
    dislikes: 15,
    created_at: '2024-03-13T16:45:00Z'
  },
  {
    id: 'meme2',
    title: 'Cat Meme',
    image_url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    category: 'memes',
    type: 'basic',
    likes: 380,
    dislikes: 8,
    created_at: '2024-03-12T12:30:00Z'
  },
  {
    id: 'meme3',
    title: 'Office Meme',
    image_url: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc',
    category: 'memes',
    type: 'basic',
    likes: 290,
    dislikes: 12,
    created_at: '2024-03-11T09:15:00Z'
  }
];