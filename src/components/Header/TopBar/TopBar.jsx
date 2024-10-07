import styles from './TopBar.module.scss';
import { Button } from '../../Button/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContextProvider';
import { PageWidthContext } from '../../../context/PageWidthContextProvider';
import { routes } from '../../../routes/router';

import { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from '../Menu/Menu';

// import logo from '../../../assets/starfix-logo.png';

export const TopBar = () => {
  const { user } = useContext(UserContext);
  const { width } = useContext(PageWidthContext);

  const navigate = useNavigate();

  const handleLogin = async () => {
    navigate(routes.login);
  };

  const handleHome = () => {
    navigate(routes.home);
  };

  const handleProfile = () => {
    navigate(routes.profile);
  };

  return (
    <div className={styles.topBarContainer}>
      <div className={styles.topBar}>
        <div className={styles.logo} onClick={handleHome}>
          {/* <img src={logo} alt='starfix' /> */}
          <h1>Stars Repairs</h1>
        </div>

        {width > 768 && <Menu />}

        <div className={styles.authButtons}>
          {user ? (
            <p className={styles.user} onClick={() => handleProfile()}>
              <span>{user.split('')[0].toUpperCase()}</span>
            </p>
          ) : (
            <Button action={handleLogin} style='login' text='Login / Sign Up' />
          )}
        </div>
      </div>
    </div>
  );
};
