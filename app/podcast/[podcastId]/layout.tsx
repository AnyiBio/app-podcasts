import { Suspense } from 'react';
import SideNav from '../../ui/podcasts/sidenav';
import { getPodcastDetails } from '@/src/application/get.podcast-detail';

export default async function Layout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {
    podcastId: string;
  };
}) {
  const podcastDetail = await getPodcastDetails(params.podcastId);
  const id = await params.podcastId;
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden my-10">
      <div className="w-full flex-none md:w-64">
        <Suspense fallback={<div>loading...</div>}>
          <SideNav id={id} podcastDetail={podcastDetail} />
        </Suspense>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
