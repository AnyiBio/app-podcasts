'use client';

import formatDate from '@/app/helpers/format-date';
import { usePodcastDetailContext } from '@/app/hooks/usePodcastDetail';
import { fetchAndParseXml } from '@/app/service/parseXml';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type FormattedEpisodesTable = {
  id: string;
  title: string;
  duration: string;
  date: string;
};
interface EpisodesTableProps {
  id: string;
}

export default function EpisodesTable({ id }: Readonly<EpisodesTableProps>) {
  const { podcasts, fetchPodcasts } = usePodcastDetailContext();
  const [episodes, setEpisodes] = useState([
    {
      id: '',
      title: '',
      date: '',
      duration: '',
      link: ''
    }
  ]);

  useEffect(() => {
    if (id) {
      fetchPodcasts(id);
    }
  }, [id]);

  useEffect(() => {
    if (!!podcasts) {
      const xmlUrl = podcasts?.[0].feedUrl;
      fetchAndParseXml(xmlUrl).then((res) => {
        setEpisodes(res?.episodes);
      });
    }
  }, [podcasts]);
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>Episodes</h1>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {episodes?.map((episode) => (
                  <div key={episode.id} className="mb-2 w-full rounded-md bg-white p-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <p>{episode.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Pending</p>
                        <p className="font-medium">{episode.duration}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{episode.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Date
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Duration
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {episodes?.map((episode) => (
                    <tr key={episode.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Link href={`/podcast/${id}/episode/${episode.id}`}>
                            <p>{episode.title}</p>
                          </Link>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {formatDate(episode.date)}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {episode.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
