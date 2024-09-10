import Link from 'next/link';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import styles from './sidenav.module.css';

export default function SideNav() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/">
        <MusicalNoteIcon />
      </Link>
      <div className={`${styles.content} md:${styles.contentMd}`}>
        <p className={styles.title}>Song Exploder</p>
        <span className={styles.author}>by Song Exploder</span>
        <p className={styles.description}>Description</p>
        <p className={styles.descriptionText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eius aut praesentium
          corrupti eum repellat veritatis quos qui porro, quibusdam, vel nihil sed, unde enim fuga
          pariatur voluptatibus tempora quas.
        </p>
      </div>
    </div>
  );
}
