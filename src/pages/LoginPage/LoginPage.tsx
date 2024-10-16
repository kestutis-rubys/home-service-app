import styles from './LoginPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/router';
import { FormikComponent } from './components/FormikComponent';
import { checkUserIsLogged } from '../../utils/checkUserIsLogined';

export const LoginPage: React.FC = () => {
  const isShowingForm = checkUserIsLogged();

  const navigate = useNavigate();

  const handleRegister = async () => {
    navigate(routes.register);
  };

  return (
    isShowingForm && (
      <div className={styles.loginPageContainer}>
        <div className={styles.loginFormContainer}>
          <h2>Login</h2>
          <FormikComponent />
          <p className={styles.registerText}>
            Do not have an account?{' '}
            <strong onClick={handleRegister}>Sign Up</strong>
          </p>
        </div>
      </div>
    )
  );
};
