import { Layout } from 'antd';
import React, { FC } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import './App.less';
import { LOGIN_ROUTES, RouteInterface, ROUTES } from './constants/ConstRoute';
import CommonLayout from './pages/components/common/organisms/CommonLayout';

function App() {
  return (
    <div className='App'>
      <Layout>
        <CommonLayout>
          <Switch>
            {(() => {
              const isLogin = false; //getToken();
              console.log('isLogin', isLogin);
              return isLogin ? (
                <>
                  <Route component={AdminRouter} />
                </>
              ) : (
                <>
                  <Route component={LoginRouter} />
                </>
              );
            })()}
          </Switch>
        </CommonLayout>
      </Layout>
    </div>
  );
}

const GITHUB_PAGES_URL = '/dhl';

const getRouter = (routes: RouteInterface[]) => {
  return routes.map((route, index) => (
    <Route
      key={route.path}
      path={GITHUB_PAGES_URL + route.path.toString()}
      exact={route.exact}
      component={withRouter(route.component)}
    />
  ));
};

const LoginRouter: FC = () => {
  const loginRoute = LOGIN_ROUTES[0];
  return (
    <Switch>
      {getRouter(LOGIN_ROUTES)}
      <Redirect path='*' to={loginRoute.path} />
    </Switch>
  );
};

const AdminRouter: FC = () => {
  const homeRoute = ROUTES[0];
  return (
    <Switch>
      {getRouter(ROUTES)}
      <Redirect path='*' to={homeRoute.path} />
    </Switch>
  );
};
export default App;
