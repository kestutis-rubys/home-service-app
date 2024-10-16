import axios from 'axios';
import { api } from '../api';

export interface NewUserData {
  username: string;
  name: string;
  email: string;
  password: string;
}

export interface UserData {
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export const instance = axios.create({
  baseURL: api,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const register = async (data: NewUserData) => {
  try {
    const response = await instance.post('/auth/register', data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = (error as any).response?.data;
      return errorMessage;
    } else {
      return 'An unknown error occurred';
    }
  }
};

export const login = async (data: LoginData) => {
  try {
    const response = await instance.post('/auth/login', data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = (error as any).response?.data;
      return errorMessage;
    } else {
      return 'An unknown error occurred';
    }
  }
};

export const getUser = async (token: string) => {
  try {
    const response = await instance.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = (error as any).response?.data;
      return errorMessage;
    } else {
      return 'An unknown error occurred';
    }
  }
};
