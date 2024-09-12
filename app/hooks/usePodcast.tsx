'use client';

import { getPodcastDetails } from '@/src/application/get.podcast-detail';
import { LocalCache } from '@/src/infrastructure/cache/local-cache';
import { PodcastDetailResult } from '@/src/infrastructure/podcast-detail.api.entity';
import { ReactNode, useState, useContext, createContext } from 'react';

interface PodcastsContextType {
  podcasts: PodcastDetailResult[] | null;
  fetchPodcasts: (podcastId: string) => Promise<void>;
}

const defaultContextValue: PodcastsContextType = {
  podcasts: null,
  fetchPodcasts: async () => {}
};

const PodcastsContext = createContext<PodcastsContextType>(defaultContextValue);

export const PodcastsProvider = ({ children }: { children: ReactNode }) => {
  const [podcasts, setPodcasts] = useState<PodcastDetailResult[] | null>(null);
  const fetchPodcasts = async (podcastId: string) => {
    const cacheKey = `podcast_id_${podcastId}`;

    const cachedData = await LocalCache.get<PodcastDetailResult>(cacheKey, 24 * 60 * 60 * 1000);
    if (cachedData) {
      setPodcasts(cachedData);
    } else {
      const data = await getPodcastDetails(podcastId);
      setPodcasts(data);
      await LocalCache.set<PodcastDetailResult>(cacheKey, data);
    }
  };

  return (
    <PodcastsContext.Provider value={{ podcasts, fetchPodcasts }}>
      {children}
    </PodcastsContext.Provider>
  );
};

export const usePodcastsContext = () => {
  const context = useContext(PodcastsContext);
  if (context === undefined) {
    throw new Error('usePodcastsContext must be used within a PodcastsProvider');
  }
  return context;
};
