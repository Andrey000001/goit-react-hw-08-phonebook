import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
export const RestrictedRoute = ({ component, redirectTo = '/login' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
