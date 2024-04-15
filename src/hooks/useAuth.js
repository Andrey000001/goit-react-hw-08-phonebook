import { useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { selectIsRefreshing } from '../redux/auth/selectors';
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing)
  return { isLoggedIn, user,isRefreshing };
};
