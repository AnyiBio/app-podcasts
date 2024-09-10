import { PodcastsApiRepository } from '../infraestructure/podcasts.api.repository';
import { mapPodcastsFromApiToVm } from '../infraestructure/podcasts.mapper';

export async function getTopPodcasts() {
  const repository = new PodcastsApiRepository();
  const data = await repository.getTopPodcasts();
  const podcasts = mapPodcastsFromApiToVm(data.feed.entry);

  return podcasts;
}
