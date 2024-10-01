import { useState } from 'react';

export const useLoginFormData = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return {
    formData,
    setFormData,
    handleChange,
  };
};
