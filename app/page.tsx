import { Suspense } from 'react';
import Podcasts from './ui/podcasts/podcasts';
import { CardSkeleton } from './ui/skeletons';

export default function Page() {
  return (
    <main className="">
      <Suspense fallback={<CardSkeleton />}>
        <Podcasts />
      </Suspense>
    </main>
  );
}
