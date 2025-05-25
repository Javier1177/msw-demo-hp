export interface ArtistInfo {
  id: string;
  name: string;
  image: string;
  description: string;
  genre: string;
  origin: string;
}

export interface ArtistListResponse {
  artistList: ArtistInfo[];
}
