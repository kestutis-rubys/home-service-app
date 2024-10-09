import { useState, useEffect } from 'react';
import { apiCategoryService } from '../services/apiCategoryServices';
import * as MaterialDesign from 'react-icons/io5';

type IconName = keyof typeof MaterialDesign;

export interface CategoryData {
  name: string;
  icon: IconName;
  color: string;
}

export const useCategoriesFetch = (): [
  CategoryData[] | null,
  boolean,
  Error | null,
] => {
  const [categories, setCategories] = useState<CategoryData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    apiCategoryService
      .get()
      .then((r: CategoryData[]) => {
        setCategories(r);
        setLoading(false);
      })
      .catch((e: Error) => {
        setError(e);
        setLoading;
      });
  }, []);

  return [categories, loading, error];
};
