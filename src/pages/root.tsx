import { FC, Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from '@/modules/layouts';

const Root: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<h1>Loading.....</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Root;
