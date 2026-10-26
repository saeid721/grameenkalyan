import { BASE_URL } from '@/config';

import { IUseFetchProps } from './useFetch.type';

export default async function useFetch({ url, revalidateIn }: IUseFetchProps) {
  try {
    const res = await fetch(BASE_URL + url, { cache: 'no-cache' });

    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    return null;
  }
}
