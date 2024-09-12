import { parseStringPromise } from 'xml2js';

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
      id: item.guid[0]._,
      title: item.title[0],
      date: item.pubDate[0],
      duration: item['itunes:duration'][0],
      link: item.link[0]
    }));

    return {
      description,
      episodes
    };
  } catch (error) {
    console.error('Error fetching or parsing XML:', error);
    return null;
  }
}
