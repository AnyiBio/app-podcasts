import { Podcast } from '@/src/domain/podcast';

export class LocalCache {
  static async set(key: string, value: Podcast[]): Promise<void> {
    if (typeof window !== 'undefined') {
      const cacheItem = {
        value,
        timestamp: new Date().getTime()
      };
      localStorage.setItem(key, JSON.stringify(cacheItem));
    }
  }

  static async get(key: string, maxAgeInMs: number): Promise<any | null> {
    if (typeof window !== 'undefined') {
      const cacheItem = localStorage.getItem(key);
      if (cacheItem) {
        const parsedItem = JSON.parse(cacheItem);
        const now = new Date().getTime();

        if (now - parsedItem.timestamp < maxAgeInMs) {
          return parsedItem.value;
        } else {
          localStorage.removeItem(key);
        }
      }
    }
    return null;
  }
}
