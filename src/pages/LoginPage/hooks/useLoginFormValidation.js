import { useEffect, useState } from 'react';

export const useLoginFormValidation = ({ setErrors, formData }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { username, password } = formData;
    let validationErrors = {};
    let valid = true;

    if (!username.trim() && formData.username.length) {
      validationErrors = {
        ...validationErrors,
        username: 'Username is required',
      };
      valid = false;
    }

    if (!password.trim() && formData.password.length) {
      validationErrors = {
        ...validationErrors,
        password: 'Password is required',
      };
      valid = false;
    }

    setErrors(validationErrors);
    setIsFormValid(valid);
  }, [formData]);

  return {
    isFormValid,
  };
};
