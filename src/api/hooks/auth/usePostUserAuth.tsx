// hooks/usePostUserAuth.ts
import { useState } from 'react';
import { postUserAuth } from '../..';
import type { UserInfo } from '../../types/userAuth';

export const usePostUserAuth = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (userInfo: UserInfo) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postUserAuth(userInfo);
      setData(response);
      return response;
    } catch (err) {
      const msg = (err as Error).message;
      setError(msg);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, data, loading, error };
};
