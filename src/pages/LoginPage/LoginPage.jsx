import styles from './LoginPage.module.scss';
import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/router';
import { UserContext } from '../../context/UserContextProvider';
import { useContext } from 'react';

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = async () => {
    navigate(routes.register);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    if (e.target.username.value && e.target.password.value !== '') {
      localStorage.setItem('user', JSON.stringify(e.target.username.value));
      setUser(e.target.username.value);
      navigate(routes.home);
    }
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
