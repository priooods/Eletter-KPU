import {
  NavigationProp,
  ParamListBase,
  Route,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
export interface RouterInterface {
  navigasi: NavigationProp<ParamListBase>;
  readonly route: Route<any>;
}
export const CustomRoute = (Component: React.ComponentType<any>) => {
  const WithRouter = (props: any) => {
    const navigate = useNavigation();
    const route = useRoute();
    return <Component {...props} navigasi={navigate} route={route} />;
  };
  return WithRouter;
};
