import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/';
export const apiRequest = axios.create({
  baseURL: baseURL,
  mode: 'cors'
});
