import { RouterProvider } from 'react-router-dom';
import { CategoriesContextProvider } from './context/CategoriesContextProvider';
import { UserContextProvider } from './context/UserContextProvider.jsx';
import { PageWidthContextProvider } from './context/PageWidthContextProvider.jsx';
import { router } from './routes/router.jsx';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <PageWidthContextProvider>
      <UserContextProvider>
        <CategoriesContextProvider>
          <RouterProvider router={router} />
          <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
        </CategoriesContextProvider>
      </UserContextProvider>
    </PageWidthContextProvider>
  );
};
