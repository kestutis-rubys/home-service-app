import { instance } from './api-services';

import { AxiosRequestConfig } from 'axios';

export const apieBusinessServices = {
  get: async (config: AxiosRequestConfig = {}): Promise<any> => {
    try {
      const response = await instance.get('/businesses', config);
      return response.data;
    } catch (error) {
      console.error('GET request error:', error);
      throw error;
    }
  },
};
// post: async (url, data, config = {}) => {
//   try {
//     const response = await instance.post(url, data, config);
//     return response.data;
//   } catch (error) {
//     console.error('POST request error:', error);
//     throw error;
//   }
// },
// Add other methods like put, delete, etc. as needed
