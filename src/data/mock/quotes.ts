import { ContentItem } from '../schema/content';

export const quotes: ContentItem[] = [
  {
    id: 'quote1',
    title: 'Inspirational Quote',
    image_url: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec',
    category: 'quotes',
    type: 'detailed',
    description: '"The only way to do great work is to love what you do." - Steve Jobs',
    likes: 390,
    dislikes: 12,
    created_at: '2024-03-11T09:30:00Z'
  },
  {
    id: 'quote2',
    title: 'Life Quote',
    image_url: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94',
    category: 'quotes',
    type: 'detailed',
    description: '"Life is what happens when youre busy making other plans." - John Lennon',
    likes: 420,
    dislikes: 15,
    created_at: '2024-03-10T14:15:00Z'
  },
  {
    id: 'quote3',
    title: 'Success Quote',
    image_url: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24',
    category: 'quotes',
    type: 'detailed',
    description: '"Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill',
    likes: 350,
    dislikes: 10,
    created_at: '2024-03-09T11:20:00Z'
  }
];