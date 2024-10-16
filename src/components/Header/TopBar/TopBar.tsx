import styles from './TopBar.module.scss';
import { Button } from '../../Button/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContextProvider.js';
import { PageWidthContext } from '../../../context/PageWidthContextProvider.js';
import { routes } from '../../../routes/router';

import { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from '../Menu/Menu';
import UserMenu from '../UserMenu/UserMenu';

// import logo from '../../../assets/starfix-logo.png';

export const TopBar: React.FC = () => {
  const userContext = useContext(UserContext);
  const context = useContext(PageWidthContext);

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
          <h1>Stars' Repairs</h1>
        </div>

        {context.width > 768 && <Menu />}

        <div className={styles.authButtons}>
          {userContext?.user?.name ? (
            <div className={styles.user} onClick={() => handleProfile()}>
              <span>{userContext?.user?.name?.charAt(0).toUpperCase()}</span>
              <div className={styles.userMenu}>
                <UserMenu />
              </div>
            </div>
          ) : (
            <Button
              action={handleLogin}
              style='login'
              type='button'
              text='Login / Sign Up'
              disabled={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};
