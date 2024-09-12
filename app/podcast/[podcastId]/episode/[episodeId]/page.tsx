import { Suspense } from 'react';
import { Card } from '@/app/ui/episode/cards';

export default function EpisodeDetailPage({
  params
}: {
  params: { podcastId: string; episodeId: string };
}) {
  return (
    <>
      <Suspense>
        <Card podcastId={params.podcastId} episodeId={params.episodeId} />
      </Suspense>
    </>
  );
}
