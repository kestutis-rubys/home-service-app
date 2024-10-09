import React, { useEffect, useState } from 'react';

interface PageWidthContextType {
  width: number;
}

export const PageWidthContext = React.createContext<PageWidthContextType>({
  width: window.innerWidth,
});

export const PageWidthContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <PageWidthContext.Provider value={{ width }}>
      {children}
    </PageWidthContext.Provider>
  );
};
