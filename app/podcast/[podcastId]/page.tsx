import { Suspense } from 'react';
import EpisodesTable from '../../ui/episodes/table';
import { CardSkeleton } from '@/app/ui/skeletons';
import { getPodcastDetails } from '@/src/application/get.podcast-detail';

export default async function PodcastDetailPage({ params }: { params: { podcastId: string } }) {
  const podcastDetail = await getPodcastDetails(params.podcastId);
  const id = await params.podcastId;
  return (
    <Suspense fallback={<CardSkeleton />}>
      <EpisodesTable id={id} podcastDetail={podcastDetail} />
    </Suspense>
  );
}
