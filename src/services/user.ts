import {AuthProps} from '../types/apiResponse';
import api from './api';

class User {
  auth(params: AuthProps) {
    return api.post('/auth', params);
  }

  get(params: string) {
    return api.get(`/auth/get-roles/${params}`);
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}

export const userService = new User();
