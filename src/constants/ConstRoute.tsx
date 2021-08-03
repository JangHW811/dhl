import HomePage from '../pages/home';
import LoginPage from '../pages/login';

export enum EnumRouteUrl {
  HOME = '/',
  LOGIN = '/login',
}

export interface RouteInterface {
  path: EnumRouteUrl;
  exact: boolean;
  component: any;
}

export const LOGIN_ROUTES: RouteInterface[] = [
  {
    path: EnumRouteUrl.LOGIN,
    exact: true,
    component: LoginPage,
  },
];

export const ROUTES: RouteInterface[] = [{ path: EnumRouteUrl.HOME, exact: true, component: HomePage }];
