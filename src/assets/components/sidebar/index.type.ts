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

export interface MenuSidebar {
  label: string;
  icon: any;
}
export interface SidebarProps extends StateRoles {
  name: string;
  routes: Array<MenuSidebar>;
}
