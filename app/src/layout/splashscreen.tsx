import {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {RouterInterface, CustomRoute} from '../utils/router_component';
// import AsyncStorage from '@react-native-async-storage/async-storage';

class SplashScreen extends Component<RouterInterface> {
  constructor(props: RouterInterface) {
    super(props);
  }

  async componentDidMount() {
    // await AsyncStorage.getItem('token').then(res => {
    //   setTimeout(() => {
    //     if (res == null) {
    //       this.props.navigasi.navigate('Login');
    //     } else {
    //       this.props.navigasi.navigate('Home');
    //     }
    //   }, 2000);
    // });
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/icon.png')}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            color: '#000000',
            fontWeight: 'bold',
            marginTop: 8,
            fontSize: 35,
          }}>
          Disposisi Surat
        </Text>
      </View>
    );
  }
}

export default CustomRoute(SplashScreen);
