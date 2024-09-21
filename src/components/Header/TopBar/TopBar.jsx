import styles from './TopBar.module.scss';
import { Button } from '../../Button/Button';
import { NavLink, useNavigate } from 'react-router-dom';
4;
import { routes } from '../../../routes/router';

// import logo from '../../../assets/starfix-logo.png';

export const TopBar = () => {
  const checkIsActive = (isActive) => {
    return { color: isActive ? '#785be6' : '#000' };
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    navigate(routes.login);
  };

  const handleHome = () => {
    navigate(routes.home);
  };

  return (
    <div className={styles.topBarContainer}>
      <div className={styles.topBar}>
        <div className={styles.logo} onClick={handleHome}>
          {/* <img src={logo} alt='starfix' /> */}
          <h1>Stars Repairs</h1>
        </div>

        <ul>
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

        <div className={styles.authButtons}>
          <Button action={handleLogin} style='login' text='Login / Sign Up' />
        </div>
      </div>
    </div>
  );
};
