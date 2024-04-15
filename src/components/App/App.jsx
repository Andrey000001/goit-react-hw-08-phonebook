import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
//hook
import { useAuth } from 'hooks';
//Modals
import { Modal } from 'components/Modal/Modal';
//Routes
import { Route, Routes } from 'react-router-dom';
//Components
import СontactsPage from 'pages/СontactsPage/СontactsPage';
import { Home } from 'pages/Home/Home';
import { Loyout } from '../../components/Loyout';
import { EditForm } from 'components/EditForm/EditForm';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import { RestrictedRoute } from '../../components/RestrictedRoute';
import { PrivateRoute } from '../../components/PrivateRoute';
//operation
import { refreshUser } from '../../redux/auth/operations';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Loyout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/login"
              component={
                <Modal content={<RegisterForm />} target="ModalRegister" />
              }
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={
                <Modal content={<LoginForm />} target="ModalRegister" />
              }
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<СontactsPage />} />
          }
        />
        <Route
          path="/change/:id"
          element={<Modal content={<EditForm />} target="ModalEdit" />}
        />
      </Route>
    </Routes>
  );
}
