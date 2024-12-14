import { ContentItem } from '../schema/content';

export const funFacts: ContentItem[] = [
  {
    id: 'fact1',
    title: 'Space Fact',
    image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    category: 'fun-facts',
    type: 'detailed',
    description: 'One day on Venus is longer than one year on Venus!',
    likes: 280,
    dislikes: 5,
    created_at: '2024-03-14T13:25:00Z'
  },
  {
    id: 'fact2',
    title: 'Ocean Fact',
    image_url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
    category: 'fun-facts',
    type: 'detailed',
    description: 'The ocean contains 99% of the living space on the planet!',
    likes: 210,
    dislikes: 8,
    created_at: '2024-03-13T10:40:00Z'
  },
  {
    id: 'fact3',
    title: 'Animal Fact',
    image_url: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5',
    category: 'fun-facts',
    type: 'detailed',
    description: 'A sloths metabolism is so slow that it can take up to a month to digest one leaf!',
    likes: 245,
    dislikes: 6,
    created_at: '2024-03-12T15:55:00Z'
  }
];