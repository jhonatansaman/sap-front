import React, {useState} from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import Sidebar from '../assets/components/sidebar';
import {MenuSidebar, StateRoles} from '../assets/components/sidebar/index.type';
import {userService} from '../services/user';
import {ReactComponent as IconCollegiate} from '../assets/UIkit/icons/ico-collegiate.svg';
import IconCollegiateActived from '../assets/UIkit/icons/ico-collegiate_actived.svg';
import CadasterContainer from '../screens/containers/cadaster';
import {Content} from './styles';
import colors from '../assets/UIkit/styles/colors';

const menus: Array<MenuSidebar> = [
  {
    label: 'Colegiado',
    subRoutes: [{name: 'Cadastrar Plano', route: '/cadaster/colegiado'}],
    icon: () => <IconCollegiate fill={colors.Primary.darkBlue} />,
    iconActived: () => <IconCollegiate fill={colors.Primary.blue} />,
    isActived: false,
  },
  {
    label: 'Eventos',
    subRoutes: [
      {name: 'Cadastrar Feriados', route: '/cadaster/eventos/feriados'},
    ],
    icon: () => <IconCollegiate />,
    iconActived: () => <IconCollegiate fill={colors.Primary.blue} />,
    isActived: false,
  },
];

const {user}: any = userService.getUserInfo();

const CadasterRoutes: React.FC = () => {
  const [roles] = useState<StateRoles>({data: userService.getRoles()});
  const [routes, setRoutes] = React.useState<Array<MenuSidebar>>(menus);

  const {path}: any = useRouteMatch();

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
        <Route path={`${path}/colegiado`}>
          <CadasterContainer
            routes={menus}
            onChangeRoute={(param: Array<MenuSidebar>) => setRoutes(param)}
          />
        </Route>
      </Switch>
    </Content>
  );
};

export default CadasterRoutes;
