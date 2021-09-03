import React, {useState} from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import Sidebar from '../assets/components/sidebar';
import {MenuSidebar, StateRoles} from '../assets/components/sidebar/index.type';
import {userService} from '../services/user';
import IconCollegiate from '../assets/UIkit/icons/ico-collegiate.svg';
import IconCollegiateActived from '../assets/UIkit/icons/ico-collegiate_actived.svg';
import CadasterContainer from '../screens/containers/cadaster';
import {Content} from './styles';

const menus: Array<MenuSidebar> = [
  {
    label: 'Colegiado',
    subRoutes: [{name: 'Cadastrar Plano'}],
    icon: IconCollegiate,
    iconActived: IconCollegiateActived,
    isActived: false,
  },
  {
    label: 'Eventos',
    subRoutes: [{name: 'Cadastrar Feriados'}],
    icon: IconCollegiate,
    iconActived: IconCollegiateActived,
    isActived: false,
  },
];

const {user}: any = userService.getUserInfo();

const CadasterRoutes: React.FC = () => {
  const [roles] = useState<StateRoles>({data: userService.getRoles()});
  const [routes, setRoutes] = React.useState<Array<MenuSidebar>>(menus);
  const path = useRouteMatch();
  console.log(path);

  return (
    <Content>
      <Sidebar
        user={user}
        data={roles.data}
        routes={routes}
        onClickMenu={(param: number) =>
          setRoutes(
            routes.map((item, index) =>
              index === param ? {...item, isActived: !item.isActived} : item,
            ),
          )
        }
      />
      <Switch>
        <Route exact path={`${path.path}/colegiado`}>
          <CadasterContainer routes={menus} />
        </Route>
      </Switch>
    </Content>
  );
};

export default CadasterRoutes;
