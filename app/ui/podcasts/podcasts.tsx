'use client';

import { useEffect, useState } from 'react';
import PodcastCard from './podcast-card';
import styles from './podcast.module.css';
import Search from '../search';
import { getTopPodcasts } from '@/src/application/get.top-podcasts';

interface Podcast {
  id: string;
  podcastImage: string;
  podcastName: string;
  author: string;
}

interface SearchParamsProps {
  searchParams?: {
    query?: string;
  };
}

export default function Podcasts({ searchParams }: Readonly<SearchParamsProps>) {
  const query = searchParams?.query ?? '';
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    getTopPodcasts().then((result) => {
      setPodcasts(result);
    });
  }, []);

  const filteredPodcasts = podcasts.filter(
    (podcast) =>
      podcast.podcastName.toLowerCase().includes(query.toLowerCase()) ||
      podcast.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Search placeholder="Filter podcasts..." />
      <div className={styles.grid}>
        {filteredPodcasts.map((podcast) => (
          <PodcastCard
            key={podcast.id}
            id={podcast.id}
            image_url={podcast.podcastImage}
            name={podcast.podcastName}
            author={podcast.author}
          />
        ))}
      </div>
    </>
  );
}
