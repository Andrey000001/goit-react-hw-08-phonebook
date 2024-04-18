import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
export const Loyout = () => {
  const activeModal = useSelector(({ modal }) => modal.isModalOpen);
  return (
    <div>
      {!activeModal && <Header />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
