import { lazy } from 'react';

import { createBrowserRouter } from 'react-router-dom';

const RootLazy = lazy(() => import('@/pages/root'));
const HomeLazy = lazy(() => import('@/pages/home/home'));
const AboutLazy = lazy(() => import('@/pages/about/about'));
const ErrorLazy = lazy(() => import('@/pages/error/error'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLazy />,
    errorElement: <ErrorLazy />,
    children: [
      {
        index: true,
        element: <HomeLazy />,
      },
      {
        path: 'about',
        element: <AboutLazy />,
      },
    ],
  },
]);

export default router;
