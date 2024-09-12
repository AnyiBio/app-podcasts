'use client';

import { usePodcastDetailContext } from '@/app/hooks/usePodcastDetail';
import { lusitana } from '../fonts';
import { useEffect, useState } from 'react';
import { fetchAndParseXml } from '@/app/service/parseXml';

interface EpisodeDetailProps {
  podcastId: string;
  episodeId: string;
}

export function Card({ podcastId, episodeId }: Readonly<EpisodeDetailProps>) {
  const { podcastDetail, fetchPodcastDetail } = usePodcastDetailContext();
  const [episodeDetail, setEpisodeDetail] = useState({
    id: '',
    description: '',
    title: '',
    audio: {
      $: {
        length: '',
        type: '',
        url: ''
      }
    }
  });

  useEffect(() => {
    if (podcastId) {
      fetchPodcastDetail(podcastId);
    }
  }, [podcastId]);

  useEffect(() => {
    if (!!podcastDetail) {
      const xmlUrl = podcastDetail?.[0].feedUrl;
      console.log(podcastDetail);
      fetchAndParseXml(xmlUrl).then((res) => {
        if (res?.episodes) {
          const foundEpisode = res.episodesDetail.find((ep: any) => ep.id === episodeId);
          setEpisodeDetail(foundEpisode);
        }
      });
    }
    console.log(episodeDetail, 'episode detail');
  }, [podcastDetail]);

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{episodeDetail.title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          bg-white px-4 py-8 text-2xl`}
        dangerouslySetInnerHTML={{ __html: episodeDetail.description }}
      />
      {episodeDetail.audio.$.url ? (
        <audio controls>
          <source src={episodeDetail.audio.$.url} type={episodeDetail.audio.$.type} />
          Your browser does not support the audio element.
        </audio>
      ) : (
        ''
      )}
    </div>
  );
}
