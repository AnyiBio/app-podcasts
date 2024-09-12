export class LocalCache<T> {
  static async set<T>(key: string, value: T[]): Promise<void> {
    if (typeof window !== 'undefined') {
      const cacheItem = {
        value,
        timestamp: new Date().getTime()
      };
      localStorage.setItem(key, JSON.stringify(cacheItem));
    }
  }

  static async get<T>(key: string, maxAgeInMs: number): Promise<T[] | null> {
    if (typeof window !== 'undefined') {
      const cacheItem = localStorage.getItem(key);
      if (cacheItem) {
        const parsedItem = JSON.parse(cacheItem) as { value: T[]; timestamp: number };
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
