import { ApiPodcasts } from './podcasts.api.entity';

export class PodcastsApiRepository {
  async getTopPodcasts(): Promise<ApiPodcasts> {
    const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
    const response = await fetch(url);
    return await response.json();
  }
}
