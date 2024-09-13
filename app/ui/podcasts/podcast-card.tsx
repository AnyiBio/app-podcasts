import styles from './podcast.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface PodcastProps {
  id: string;
  image_url: string;
  name: string;
  author: string;
}

export default function PodcastCard({ id, image_url, name, author }: PodcastProps) {
  return (
    <div className={styles.card}>
      <Link href={`/podcast/${id}`}>
        <Image
          src={image_url || ''}
          alt={`${name} cover`}
          width={100}
          height={100}
          className={styles.image}
        />
      </Link>
      <Link href={`/podcast/${id}`}>
        <p className={styles.name}>{name}</p>
      </Link>
      <p className={styles.author}>{author}</p>
    </div>
  );
}
