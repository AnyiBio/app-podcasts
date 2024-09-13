'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './sidenav.module.css';
import Image from 'next/image';
import { fetchAndParseXml } from '@/app/service/parseXml';
import { getPodcastDetails } from '@/src/application/get.podcast-detail';

interface SideNavProps {
  id: string;
}

export default function SideNav({ id }: Readonly<SideNavProps>) {
  const [podcastDetail, setPodcastDetails] = useState<any[]>();
  const [description, setDescription] = useState('');
  const containsHTML = /<\/?[a-z][\s\S]*>/i.test(description);

  useEffect(() => {
    if (!!id) {
      getPodcastDetails(id).then((res) => {
        setPodcastDetails(res);
      });
    }
  }, [id]);

  useEffect(() => {
    if (!!podcastDetail) {
      const xmlUrl = podcastDetail?.[0].feedUrl;
      fetchAndParseXml(xmlUrl).then((res) => {
        setDescription(res?.description);
      });
    }
  }, [podcastDetail]);

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
        {containsHTML ? (
          <div dangerouslySetInnerHTML={{ __html: description }} />
        ) : (
          <p className={styles.descriptionText}>{description}</p>
        )}
      </div>
    </div>
  );
}
