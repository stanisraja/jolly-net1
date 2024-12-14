import { db } from './db';
import { ContentItem } from '../schema/content';

export async function getRandomContent(category?: string): Promise<ContentItem | null> {
  try {
    let collection = db.content;
    
    if (category && category !== 'home') {
      collection = collection.where('category').equals(category);
    }

    const count = await collection.count();
    if (count === 0) return null;

    const randomOffset = Math.floor(Math.random() * count);
    const items = await collection.offset(randomOffset).limit(1).toArray();
    
    return items[0] || null;
  } catch (error) {
    console.error('Error fetching random content:', error);
    return null;
  }
}

export async function updateContentLikes(
  contentId: string,
  type: 'like' | 'dislike'
): Promise<boolean> {
  try {
    const content = await db.content.get(contentId);
    if (!content) return false;

    const field = type === 'like' ? 'likes' : 'dislikes';
    await db.content.update(contentId, {
      [field]: content[field] + 1
    });

    return true;
  } catch (error) {
    console.error(`Error updating ${type}:`, error);
    return false;
  }
}

export async function addContent(content: Omit<ContentItem, 'id'>): Promise<string> {
  try {
    const id = await db.content.add({
      ...content,
      likes: content.likes || 0,
      dislikes: content.dislikes || 0,
      created_at: content.created_at || new Date().toISOString()
    });
    return String(id);
  } catch (error) {
    console.error('Error adding content:', error);
    throw new Error('Failed to add content');
  }
}

export async function bulkAddContent(items: Omit<ContentItem, 'id'>[]): Promise<void> {
  try {
    await db.content.bulkAdd(items.map(item => ({
      ...item,
      likes: item.likes || 0,
      dislikes: item.dislikes || 0,
      created_at: item.created_at || new Date().toISOString()
    })));
  } catch (error) {
    console.error('Error bulk adding content:', error);
    throw new Error('Failed to bulk add content');
  }
}

export async function getAllContent(): Promise<ContentItem[]> {
  return await db.content.toArray();
}

export async function getContentByCategory(category: string): Promise<ContentItem[]> {
  return await db.content.where('category').equals(category).toArray();
}

export async function deleteContent(id: string): Promise<void> {
  await db.content.delete(id);
}

export async function clearAllContent(): Promise<void> {
  await db.content.clear();
}