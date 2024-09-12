'use client';

import { getPodcastDetails } from '@/src/application/get.podcast-detail';
import { LocalCache } from '@/src/infrastructure/cache/local-cache';
import { PodcastDetailResult } from '@/src/infrastructure/podcast-detail.api.entity';
import { ReactNode, useState, useContext, createContext } from 'react';

interface PodcastDetailContextType {
  podcastDetail: PodcastDetailResult[] | null;
  fetchPodcastDetail: (podcastId: string) => Promise<void>;
}

const defaultContextValue: PodcastDetailContextType = {
  podcastDetail: null,
  fetchPodcastDetail: async () => {}
};

const PodcastDetailContext = createContext<PodcastDetailContextType>(defaultContextValue);

export const PodcastDetailProvider = ({ children }: { children: ReactNode }) => {
  const [podcastDetail, setPodcastDetail] = useState<PodcastDetailResult[] | null>(null);
  const fetchPodcastDetail = async (podcastId: string) => {
    const cacheKey = `podcast_id_${podcastId}`;

    const cachedData = await LocalCache.get<PodcastDetailResult>(cacheKey, 24 * 60 * 60 * 1000);
    if (cachedData) {
      setPodcastDetail(cachedData);
    } else {
      const data = await getPodcastDetails(podcastId);
      setPodcastDetail(data);
      await LocalCache.set<PodcastDetailResult>(cacheKey, data);
    }
  };

  return (
    <PodcastDetailContext.Provider value={{ podcastDetail, fetchPodcastDetail }}>
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
