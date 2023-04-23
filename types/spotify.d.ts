export type NowPlaying = {
  timestamp: Number;
  context: {
    external_urls: {
      spotify: string;
    };
    href: string;
    type: string;
    uri: string;
  };
  progress_ms: number;
  item: {
    album: {
      album_group: string;
      album_type: string;
      artists: [
        {
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          name: string;
          type: string;
          uri: string;
        }
      ];
      available_markets: string[];
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: [
        {
          height: number;
          url: string;
          width: number;
        },
        {
          height: number;
          url: string;
          width: number;
        },
        {
          height: number;
          url: string;
          width: number;
        }
      ];
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    };
    artists: [
      {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }
    ];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
    };
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
  };
  currently_playing_type: string;
  actions: {
    disallows: {
      resuming: boolean;
      toggling_repeat_context: boolean;
      toggling_repeat_track: boolean;
      toggling_shuffle: boolean;
    };
  };
  is_playing: boolean;
};

export type TopSongs = {
  items: TopSong[];
  total: number;
  limit: number;
  offset: number;
  href: "https://api.spotify.com/v1/me/top/tracks";
  next: "https://api.spotify.com/v1/me/top/tracks?limit=20&offset=20";
  previous: any;
};

export type TopSong = {
  album: {
    album_type: string;
    artists: [
      {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }
    ];
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: [
      {
        height: number;
        url: string;
        width: number;
      },
      {
        height: number;
        url: string;
        width: number;
      },
      {
        height: number;
        url: string;
        width: number;
      }
    ];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: [
    {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }
  ];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: false;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: false;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type TopArtists = {
  items: TopArtist[];
  total: 50;
  limit: 20;
  offset: 0;
  href: string;
  next: string;
  previous: null;
};

export type TopArtist = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null;
    total: 0;
  };
  genres: string[];
  href: string;
  id: string;
  images: [
    {
      height: 640;
      url: string;
      width: 640;
    },
    {
      height: 320;
      url: string;
      width: 320;
    },
    {
      height: 160;
      url: string;
      width: 160;
    }
  ];
  name: string;
  popularity: 79;
  type: string;
  uri: string;
};
