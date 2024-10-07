import React, { useEffect, useState } from 'react';

export const PageWidthContext = React.createContext();

export const PageWidthContextProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

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
