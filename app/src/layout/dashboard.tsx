import {Component, ReactNode} from 'react';
import {CustomRoute, RouterInterface} from '../utils/router_component';
import {View} from 'react-native';

class Dashboard extends Component<RouterInterface> {
  state: Readonly<{
    loading: boolean;
    isChecked: boolean;
  }>;
  constructor(props: RouterInterface) {
    super(props);
    this.state = {
      loading: false,
      isChecked: false,
    };
  }

  render(): ReactNode {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}></View>
    );
  }
}

export default CustomRoute(Dashboard);
