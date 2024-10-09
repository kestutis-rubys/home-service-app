import { RouterProvider } from 'react-router-dom';
import { CategoriesContextProvider } from './context/CategoriesContextProvider.js';
import { UserContextProvider } from './context/UserContextProvider.js';
import { PageWidthContextProvider } from './context/PageWidthContextProvider.js';
import { BussinessContextProvider } from './context/BussinessContextProvider.js';
import { router } from './routes/router.js';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <PageWidthContextProvider>
      <UserContextProvider>
        <BussinessContextProvider>
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
        </BussinessContextProvider>
      </UserContextProvider>
    </PageWidthContextProvider>
  );
};
