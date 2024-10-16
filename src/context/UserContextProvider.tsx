import React, { useEffect, useState } from 'react';

export interface User {
  id: string;
  name: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = React.createContext<UserContextType | undefined>(
  undefined,
);

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  console.log(user);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        setUser(JSON.parse(user));
      } catch (error) {
        console.error('Error parsing user data', error);
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
