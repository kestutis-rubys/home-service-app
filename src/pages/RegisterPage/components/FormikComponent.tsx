import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../../components/Button/Button';
import styles from './FormikComponent.module.scss';
import { register, NewUserData } from '../../../services/api-services';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    // .matches(/[0-9]/, 'Password requires a number')
    // .matches(/[a-z]/, 'Password requires a lowercase letter')
    // .matches(/[A-Z]/, 'Password requires an uppercase letter')
    // .matches(/[^\w]/, 'Password requires a symbol')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const FormikComponent: React.FC = () => {
  const navigate = useNavigate();

  const createUser = (data: NewUserData) => {
    register(data).then((response) => {
      if (response.message === 'User registered successfully') {
        toast('🦄 Congrats, you registered successful! Now you can login');
        navigate('/login');
      }
    });
  };

  return (
    <Formik
      initialValues={{
        username: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const { confirmPassword, ...rest } = values;
        createUser(rest);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor='username'>Username</label>
            <Field
              type='text'
              id='username'
              name='username'
              placeholder='Enter your username'
            />
            <ErrorMessage
              name='username'
              component='div'
              className={styles.error}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='name'>Name</label>
            <Field
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name and surname'
            />
            <ErrorMessage
              name='name'
              component='div'
              className={styles.error}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='email'>Email</label>
            <Field
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
            />
            <ErrorMessage
              name='email'
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
              placeholder='Enter your password'
            />
            <ErrorMessage
              name='password'
              component='div'
              className={styles.error}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <Field
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm your password'
            />
            <ErrorMessage
              name='confirmPassword'
              component='div'
              className={styles.error}
            />
          </div>

          <Button
            style='loginForm'
            type='submit'
            text='Register'
            disabled={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};
