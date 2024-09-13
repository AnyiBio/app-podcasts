import { PodcastDetailApiResponse } from './podcast-detail.api.entity';
import { PodcastsApiResponse } from './podcasts.api.entity';

export class PodcastsApiRepository {
  async getTopPodcasts(): Promise<PodcastsApiResponse> {
    const url = process.env.NEXT_PUBLIC_API_TOP_PODCAST || '';
    const response = await fetch(url);
    return await response.json();
  }

  async getPodcastDetails(podcastId: string): Promise<PodcastDetailApiResponse> {
    const url = `${process.env.NEXT_PUBLIC_API_PODCAST_DETAIL}${podcastId}`;
    const response = await fetch(url);
    return await response.json();
  }
}
