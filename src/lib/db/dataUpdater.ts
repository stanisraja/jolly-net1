import { db } from './db';
import { ContentItem } from '../../types/content';

const UPDATE_INTERVAL = 3600000; // 1 hour in milliseconds
const UPDATE_ENDPOINT = 'http://localhost:8000/update';

export async function startDataUpdateService() {
    async function checkForUpdates() {
        try {
            const response = await fetch(UPDATE_ENDPOINT);
            if (!response.ok) {
                throw new Error('Update service returned an error');
            }

            const data = await response.json();
            if (data.updates && data.updates.length > 0) {
                await db.content.bulkAdd(data.updates);
                console.log(`Added ${data.updates.length} new items at ${data.timestamp}`);
            }
        } catch (error) {
            console.error('Error checking for updates:', error);
        }
    }

    // Initial check
    await checkForUpdates();

    // Set up periodic checks
    setInterval(checkForUpdates, UPDATE_INTERVAL);
}

export async function manualUpdate(): Promise<number> {
    try {
        const response = await fetch(UPDATE_ENDPOINT);
        if (!response.ok) {
            throw new Error('Update service returned an error');
        }

        const data = await response.json();
        if (data.updates && data.updates.length > 0) {
            await db.content.bulkAdd(data.updates);
            return data.updates.length;
        }
        return 0;
    } catch (error) {
        console.error('Error performing manual update:', error);
        throw error;
    }
}