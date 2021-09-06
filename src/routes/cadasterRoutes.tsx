import React, {useState} from 'react';
import {Switch, Route, useRouteMatch, RouteProps} from 'react-router-dom';
import Sidebar from '../assets/components/sidebar';
import {MenuSidebar, StateRoles} from '../assets/components/sidebar/index.type';
import {userService} from '../services/user';
import {ReactComponent as IconCollegiate} from '../assets/UIkit/icons/ico-collegiate.svg';
import CadasterContainer from '../screens/containers/cadaster';
import {Content} from './styles';
import colors from '../assets/UIkit/styles/colors';
import {LoginUser} from '../types/apiResponse';

const menus: Array<MenuSidebar> = [
  {
    label: 'Colegiado',
    subRoutes: [
      {name: 'Cadastrar Plano', route: '/cadaster/colegiado', isActived: true},
      {
        name: 'Listar Membros',
        route: '/cadaster/listar-membros',
        isActived: false,
      },
    ],
    icon: () => <IconCollegiate fill={colors.Primary.darkBlue} />,
    iconActived: () => <IconCollegiate fill={colors.Primary.blue} />,
    isActived: false,
  },
  {
    label: 'Eventos',
    subRoutes: [
      {
        name: 'Cadastrar Feriados',
        route: '/cadaster/eventos/feriados',
        isActived: false,
      },
    ],
    icon: () => <IconCollegiate fill={colors.Primary.darkBlue} />,
    iconActived: () => <IconCollegiate fill={colors.Primary.blue} />,
    isActived: false,
  },
];

const {user}: LoginUser = userService.getUserInfo();

const changeSubRoute = (
  routes: Array<MenuSidebar>,
  setRoutes: (param: Array<MenuSidebar>) => void,
  routeKey: number,
  subRouteKey: number,
) => {
  const changeRoutes: Array<MenuSidebar> = [...routes];
  changeRoutes?.forEach((route, routeIndex) => {
    route.subRoutes.forEach((subRoute, subRouteIndex) => {
      if (routeIndex === routeKey && subRouteIndex === subRouteKey) {
        subRoute.isActived = !subRoute.isActived;
      } else {
        subRoute.isActived = false;
      }
    });

    setRoutes(changeRoutes);
  });
};

const CadasterRoutes: React.FC = () => {
  const [roles] = useState<StateRoles>({data: userService.getRoles()});
  const [routes, setRoutes] = React.useState<Array<MenuSidebar>>(menus);

  const routeMatch: string | Array<string> | RouteProps<string> =
    useRouteMatch();

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
        onClickSubMenu={(routeKey: number, subRouteKey: number) =>
          changeSubRoute(routes, setRoutes, routeKey, subRouteKey)
        }
      />
      <Switch>
        <Route path={`${routeMatch.path}/colegiado`}>
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
