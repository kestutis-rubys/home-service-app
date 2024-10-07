import { instance } from './api-services';

export const apiCategoryService = {
  get: async (config = {}) => {
    try {
      const response = await instance.get('/categories', config);
      return response.data;
    } catch (error) {
      console.error('GET request error:', error);
      throw error;
    }
  },
  post: async (url, data, config = {}) => {
    try {
      const response = await instance.post(url, data, config);
      return response.data;
    } catch (error) {
      console.error('POST request error:', error);
      throw error;
    }
  },
  // Add other methods like put, delete, etc. as needed
};
