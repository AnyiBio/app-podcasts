'use client';

import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type FormattedEpisodesTable = {
  id: string;
  title: string;
  date: string;
  duration: string;
};

const episodes: FormattedEpisodesTable[] = [
  {
    id: '1',
    title: 'The Future of Technology',
    date: '05/09/2024',
    duration: '01:15'
  },
  {
    id: '2',
    title: 'Health and Wellness Tips',
    date: '02/09/2024',
    duration: '00:45'
  },
  {
    id: '3',
    title: "Space Exploration: What's Next?",
    date: '28/08/2024',
    duration: '01:30'
  },
  {
    id: '4',
    title: 'Financial Freedom and You',
    date: '22/08/2024',
    duration: '00:50'
  },
  {
    id: '5',
    title: 'The Art of Mindfulness',
    date: '15/08/2024',
    duration: '01:00'
  }
];

export default async function EpisodesTable() {
  const pathname = usePathname();
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>Episodes</h1>
      <Search placeholder="Search episodes..." />
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
                        <p className="text-sm text-gray-500">{episode.date}</p>
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
                  {episodes.map((episode) => (
                    <tr key={episode.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Link href={`${pathname}/episode/${episode.id}`}>
                            <p>{episode.title}</p>
                          </Link>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {episode.date}
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
