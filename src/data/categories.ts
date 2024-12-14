export const categories = [
  { id: 'home', name: 'Home', path: '/' },
  { id: 'movies', name: 'Movies', path: '/movies' },
  { id: 'memes', name: 'Memes', path: '/memes' },
  { id: 'jokes', name: 'Jokes', path: '/jokes' },
  { id: 'fun-facts', name: 'Fun Facts', path: '/fun-facts' },
  { id: 'quotes', name: 'Quotes', path: '/quotes' },
  { id: 'trivia', name: 'Trivia', path: '/trivia' },
  { id: 'short-stories', name: 'Short Stories', path: '/stories' }
] as const;

export type CategoryId = typeof categories[number]['id'];

export function getCategoryId(path: string): CategoryId {
  const category = categories.find(c => c.path === path);
  return category ? category.id : 'home';
}