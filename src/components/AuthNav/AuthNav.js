import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LinkButton from 'components/UI/LinkButton/LinkButton';
import { active } from '../../redux/modal/slice';
import './AuthNav.css';
export const AuthNav = () => {
  const dispatch = useDispatch();
  const handleSignupClick = () => {
    dispatch(active());
  };
  return (
    <div className="authButtons">
      <LinkButton
        component={Link}
        className="btnBar"
        to="/register"
        onClick={handleSignupClick}
      >
        SIGNUP
      </LinkButton>
      <LinkButton
        component={Link}
        className="btnBar"
        to="/login"
        onClick={handleSignupClick}
      >
        LOGIN
      </LinkButton>
    </div>
  );
};
