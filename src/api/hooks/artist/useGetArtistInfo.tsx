import { useState, useEffect } from 'react';
import type { ArtistInfo } from '../../types/artist';
import { getArtistInfo } from '../..';

export const useGetArtistInfo = (artistId: string) => {
  const [data, setData] = useState<ArtistInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getArtistInfo(artistId);
        setData(response);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [artistId]);

  return { artistInfo: data, loading, error };
};
