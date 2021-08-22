import React, {useEffect, useState} from 'react';
import Sidebar from '../../assets/components/sidebar';
import {StateRoles} from '../../assets/components/sidebar/index.type';
import {userService} from '../../services/user';
import {Container} from './styles';
import IconMessage from '../../assets/UIkit/images/ico-message.png';
import IconCadaster from '../../assets/UIkit/images/ico-cadaster.png';

const {user, accessToken}: any = userService.getUserInfo();
const getUserInfo = async (setRoles: (params: any) => void) => {
  try {
    const {data} = await userService.get(accessToken);
    setRoles({data});
  } catch (error) {}
};

const Home: React.FC = () => {
  const [roles, setRoles] = useState<StateRoles>({data: null});

  const menus = [
    {label: 'Mensagens', icon: IconMessage},
    {label: 'Cadastros', icon: IconCadaster},
    {label: 'Relatórios', icon: IconMessage},
    {label: 'Planos de Ensino', icon: IconMessage},
    {label: 'Atualizar Dados', icon: IconMessage},
  ];

  useEffect(() => {
    getUserInfo(setRoles);
  }, []);

  console.log(user);
  return (
    <Container>
      <Sidebar user={user} data={roles.data} routes={menus} />
    </Container>
  );
};

export default Home;
