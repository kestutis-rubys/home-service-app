import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage.js';
import { AboutUsPage } from '../pages/AboutUsPage/AboutUsPage.js';
import { ServicePage } from '../pages/ServicesPage/ServicePage.js';
import { HeaderLayout } from '../layouts/HeaderLayout/HeaderLayout.js';
import { LoginPage } from '../pages/LoginPage/LoginPage.js';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage.js';
import { CategoryPage } from '../pages/CategoryPage/CategoryPage.js';
import { SearchCategoryPage } from '../pages/SearchCategoryPage/SearchCategoryPage.js';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage.js';

export const routes = {
  home: '/',
  services: '/services',
  about: '/about',
  login: '/login',
  register: '/register',
  profile: '/profile',
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
        path: routes.profile,
        element: <ProfilePage />,
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
