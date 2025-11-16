import useSWR from 'swr';
import { api } from '../lib/axios';
import type { Product } from '../types/product';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export function useProducts() {
  const { data, error, isLoading } = useSWR<Product[]>('/products', fetcher);

  return {
    products: data ?? [],
    loading: isLoading,
    error,
  };
}
