import React, { Suspense } from 'react';
import { CardSkeleton } from './ui/skeletons';

const Podcasts = React.lazy(() => import('./ui/podcasts/podcasts'));

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
