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
          alt="avatar podcast image desktop"
          width={100}
          height={100}
          className={styles.image}
        />
        <Image
          src={image_url || ''}
          width={560}
          height={620}
          className="block md:hidden"
          alt="avatar podcast image desktop showing mobile version"
        />
      </Link>
      <Link href={`/podcast/${id}`}>
        <p className={styles.name}>{name}</p>
      </Link>
      <p className={styles.author}>{author}</p>
    </div>
  );
}
