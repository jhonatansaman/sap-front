import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../screens/login';
import Home from '../screens/home';
import Main from '../screens/containers/main';
import GlobalStyle from '../globalStyles';
import CadasterContainer from '../screens/containers/cadaster';
import {userService} from '../services/user';
import Sidebar from '../assets/components/sidebar';
import {MenuSidebar, StateRoles} from '../assets/components/sidebar/index.type';
import IconCollegiate from '../assets/UIkit/icons/ico-collegiate.svg';
import IconCollegiateActived from '../assets/UIkit/icons/ico-collegiate_actived.svg';
import {Container} from '../screens/components/cadaster/styles';
const {user}: any = userService.getUserInfo();

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

const Routes: React.FC = () => {
  const [roles] = useState<StateRoles>({data: userService.getRoles()});
  const [routes, setRoutes] = React.useState<Array<MenuSidebar>>(menus);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cadaster">
            <Container>
              <Sidebar
                user={user}
                data={roles.data}
                routes={routes}
                onClickMenu={(param: number) =>
                  setRoutes(
                    routes.map((item, index) =>
                      index === param
                        ? {...item, isActived: !item.isActived}
                        : item,
                    ),
                  )
                }
              />
              <CadasterContainer routes={menus} />
            </Container>
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default Routes;
