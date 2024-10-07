import { useState, useEffect } from 'react';
import { apieBusinessServices } from '../services/apiBusinessServices';

export const useBusinessFetch = () => {
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apieBusinessServices
      .get()
      .then((r) => {
        setBusiness(r);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading;
      });
  }, []);

  return [business, loading, error];
};
