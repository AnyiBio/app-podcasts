import { Podcast } from '../domain/podcast';
import { ApiEntry } from './podcasts.api.entity';

export const mapPodcastsFromApiToVm = (entries: ApiEntry[]): Podcast[] => {
  return entries.map((entry) => {
    const image170 = entry['im:image'].find((image) => image.attributes.height === '170');
    const fallbackImage = entry['im:image'][entry['im:image'].length - 1];

    return {
      id: entry.id.attributes['im:id'],
      author: entry['im:artist'].label,
      podcastName: entry['im:name'].label,
      podcastImage: image170 ? image170.label : fallbackImage.label
    };
  });
};
