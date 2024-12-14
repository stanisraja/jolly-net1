import { ContentItem } from '../schema/content';

export interface Schema {
  content: ContentItem;
}

export const DB_NAME = 'jollyswipeDB';
export const DB_VERSION = 1;

export const schema = {
  content: '++id, category, type, created_at, likes, dislikes'
};