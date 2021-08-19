import api from './api';

class CAGR {
  getAllDepartments() {
    return api.get(`/cagr/get-departments`);
  }

  getTeachersByDepartment(param: string | null) {
    return api.post(`/cagr/get-teacher-by-department`, {
      department: param,
    });
  }
}

export const cagrService = new CAGR();
