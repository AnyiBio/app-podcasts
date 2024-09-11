import { Suspense } from 'react';
import Podcasts from './ui/podcasts/podcasts';
import { CardSkeleton } from './ui/skeletons';

export default function Page({
  searchParams
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  return (
    <main className="">
      <Suspense fallback={<CardSkeleton />}>
        <Podcasts searchParams={{ query }} />
      </Suspense>
    </main>
  );
}
