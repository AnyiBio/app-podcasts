'use client';

import { Suspense } from 'react';
import SideNav from '../../ui/podcasts/sidenav';
import { PodcastsProvider } from '@/app/hooks/usePodcast';

export default function Layout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {
    podcastId: string;
  };
}) {
  return (
    <PodcastsProvider>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <Suspense fallback={<div>loading...</div>}>
            <SideNav id={params.podcastId} />
          </Suspense>
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </PodcastsProvider>
  );
}
