import axios from 'axios';
import { api } from '../api';

export const instance = axios.create({
  baseURL: api,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
