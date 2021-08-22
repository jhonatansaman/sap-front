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

  getDisciplinesByDepartment(
    department: string | null,
    semester: string | null,
  ) {
    return api.get(`/cagr/get-disciplines-by-department`, {
      params: {
        department,
        semester,
      },
    });
  }
}

export const cagrService = new CAGR();
