import styles from './RegisterPage.module.scss';
import { FormikComponent } from './components/FormikComponent';
import bgImg from '../../assets/login_bg.jpg';

export const RegisterPage = () => {
  return (
    <div
      className={styles.registerPageContainer}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className={styles.registerFormContainer}>
        <h2>Register</h2>
        <FormikComponent />
      </div>
    </div>
  );
};
