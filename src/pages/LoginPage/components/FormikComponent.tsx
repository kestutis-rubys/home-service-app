import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../../components/Button/Button';
import styles from './FormikComponent.module.scss';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes/router';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContextProvider';
import { login, LoginData } from '../../../services/api-services';

interface FormValues {
  username: string;
  password: string;
}

const initialValues: FormValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export const FormikComponent: React.FC = () => {
  const context = useContext(UserContext);
  const notify = () => toast('🦄 Congrats, you logged successful!');
  const navigate = useNavigate();

  const loginUser = (values: FormValues) => {
    login(values).then((response) => {
      if (response.token) {
        localStorage.setItem('token', response.token);
        context?.setUser(response.name);
        navigate(routes.home);
        notify();
      }
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => loginUser(values)}
    >
      <Form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor='email'>Username</label>
          <Field
            type='username'
            id='username'
            name='username'
            placeholder='Type your username'
          />
          <ErrorMessage
            name='username'
            component='div'
            className={styles.error}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='password'>Password</label>
          <Field
            type='password'
            id='password'
            name='password'
            placeholder='Type your password'
          />
          <ErrorMessage
            name='password'
            component='div'
            className={styles.error}
          />
        </div>
        <Button style='loginForm' type='submit' text='Login' disabled={false} />
      </Form>
    </Formik>
  );
};
