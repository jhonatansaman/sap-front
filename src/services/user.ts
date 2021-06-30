import {AuthProps} from '../types/apiResponse';
import api from './api';

class User {
  auth(params: AuthProps) {
    return api.post('/auth', params);
  }
}

export const userService = new User();
