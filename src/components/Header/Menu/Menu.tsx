import styles from './Menu.module.scss';

import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes/router';

export const Menu: React.FC = () => {
  const checkIsActive = (isActive: Boolean) => {
    return { color: isActive && '#785be6' };
  };

  return (
    <ul className={styles.menuContainer}>
      <li>
        <NavLink
          style={({ isActive }) => checkIsActive(isActive)}
          to={routes.home}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => checkIsActive(isActive)}
          to={routes.services}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => checkIsActive(isActive)}
          to={routes.about}
        >
          About Us
        </NavLink>
      </li>
    </ul>
  );
};
