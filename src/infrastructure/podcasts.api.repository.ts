import { PodcastDetailApiResponse } from './podcast-detail.api.entity';
import { PodcastsApiResponse } from './podcasts.api.entity';

export class PodcastsApiRepository {
  async getTopPodcasts(): Promise<PodcastsApiResponse> {
    const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
    const response = await fetch(url);
    return await response.json();
  }

  async getPodcastDetails(podcastId: string): Promise<PodcastDetailApiResponse> {
    const url = `https://itunes.apple.com/lookup?id=${podcastId}`;
    const response = await fetch(url);
    return await response.json();
  }
}
