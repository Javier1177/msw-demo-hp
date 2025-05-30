import type { ArtistInfo, ArtistListResponse } from './types/artist';
import type { UserInfo } from './types/userAuth';

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

export const getArtistInfo = async (artistId: string): Promise<ArtistInfo> => {
  try {
    const response = await fetch(`${BASE_URL}/${artistId}`);

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

export const postUserAuth = async (userInfo: UserInfo): Promise<string> => {
  try {
    const response = await fetch(`${BASE_URL}/userList`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return 'User authenticated successfully';
  } catch (error) {
    console.error('Error fetching artist list:', error);
    throw error;
  }
};
