import { RouterProvider } from 'react-router-dom';
import { CategoriesContextProvider } from './context/CategoriesContextProvider';
import { router } from './routes/router.jsx';

export const App = () => {
  return (
    <CategoriesContextProvider>
      <RouterProvider router={router} />
    </CategoriesContextProvider>
  );
};
