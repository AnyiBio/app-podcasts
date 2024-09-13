import Link from 'next/link';
import styles from './sidenav.module.css';
import Image from 'next/image';
import { fetchAndParseXml } from '@/app/service/parseXml';

interface SideNavProps {
  id: string;
  podcastDetail: any[];
}

export default async function SideNav({ id, podcastDetail }: Readonly<SideNavProps>) {
  const xmlUrl = await podcastDetail?.[0].feedUrl;
  const description: string = await fetchAndParseXml(xmlUrl).then((res) => res?.description);
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={`/podcast/${id}`}>
        <Image
          src={podcastDetail?.[0].artworkUrl600 || ''}
          width={1000}
          height={760}
          className="hidden md:block"
          alt="podcast image"
        />
      </Link>
      <div className={`${styles.content} md:${styles.contentMd} || ''`}>
        <p className={styles.title}>{`${podcastDetail?.[0].trackName || ''}`}</p>
        <span className={styles.author}>{`by ${podcastDetail?.[0].artistName || ''}`}</span>
        <p className={styles.description}>Description</p>
        <p className={styles.descriptionText}>{description}</p>
      </div>
    </div>
  );
}
