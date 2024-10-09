import { useState, useEffect } from 'react';
import { apieBusinessServices } from '../services/apiBusinessServices';

export interface BusinessData {
  id: number;
  category: string;
  serviceName: string;
  name: string;
  address: string;
  photoUrl: string;
}

export const useBusinessFetch = (): [
  BusinessData[] | null,
  boolean,
  Error | null,
] => {
  const [business, setBusiness] = useState<BusinessData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    apieBusinessServices
      .get()
      .then((r: BusinessData[]) => {
        setBusiness(r);
        setLoading(false);
      })
      .catch((e: Error) => {
        setError(e);
        setLoading;
      });
  }, []);

  return [business, loading, error];
};
