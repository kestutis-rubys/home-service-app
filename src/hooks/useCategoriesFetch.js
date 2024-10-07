import { useState, useEffect } from 'react';
import { apiCategoryService } from '../services/apiCategoryServices';

export const useCategoriesFetch = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiCategoryService
      .get()
      .then((r) => {
        setCategories(r);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading;
      });
  }, []);

  return [categories, loading, error];
};
