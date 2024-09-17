import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { AboutUsPage } from '../pages/AboutUsPage/AboutUsPage';
import { ServicePage } from '../pages/ServicesPage/ServicePage';
import { HeaderLayout } from '../layouts/HeaderLayout/HeaderLayout';

export const routes = {
  home: '/',
  services: '/services',
  about: '/about',
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
    ],
  },
]);
