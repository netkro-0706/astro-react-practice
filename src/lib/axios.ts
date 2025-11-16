import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('API Error:', error);
    return Promise.reject(error);
  }
);
