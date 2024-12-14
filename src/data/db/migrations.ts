import { ContentDB } from './db';
import { mockData } from '../mock';

export async function runMigrations(db: ContentDB) {
  // Version 1: Initial schema
  if (db.verno === 1) {
    const count = await db.content.count();
    if (count === 0) {
      console.log('Running initial data migration...');
      await db.content.bulkAdd(mockData);
    }
  }
}