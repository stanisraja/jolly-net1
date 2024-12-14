import { ContentItem } from '../schema/content';
import { movies } from './movies';
import { memes } from './memes';
import { jokes } from './jokes';
import { funFacts } from './funFacts';
import { quotes } from './quotes';
import { trivia } from './trivia';
import { stories } from './stories';

export const mockData: ContentItem[] = [
  ...movies,
  ...memes,
  ...jokes,
  ...funFacts,
  ...quotes,
  ...trivia,
  ...stories
];