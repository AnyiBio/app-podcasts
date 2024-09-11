export interface ApiPodcasts {
  feed: {
    author: {
      name: {
        label: string;
      };
      uri: {
        label: string;
      };
    };
    entry: ApiEntry[];
  };
}

export interface ApiEntry {
  'im:name': {
    label: string;
  };
  'im:image': Array<{
    label: string;
    attributes: {
      height: string;
    };
  }>;
  summary?: {
    label: string;
  };
  'im:price'?: {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  'im:contentType'?: {
    attributes: {
      term: string;
      label: string;
    };
  };
  rights?: {
    label: string;
  };
  title: {
    label: string;
  };
  link?: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };
  id: {
    label: string;
    attributes: {
      'im:id': string;
    };
  };
  'im:artist': {
    label: string;
    attributes?: {
      href: string;
    };
  };
}
