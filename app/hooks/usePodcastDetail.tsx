'use client';

import { getPodcastDetails } from '@/src/application/get.podcast-detail';
import { LocalCache } from '@/src/infrastructure/cache/local-cache';
import { PodcastDetailResult } from '@/src/infrastructure/podcast-detail.api.entity';
import { ReactNode, useState, useContext, createContext } from 'react';

interface PodcastDetailContextType {
  podcasts: PodcastDetailResult[] | null;
  fetchPodcasts: (podcastId: string) => Promise<void>;
}

const defaultContextValue: PodcastDetailContextType = {
  podcasts: null,
  fetchPodcasts: async () => {}
};

const PodcastDetailContext = createContext<PodcastDetailContextType>(defaultContextValue);

export const PodcastDetailProvider = ({ children }: { children: ReactNode }) => {
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
    <PodcastDetailContext.Provider value={{ podcasts, fetchPodcasts }}>
      {children}
    </PodcastDetailContext.Provider>
  );
};

export const usePodcastDetailContext = () => {
  const context = useContext(PodcastDetailContext);
  if (context === undefined) {
    throw new Error('usePodcastsContext must be used within a PodcastsProvider');
  }
  return context;
};
