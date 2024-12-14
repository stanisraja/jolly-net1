import { ContentItem } from '../schema/content';

export const jokes: ContentItem[] = [
  {
    id: 'joke1',
    title: 'Dad Joke',
    image_url: 'https://images.unsplash.com/photo-1543833969-66c07368c3e4',
    category: 'jokes',
    type: 'detailed',
    description: 'Why dont scientists trust atoms? Because they make up everything!',
    likes: 180,
    dislikes: 25,
    created_at: '2024-03-10T15:20:00Z'
  },
  {
    id: 'joke2',
    title: 'Programming Joke',
    image_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    category: 'jokes',
    type: 'detailed',
    description: 'Why do programmers prefer dark mode? Because light attracts bugs!',
    likes: 320,
    dislikes: 18,
    created_at: '2024-03-09T11:45:00Z'
  },
  {
    id: 'joke3',
    title: 'Knock Knock',
    image_url: 'https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2',
    category: 'jokes',
    type: 'detailed',
    description: 'Knock knock! Whos there? Interrupting cow. Interrupting cow w- MOO!',
    likes: 150,
    dislikes: 30,
    created_at: '2024-03-08T14:10:00Z'
  }
];