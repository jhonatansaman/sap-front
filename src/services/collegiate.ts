import api from './api';

class Collegiate {
  deleteCollegiate(param: string) {
    return api.delete(`/collegiate/delete/${param}`);
  }
}

export const collegiateService = new Collegiate();
