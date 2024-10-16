import styles from './UserMenu.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes/router';

const UserMenu: React.FC = () => {
  return (
    <ul className={styles.userMenuContainer}>
      <li>
        <Link to={routes.profile}>My Account</Link>
      </li>
      <li>
        <Link to={routes}>Logout</Link>
      </li>
    </ul>
  );
};

export default UserMenu;
