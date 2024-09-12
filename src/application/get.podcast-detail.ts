import { LocalCache } from '../infrastructure/cache/local-cache';
import { PodcastDetailResult } from '../infrastructure/podcast-detail.api.entity';
import { PodcastsApiRepository } from '../infrastructure/podcasts.api.repository';

const CACHE_KEY = 'podcast_id_';
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

export async function getPodcastDetails(id: string) {
  const CACHE_KEY_ID = `${CACHE_KEY}${id}`;
  const cachedData = await LocalCache.get<PodcastDetailResult>(CACHE_KEY_ID, ONE_DAY_IN_MS);

  if (cachedData) {
    return cachedData;
  }

  const repository = new PodcastsApiRepository();
  const data = await repository.getPodcastDetails(id);

  await LocalCache.set<PodcastDetailResult>(CACHE_KEY_ID, data.results);

  return data.results;
}
