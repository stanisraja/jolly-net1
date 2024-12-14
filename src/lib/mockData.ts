import { ContentItem } from '../types/content';

export const mockData: ContentItem[] = [
  // Movies
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
  },

  // Memes
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
  },

  // Jokes
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
  },

  // Fun Facts
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
  },

  // Quotes
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
  },

  // Trivia
  {
    id: 'trivia1',
    title: 'Science Trivia',
    image_url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31',
    category: 'trivia',
    type: 'trivia',
    options: [
      'Mercury',
      'Venus',
      'Mars',
      'Jupiter'
    ],
    correct_answer: 1,
    description: 'Which planet is the hottest in our solar system?',
    likes: 180,
    dislikes: 8,
    created_at: '2024-03-14T10:25:00Z'
  },
  {
    id: 'trivia2',
    title: 'History Trivia',
    image_url: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882',
    category: 'trivia',
    type: 'trivia',
    options: [
      '1492',
      '1776',
      '1066',
      '1215'
    ],
    correct_answer: 0,
    description: 'In which year did Christopher Columbus first reach the Americas?',
    likes: 165,
    dislikes: 12,
    created_at: '2024-03-13T15:40:00Z'
  },
  {
    id: 'trivia3',
    title: 'Geography Trivia',
    image_url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1',
    category: 'trivia',
    type: 'trivia',
    options: [
      'Russia',
      'Canada',
      'China',
      'USA'
    ],
    correct_answer: 0,
    description: 'Which is the largest country in the world by land area?',
    likes: 195,
    dislikes: 7,
    created_at: '2024-03-12T12:35:00Z'
  }
];