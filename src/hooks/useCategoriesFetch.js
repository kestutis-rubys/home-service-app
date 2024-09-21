import { useState, useEffect } from 'react';
import axios from 'axios';
import { categoriesApi } from '../api/index,js';

export const useCategoriesFetch = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(categoriesApi)
      .then((r) => {
        setCategories(r.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, []);

  return [categories, loading, error];
};
