import { useState } from 'react';

interface FormData {
  username: string;
  password: string;
}

export const useLoginFormData = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return {
    formData,
    setFormData,
    handleChange,
  };
};
