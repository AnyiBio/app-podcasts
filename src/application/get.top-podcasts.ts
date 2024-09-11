import { LocalCache } from '../infrastructure/cache/local-cache';
import { PodcastsApiRepository } from '../infrastructure/podcasts.api.repository';
import { mapPodcastsFromApiToVm } from '../infrastructure/podcasts.mapper';

const CACHE_KEY = 'topPodcasts';
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

export async function getTopPodcasts() {
  const cachedData = await LocalCache.get(CACHE_KEY, ONE_DAY_IN_MS);

  if (cachedData) {
    return cachedData;
  }

  const repository = new PodcastsApiRepository();
  const data = await repository.getTopPodcasts();
  const podcasts = mapPodcastsFromApiToVm(data.feed.entry);

  await LocalCache.set(CACHE_KEY, podcasts);

  return podcasts;
}

