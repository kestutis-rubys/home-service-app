import { RouterProvider } from 'react-router-dom';
import { CategoriesContextProvider } from './context/CategoriesContextProvider';
import { UserContextProvider } from './context/UserContextProvider.jsx';
import { router } from './routes/router.jsx';

export const App = () => {
  return (
    <UserContextProvider>
      <CategoriesContextProvider>
        <RouterProvider router={router} />
      </CategoriesContextProvider>
    </UserContextProvider>
  );
};
