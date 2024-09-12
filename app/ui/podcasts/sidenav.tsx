'use client';

import Link from 'next/link';
import styles from './sidenav.module.css';
import { usePodcastsContext } from '@/app/hooks/usePodcast';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchAndParseXml } from '@/app/service/parseXml';

interface SideNavProps {
  id: string;
}

export default function SideNav({ id }: Readonly<SideNavProps>) {
  const { podcasts, fetchPodcasts } = usePodcastsContext();
  const [descripton, setDescription] = useState('');
  useEffect(() => {
    if (id) {
      fetchPodcasts(id);
    }
  }, [id]);

  useEffect(() => {
    if (!!podcasts) {
      const xmlUrl = podcasts?.[0].feedUrl;
      fetchAndParseXml(xmlUrl).then((res) => {
        setDescription(res?.description);
      });
    }
  }, [podcasts]);
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={`/podcast/${id}`}>
        <Image
          src={podcasts?.[0].artworkUrl600 || ''}
          width={1000}
          height={760}
          className="hidden md:block"
          alt="podcast image"
        />
      </Link>
      <div className={`${styles.content} md:${styles.contentMd}`}>
        <p className={styles.title}>{`${podcasts?.[0].trackName}`}</p>
        <span className={styles.author}>{`by ${podcasts?.[0].artistName} `}</span>
        <p className={styles.description}>Description</p>
        <p className={styles.descriptionText}>{descripton}</p>
      </div>
    </div>
  );
}
