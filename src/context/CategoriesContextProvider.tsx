import React, { useEffect, useState } from 'react';
import { useCategoriesFetch } from '../hooks/useCategoriesFetch';
import { CategoryData } from '../hooks/useCategoriesFetch';

interface CategoriesContextType {
  categoriesData: CategoryData[] | null;
  setCategoriesData: React.Dispatch<
    React.SetStateAction<CategoryData[] | null>
  >;
}

export const CategoriesContext =
  React.createContext<CategoriesContextType | null>(null);

export const CategoriesContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [categoriesData, setCategoriesData] = useState<CategoryData[] | null>(
    null,
  );
  const [categories] = useCategoriesFetch();

  useEffect(() => {
    if (categories) {
      setCategoriesData(categories);
    }
  }, [categories]);

  return (
    <CategoriesContext.Provider value={{ categoriesData, setCategoriesData }}>
      {children}
    </CategoriesContext.Provider>
  );
};
