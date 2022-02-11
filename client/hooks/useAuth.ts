import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTypedSelector } from '.';

export const useAuth = () => {
  const { data } = useTypedSelector(state => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!data) {
      router.push('/login');
    }
  }, [router, data]);

  return data;
};
