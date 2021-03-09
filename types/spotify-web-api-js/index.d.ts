/* eslint-disable camelcase */

export interface ArtistObjectSimplified {
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}

export interface ArtistObjectFull extends ArtistObjectSimplified {
  followers: FollowersObject;
  genres: string[];
  images: ImageObject[];
  popularity: number;
}

export interface AlbumObjectFull extends AlbumObjectSimplified {
  artists: ArtistObjectSimplified[];
  copyrights: CopyrightObject[];
  external_ids: ExternalIdObject;
  genres: string[];
  popularity: number;
  release_date: string;
  release_date_precision: string;
  tracks: PagingObject<TrackObjectSimplified>;
}

export interface AlbumObjectSimplified {
  album_type: string;
  available_markets?: string[];
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  type: "album";
  uri: string;
}

export interface TrackObjectSimplified {
  artists: ArtistObjectSimplified[];
  available_markets?: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  is_playable?: boolean;
  linked_from?: TrackLinkObject;
  name: string;
  preview_url: string;
  track_number: number;
  type: "track";
  uri: string;
}

export interface TrackObject extends TrackObjectSimplified {
  album: AlbumObjectSimplified;
  external_ids: ExternalIdObject;
  popularity: number;
}
