import { parseStringPromise } from 'xml2js';
import extractField, { extractGuid } from '../helpers/extract-guid';

export async function fetchAndParseXml(xmlUrl: string) {
  try {
    const response = await fetch(xmlUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch XML: ${response.statusText}`);
    }
    const xmlData = await response.text();
    const result = await parseStringPromise(xmlData);
    const description = result.rss.channel[0].description[0];

    const episodes = result.rss.channel[0].item.map((item: any) => ({
      id: extractGuid(item),
      title: item.title[0],
      date: item.pubDate[0],
      duration: extractField<string>(item, 'itunes:duration')
    }));

    const episodesDetail = result.rss.channel[0].item.map((item: any) => ({
      id: extractGuid(item),
      title: item.title[0],
      description: item.description[0],
      audio: extractField<any>(item, 'enclosure')
    }));

    return {
      description,
      episodes,
      episodesDetail
    };
  } catch (error) {
    console.error('Error fetching or parsing XML:', error);
    return null;
  }
}
