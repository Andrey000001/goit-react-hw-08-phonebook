import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
export const Loyout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
