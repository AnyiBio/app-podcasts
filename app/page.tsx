import React, { Suspense } from 'react';
import { CardSkeleton } from './ui/skeletons';

const Podcasts = React.lazy(() => import('./ui/podcasts/podcasts'));

export default async function Page({
  searchParams
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = (await searchParams?.query) || '';
  return (
    <main className="">
      <Suspense fallback={<CardSkeleton />}>
        <Podcasts searchParams={{ query }} />
      </Suspense>
    </main>
  );
}
