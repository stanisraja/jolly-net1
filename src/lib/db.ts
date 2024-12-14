import Dexie, { Table } from 'dexie';
import { ContentItem } from '../types/content';
import { mockData } from './mockData';

export class ContentDB extends Dexie {
  content!: Table<ContentItem>;

  constructor() {
    super('contentDB');
    this.version(1).stores({
      content: '++id, category, type, created_at'
    });

    // Add hooks for automatic timestamps
    this.content.hook('creating', (primKey, obj) => {
      obj.created_at = obj.created_at || new Date().toISOString();
      return obj;
    });
  }

  async initializeWithMockData() {
    try {
      const count = await this.content.count();
      if (count === 0) {
        console.log('Initializing database with mock data...');
        await this.content.bulkAdd(mockData);
        console.log('Mock data initialized successfully');
      }
    } catch (error) {
      console.error('Error initializing mock data:', error);
    }
  }

  async getRandomContent(category?: string): Promise<ContentItem | undefined> {
    try {
      let collection = this.content;
      
      if (category && category !== 'home') {
        collection = collection.where('category').equals(category);
      }

      const count = await collection.count();
      if (count === 0) return undefined;

      const randomOffset = Math.floor(Math.random() * count);
      const items = await collection.offset(randomOffset).limit(1).toArray();
      
      return items[0];
    } catch (error) {
      console.error('Error fetching random content:', error);
      return undefined;
    }
  }

  async updateLikes(id: string, type: 'like' | 'dislike'): Promise<boolean> {
    try {
      const content = await this.content.get(id);
      if (!content) return false;

      const field = type === 'like' ? 'likes' : 'dislikes';
      await this.content.update(id, {
        [field]: content[field] + 1
      });

      return true;
    } catch (error) {
      console.error('Error updating likes:', error);
      return false;
    }
  }
}

export const db = new ContentDB();

// Initialize the database with mock data
db.initializeWithMockData().catch(console.error);