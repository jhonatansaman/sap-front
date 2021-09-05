export interface UIModifiers {
  active?: boolean;
}

export interface Roles {
  idPessoaPapel: number;
  idPapel: number;
  codigo: string;
  nome: string;
  nivel: number;
  delegado: boolean;
  codigoTipoAtribuicao: number;
  englobado: boolean;
}

export interface User {
  centro: string;
  codigoCurso: number;
  cpf: string;
  curso: string;
  dataNascimento: string;
  email: string;
  erro: boolean;
  idPessoa: number;
  matricula: number;
  mensagem: string;
  nome: string;
  pais: string;
  serpro: number;
  siape: number;
  tipo: string;
}

export interface APIResponseRoles {
  erro: boolean;
  idPessoa: number;
  pessoaInfo: {
    id: number;
    nome: string;
    cpf: number;
    dataNascimento: string;
    email: string;
    login: string;
  };
  codigoSistema: string;
  papeis: Array<Roles>;
}

export interface StateRoles {
  data: APIResponseRoles | null;
}

export type SubRoute = {
  name: string;
  route: string;
};
export interface MenuSidebar {
  label: string;
  icon: any;
  subRoutes: Array<SubRoute>;
  iconActived?: any;
  isActived: boolean;
}
export interface SidebarProps extends StateRoles {
  user: User;
  routes: Array<MenuSidebar>;
  onClickMenu: (param: number) => void;
}
