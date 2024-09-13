import { Suspense } from 'react';
import { Card } from '@/app/ui/episode/cards';
import { getPodcastDetails } from '@/src/application/get.podcast-detail';

export default async function EpisodeDetailPage({
  params
}: {
  params: { podcastId: string; episodeId: string };
}) {
  const podcastDetail = await getPodcastDetails(params.podcastId);
  const id = await params.episodeId;
  return (
    <Suspense>
      <Card episodeId={id} podcastDetail={podcastDetail} />
    </Suspense>
  );
}
