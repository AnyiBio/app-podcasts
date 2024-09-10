import PodcastCard from './podcast-card';
import styles from './podcast.module.css';
import Search from '../search';
import { getTopPodcasts } from '@/src/application/get.top-podcasts';

export default async function Podcasts() {
  const podcasts = await getTopPodcasts();

  return (
    <>
      <Search placeholder="Filter podcasts..." />
      <div className={styles.grid}>
        {podcasts.map((podcast) => (
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
