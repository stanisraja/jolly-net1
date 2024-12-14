import { ContentItem } from '../schema/content';

export const movies: ContentItem[] = [
  {
    id: 'movie1',
    title: 'Inception Behind the Scenes',
    image_url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
    category: 'movies',
    type: 'detailed',
    description: 'The rotating hallway scene was filmed using a giant rotating set, not CGI!',
    likes: 245,
    dislikes: 12,
    created_at: '2024-03-11T14:30:00Z'
  },
  {
    id: 'movie2',
    title: 'Classic Movie Poster',
    image_url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    category: 'movies',
    type: 'basic',
    likes: 180,
    dislikes: 8,
    created_at: '2024-03-10T10:15:00Z'
  },
  {
    id: 'movie3',
    title: 'Movie Trivia',
    image_url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
    category: 'movies',
    type: 'trivia',
    options: [
      'Titanic',
      'Avatar',
      'Star Wars: The Force Awakens',
      'Avengers: Endgame'
    ],
    correct_answer: 1,
    description: 'Which movie held the record for highest-grossing film of all time for over a decade?',
    likes: 156,
    dislikes: 4,
    created_at: '2024-03-09T16:20:00Z'
  }
];