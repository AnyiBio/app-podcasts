import { lusitana } from '../fonts';
import { fetchAndParseXml } from '@/app/service/parseXml';

interface EpisodeDetailProps {
  episodeId: string;
  podcastDetail: any[];
}

export async function Card({ episodeId, podcastDetail }: Readonly<EpisodeDetailProps>) {
  const xmlUrl = await podcastDetail?.[0].feedUrl;
  const episodeDetail = await fetchAndParseXml(xmlUrl).then((res) => {
    if (res?.episodes) {
      return res.episodesDetail.find((ep: any) => ep.id === episodeId);
    }
  });

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
