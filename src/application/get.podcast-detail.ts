import { CACHE_KEY_DETAIL, ONE_DAY_IN_MS } from '@/shared/constants/cache';
import { LocalCache } from '../infrastructure/cache/local-cache';
import { PodcastDetailResult } from '../infrastructure/podcast-detail.api.entity';
import { PodcastsApiRepository } from '../infrastructure/podcasts.api.repository';

export async function getPodcastDetails(id: string) {
  const CACHE_KEY_ID = `${CACHE_KEY_DETAIL}${id}`;
  const cachedData = await LocalCache.get<PodcastDetailResult>(CACHE_KEY_ID, ONE_DAY_IN_MS);

  if (cachedData) {
    return cachedData;
  }

  const repository = new PodcastsApiRepository();
  const data = await repository.getPodcastDetails(id);

  await LocalCache.set<PodcastDetailResult>(CACHE_KEY_ID, data.results);

  return data.results;
}
