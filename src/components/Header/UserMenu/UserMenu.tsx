import styles from './UserMenu.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../../routes/router';
import { toast } from 'react-toastify';
import { UserContext } from '../../../context/UserContextProvider';
import { useContext } from 'react';

const UserMenu: React.FC = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);

  const logout = () => {
    navigate(routes.home);
    localStorage.removeItem('token');
    context?.setUser(null);
    toast('🦄 Congrats, you logged out successful!');
  };

  return (
    <ul className={styles.userMenuContainer}>
      <li>
        <Link to={routes.profile}>My Account</Link>
      </li>
      <li>
        <Link to={routes.home} onClick={logout}>
          Logout
        </Link>
      </li>
    </ul>
  );
};

export default UserMenu;
