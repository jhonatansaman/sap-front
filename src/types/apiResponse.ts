export interface AuthProps {
  identificacao: string;
  senha: string;
}

export interface MemberCollegiate {
  id: string;
  siape: string;
  disciplineName: string;
  disciplineCode: string;
  teacherName: string;
  department: string;
}

export interface LoginUser {
  user: APIResponseAuth;
  accessToken: string;
}
export interface APIResponseAuth {
  mensagem: string;
  erro: boolean;
  tipo: string;
  matricula: number;
  nome: string;
  dataNascimento: string;
  pais: string;
  cpf: string;
  email: string;
  curso: string;
  centro: string;
  codigoCurso: number;
  siape: number;
  serpro: number;
  idPessoa: number;
}
