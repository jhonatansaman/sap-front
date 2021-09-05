import {MenuSidebar} from '../../../assets/components/sidebar/index.type';

export interface Departments {
  codigo: string;
  nome: string;
  centro: string;
  chefeDepartamento: {
    id: number;
    serpro: number;
    serpro2: number;
    siape: number;
    nome: string;
    localizacaoFisica: {
      id: number;
      centro: {
        id: number;
        nome: string;
        sigla: string;
        tipo: {
          id: number;
          nome: string;
        };
      };
      nome: string;
      sigla: string;
      ativo: string;
      suplenciaChefia: {
        id: number;
      };
    };
    localizacao: {
      id: number;
      centro: {
        id: number;
        nome: string;
        sigla: string;
        tipo: {
          id: number;
          nome: string;
        };
      };
      nome: string;
      sigla: string;
      ativo: string;
      suplenciaChefia: {
        id: number;
      };
    };
    setor: {
      id: number;
      centro: {
        id: number;
        nome: string;
        sigla: string;
        tipo: {
          id: number;
          nome: string;
        };
      };
      nome: string;
      sigla: string;
      ativo: string;
      suplenciaChefia: {
        id: number;
      };
    };
    cargo: {
      id: number;
      nome: string;
      grauDocencia: number;
    };
    situacao: {
      id: number;
      nome: string;
    };
    dataNascimento: string;
    tipo: string;
    codigoReferencia: string;
    cpf: number;
    email: string;
    emailCAGR: {
      serpro: number;
      email: string;
      curriculoLattes: string;
    };
  };
  dataInicioMandato: string;
  dataFimMandato: string;
  telefone: string;
  situacao: {
    id: number;
  };
  email: string;
  observacao: string;
  website: string;
  codigoDepartamentoFolha: number;
}

export interface Teachers {
  matricula: number;
  nome: string;
  senhaHash: string;
  serpro: number;
  serpro2: number;
  siape: number;
  lotacao: string;
  email: string;
  curriculoLattes: string;
  ativo: boolean;
  sistema: string;
}

export interface DepartmentsState {
  data: Array<Departments>;
}

export interface TearchersState {
  data: Array<Teachers>;
}
export interface TeacherDiscipline {
  nomeProfessor: string;
  siapeProfessor: number;
}

export interface HourDsicipline {
  codigoDisciplina: string;
  codigoTurma: string;
  localizacaoCentro: string;
  localizacaoEspacoFisico: string;
  diaSemana: number;
  horario: number;
}
export interface Disciplines {
  codigoDisciplina: string;
  nomeDisciplina: string;
  semestre: number;
  codigoTurma: string;
  codigoCurso: number;
  nomeCurso: string;
  professores: Array<TeacherDiscipline>;
  horarios: Array<HourDsicipline>;
}

export interface APIResponseDisciplines {
  codigo: string;
  nome: string;
  fase: string;
}

export interface DisciplinesState {
  data: Array<APIResponseDisciplines>;
}

export type TeacherType = {
  siape: string;
  teacherName: string;
};

export type DisciplineType = {
  disciplineCode: string;
  disciplineName: string;
};
export interface MemberCollegiateState {
  department: string;
  teacher: TeacherType | null;
  discipline: Array<DisciplineType>;
}

export interface CadasterContainerProps {
  routes: Array<MenuSidebar>;
  onChangeRoute: (param: Array<MenuSidebar>) => void;
}
