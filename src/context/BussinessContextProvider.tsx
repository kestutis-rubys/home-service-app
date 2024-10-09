import React, { useEffect, useState } from 'react';
import { useBusinessFetch } from '../hooks/useBusinessFetch';

interface BusinessContextType {
  businessData: any[];
  setBusinessData: React.Dispatch<React.SetStateAction<any>>;
}

export const BussinessContext = React.createContext<
  BusinessContextType | undefined
>(undefined);

interface BussinessProviderProps {
  children: any;
}
export const BussinessContextProvider: React.FC<BussinessProviderProps> = ({
  children,
}) => {
  const [businessData, setBusinessData] = useState<any[]>([]);
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
