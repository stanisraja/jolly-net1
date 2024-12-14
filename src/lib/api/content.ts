import { collection, query, where, getDocs, orderBy, limit, startAfter, Timestamp, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { ContentItem } from '../../types/content';
import { getCategoryId } from '../../data/categories';

const BATCH_SIZE = 10;

export async function fetchRandomContent(category?: string, lastDoc?: any) {
  try {
    const baseQuery = collection(db, 'content');
    let constraints = [orderBy('created_at', 'desc')];

    if (category && category !== 'home') {
      const categoryId = getCategoryId(`/${category}`);
      constraints = [
        where('category', '==', categoryId),
        ...constraints
      ];
    }

    if (lastDoc) {
      constraints.push(startAfter(lastDoc));
    }

    constraints.push(limit(BATCH_SIZE));

    const q = query(baseQuery, ...constraints);
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return {
        content: [],
        lastDoc: null,
        hasMore: false
      };
    }

    const content: ContentItem[] = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        created_at: data.created_at instanceof Timestamp 
          ? data.created_at.toDate().toISOString()
          : data.created_at
      } as ContentItem;
    });

    return {
      content,
      lastDoc: snapshot.docs[snapshot.docs.length - 1],
      hasMore: content.length === BATCH_SIZE
    };
  } catch (error) {
    console.error('Error fetching content:', error);
    throw error;
  }
}

export async function updateContentLikes(contentId: string, type: 'like' | 'dislike') {
  try {
    const docRef = doc(db, 'content', contentId);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      return false;
    }

    const field = type === 'like' ? 'likes' : 'dislikes';
    const currentValue = docSnap.data()[field] || 0;
    
    await updateDoc(docRef, {
      [field]: currentValue + 1
    });
    
    return true;
  } catch (error) {
    console.error('Error updating likes:', error);
    return false;
  }
}