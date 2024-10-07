import React, { useEffect, useState } from 'react';
import { useBusinessFetch } from '../hooks/useBusinessFetch';

export const BussinessContext = React.createContext();

export const BussinessContextProvider = ({ children }) => {
  const [businessData, setBusinessData] = useState(null);
  const [business] = useBusinessFetch();

  useEffect(() => {
    if (business) {
      setBusinessData(business);
    }
  }, [business]);

  return (
    <BussinessContext.Provider value={{ businessData, setBusinessData }}>
      {children}
    </BussinessContext.Provider>
  );
};
