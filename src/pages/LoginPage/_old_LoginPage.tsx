import styles from './LoginPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/router';
import { UserContext } from '../../context/UserContextProvider.js';
import { useContext, useEffect, useState } from 'react';
import { useLoginFormData } from './hooks/useLoginFormData';
import { useLoginFormValidation } from './hooks/useLoginFormValidation';
import { toast } from 'react-toastify';
import { FormikComponent } from './components/FormikComponent';

export const LoginPage: React.FC = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isShowingForm, setIsShowingForm] = useState(false);
  const notify = () => toast('🦄 Congrats, you logged successful!');

  const context = useContext(UserContext);
  const { formData, setFormData, handleChange } = useLoginFormData();
  const { isFormValid } = useLoginFormValidation({
    setErrors,
    formData,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (context?.user) {
      navigate(routes.profile);
    } else {
      navigate(routes.login);
      setIsShowingForm(true);
    }
  }, [context?.user]);

  const handleRegister = async () => {
    navigate(routes.register);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFormValid) {
      const form = e.target as HTMLFormElement;
      const username = form.username.value;
      localStorage.setItem('user', JSON.stringify(username));
      context?.setUser(username);
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
          <FormikComponent />
          <p className={styles.registerText}>
            Do not have an account?{' '}
            <strong onClick={handleRegister}>Sign Up</strong>
          </p>
          {/* <form className={styles.loginPageForm} onSubmit={handleSubmit}>
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
          </form> */}
        </div>
      </div>
    )
  );
};
