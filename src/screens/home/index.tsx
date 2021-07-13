import React, {useEffect, useState} from 'react';
import Sidebar from '../../assets/components/sidebar';
import {StateRoles} from '../../assets/components/sidebar/index.type';
import {userService} from '../../services/user';
import {Container} from './styles';

const getUserInfo = async (setRoles: (params: any) => void) => {
  const user: any = userService.getUserInfo();
  try {
    const {data} = await userService.get(user?.accessToken);
    setRoles({data});
  } catch (error) {}
};

const Home: React.FC = () => {
  const [roles, setRoles] = useState<StateRoles>({data: null});

  useEffect(() => {
    getUserInfo(setRoles);
  }, []);

  return (
    <Container>
      <Sidebar data={roles.data} />
    </Container>
  );
};

export default Home;
