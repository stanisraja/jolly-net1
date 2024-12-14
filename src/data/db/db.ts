import Dexie from 'dexie';
import { Schema, DB_NAME, DB_VERSION, schema } from './schema';
import { runMigrations } from './migrations';
import { ContentItem } from '../schema/content';

export class ContentDB extends Dexie {
  content!: Dexie.Table<ContentItem, string>;

  constructor() {
    super(DB_NAME);
    this.version(DB_VERSION).stores(schema);
  }

  async initialize() {
    try {
      await runMigrations(this);
      console.log('Database initialized successfully');
    } catch (error) {
      console.error('Database initialization failed:', error);
      throw error;
    }
  }
}

export const db = new ContentDB();

// Initialize the database
db.initialize().catch(console.error);