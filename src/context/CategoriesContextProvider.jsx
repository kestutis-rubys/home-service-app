import React, { useEffect, useState } from 'react';
import { useCategoriesFetch } from '../hooks/useCategoriesFetch';

export const CategoriesContext = React.createContext();

export const CategoriesContextProvider = ({ children }) => {
  const [categoriesData, setCategoriesData] = useState(null);
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
