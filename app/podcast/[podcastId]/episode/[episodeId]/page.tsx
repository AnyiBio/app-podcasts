import { Suspense } from 'react';
import { Card } from '@/app/ui/episode/cards';

export default function EpisodeDetail() {
  return (
    <>
      <Suspense>
        <Card title="title" value="value" type="episode" />
        <audio controls>
          <source src="path/to/your-audio-file.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </Suspense>
    </>
  );
}
