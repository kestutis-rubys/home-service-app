import styles from './LoginPage.module.scss';
import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/router';
import { UserContext } from '../../context/UserContextProvider';
import { useContext, useEffect, useState } from 'react';
import { useLoginFormData } from './hooks/useLoginFormData';
import { useLoginFormValidation } from './hooks/useLoginFormValidation';
import { toast } from 'react-toastify';

export const LoginPage = () => {
  const [errors, setErrors] = useState({});
  const [isShowingForm, setIsShowingForm] = useState(false);
  const notify = () => toast('🦄 Congrats, you logged successful!');

  const { user, setUser } = useContext(UserContext);
  const { formData, setFormData, handleChange } = useLoginFormData();
  const { isFormValid } = useLoginFormValidation({
    errors,
    setErrors,
    formData,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(routes.profile);
    } else {
      navigate(routes.login);
      setIsShowingForm(true);
    }
  }, [user]);

  const handleRegister = async () => {
    navigate(routes.register);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      localStorage.setItem('user', JSON.stringify(e.target.username.value));
      setUser(formData.username);
      notify();
      navigate(routes.home);
      setFormData({ username: '', password: '' });
      setErrors({});
    }
  };

  return (
    isShowingForm && (
      <div className={styles.loginPageContainer}>
        <div className={styles.loginFormContainer}>
          <h2>Login</h2>
          <form className={styles.loginPageForm} onSubmit={handleSubmit}>
            <div>
              <TextField
                label='Username'
                name='username'
                style='simple'
                placeholder='Type your username'
                value={formData.username}
                onChange={handleChange}
                error={errors.username}
              />
            </div>
            <div>
              <TextField
                type='password'
                label='Password'
                name='password'
                style='simple'
                placeholder='Type your password'
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />
            </div>
            <Button style='loginForm' type='submit' text='Login' />
            <p className={styles.registerText}>
              Do not have an account?{' '}
              <strong onClick={handleRegister}>Sign Up</strong>
            </p>
          </form>
        </div>
      </div>
    )
  );
};
