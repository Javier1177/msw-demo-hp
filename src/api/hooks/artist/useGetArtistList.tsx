import { useState, useEffect } from 'react';
import type { ArtistListResponse } from '../../types/artist';
import { getArtistList } from '../../';

export const useGetArtistList = () => {
  const [data, setData] = useState<ArtistListResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getArtistList();
        setData(response);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { artistList: data?.artistList, loading, error };
};
