export interface Artist {
  name: string;
  image: string;
  description: string;
  genre: string;
  origin: string;
}

export interface ArtistListResponse {
  artistList: Artist[];
}
