import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// Components
import BasicExample from 'components/Loader/Loader';
import { EditForm } from 'components/EditForm/EditForm';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Loyout } from '../components/Loyout';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';

// Hooks
import { useAuth } from 'hooks';

// Pages
import { Modal } from 'pages/Modal/Modal';
import { Home } from 'pages/Home/Home';
import СontactsPage from 'pages/СontactsPage/СontactsPage';
import NotFound from 'pages/Error/Error';

// Operations
import { refreshUser } from '../redux/auth/operations';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <BasicExample />
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
              component={<Modal content={<LoginForm />} target="ModalLogin" />}
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
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<Modal content={<EditForm />} target="ModalEdit" />}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
