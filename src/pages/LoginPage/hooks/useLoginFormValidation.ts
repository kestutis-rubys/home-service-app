import { useState, useEffect } from 'react';

interface FormData {
  username: string;
  password: string;
}

interface UseLoginFormValidationProps {
  setErrors: (errors: Record<string, string>) => void;
  formData: FormData;
}

export const useLoginFormValidation = ({
  setErrors,
  formData,
}: UseLoginFormValidationProps) => {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { username, password } = formData;
    let validationErrors: Record<string, string> = {};
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
  }, [formData, setErrors]);

  return {
    isFormValid,
  };
};
