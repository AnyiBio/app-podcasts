import { Suspense } from 'react';
import EpisodesTable from '../../ui/episodes/table';
import { CardSkeleton } from '@/app/ui/skeletons';

export default function PodcastDetailPage({ params }: { params: { podcastId: string } }) {
  return (
    <Suspense fallback={<CardSkeleton />}>
      <EpisodesTable id={params.podcastId} />
    </Suspense>
  );
}
