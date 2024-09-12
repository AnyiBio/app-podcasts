import { CACHE_KEY_TOP, ONE_DAY_IN_MS } from '@/shared/constants/cache';
import { Podcast } from '../domain/podcast';
import { LocalCache } from '../infrastructure/cache/local-cache';
import { PodcastsApiRepository } from '../infrastructure/podcasts.api.repository';
import { mapPodcastsFromApiToVm } from '../infrastructure/podcasts.mapper';

export async function getTopPodcasts() {
  const cachedData = await LocalCache.get<Podcast>(CACHE_KEY_TOP, ONE_DAY_IN_MS);

  if (cachedData) {
    return cachedData;
  }

  const repository = new PodcastsApiRepository();
  const data = await repository.getTopPodcasts();
  const podcasts = mapPodcastsFromApiToVm(data.feed.entry);

  await LocalCache.set<Podcast>(CACHE_KEY_TOP, podcasts);

  return podcasts;
}
