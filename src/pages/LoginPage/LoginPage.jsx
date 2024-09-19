import styles from './LoginPage.module.scss';
import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/router';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleRegister = async () => {
    navigate(routes.register);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.loginPageContainer}>
      <h2>Login Page</h2>
      <form className={styles.loginPageForm} onSubmit={handleSubmit}>
        <div>
          <TextField
            label='Username'
            name='username'
            style='simple'
            // value={formData.username}
            // onChange={handleInputChange}
            // error={formErrors.username}
          />
        </div>
        <div>
          <TextField
            type='password'
            label='Password'
            name='password'
            style='simple'
            // value={formData.password}
            // onChange={handleInputChange}
            // error={formErrors.password}
          />
        </div>

        <Button style='login' type='submit' text='Login' />
        <p className={styles.registerText}>
          Do not have an account?{' '}
          <strong onClick={handleRegister}>Sign Up</strong>
        </p>
      </form>
    </div>
  );
};
