import { FC } from 'react';

import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@/providers';
import router from '@/routes/router.tsx';

const App: FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
