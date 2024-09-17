import { Button } from '../../Button/Button';
import styles from './TopBar.module.scss';

export const TopBar = () => {
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.topBar}>
        <div className='logo'>
          <h1>Logoipsum</h1>
        </div>

        <nav className={styles.menu}>
          <a href='/'>Home</a>
          <a href='/services'>Services</a>
          <a href='/about'>About Us</a>
        </nav>

        <div className={styles.authButtons}>
          <Button type='login' text='Login / Sign Up' />
        </div>
      </div>
    </div>
  );
};
