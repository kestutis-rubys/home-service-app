import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { AboutUsPage } from '../pages/AboutUsPage/AboutUsPage';
import { ServicePage } from '../pages/ServicesPage/ServicePage';
import { HeaderLayout } from '../layouts/HeaderLayout/HeaderLayout';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { CategoryPage } from '../pages/CategoryPage/CategoryPage';
import { SearchCategoryPage } from '../pages/SearchCategoryPage/SearchCategoryPage';

export const routes = {
  home: '/',
  services: '/services',
  about: '/about',
  login: '/login',
  register: '/register',
  category: '/search/:category',
  search: '/category/:search',
};

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <HeaderLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routes.services,
        element: <ServicePage />,
      },
      {
        path: routes.about,
        element: <AboutUsPage />,
      },
      {
        path: routes.login,
        element: <LoginPage />,
      },
      {
        path: routes.register,
        element: <RegisterPage />,
      },
      {
        path: routes.category,
        element: <CategoryPage />,
      },
      {
        path: routes.search,
        element: <SearchCategoryPage />,
      },
    ],
  },
]);
