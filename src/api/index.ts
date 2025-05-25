import type { ArtistListResponse } from './types/artist';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getArtistList = async (): Promise<ArtistListResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/artistList`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching artist list:', error);
    throw error;
  }
};
