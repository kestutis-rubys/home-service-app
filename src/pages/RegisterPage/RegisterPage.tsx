import styles from './RegisterPage.module.scss';

import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import bgImg from '../../assets/login_bg.jpg';
import { FormEvent } from 'react';

export const RegisterPage = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
        <form className={styles.registerPageForm} onSubmit={handleSubmit}>
          <div>
            <TextField
              label='Username'
              name='username'
              style='simple'
              placeholder='Type your username'
              // value={formData.username}
              // onChange={handleInputChange}
              // error={formErrors.username}
            />
          </div>
          <div>
            <TextField
              label='Name'
              name='name'
              style='simple'
              placeholder='Type your name and surname'
              // value={formData.username}
              // onChange={handleInputChange}
              // error={formErrors.username}
            />
          </div>
          <div>
            <TextField
              label='Email'
              name='email'
              style='simple'
              placeholder='Type your email'
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
              placeholder='Type your password'
              // value={formData.password}
              // onChange={handleInputChange}
              // error={formErrors.password}
            />
          </div>
          <div>
            <TextField
              type='password'
              label='Confirm Password'
              name='confirmPassword'
              style='simple'
              placeholder='Type your password again'
              // value={formData.password}
              // onChange={handleInputChange}
              // error={formErrors.password}
            />
          </div>

          <Button style='loginForm' type='submit' text='Register' />
        </form>
      </div>
    </div>
  );
};
