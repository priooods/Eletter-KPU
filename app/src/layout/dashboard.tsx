import React, {Component, ReactNode} from 'react';
import {CustomRoute, RouterInterface} from '../utils/router_component';
import InLetter from './inletter';
import OutLetter from './outletter';
import Home from './home';
import DetailLetter from './detail';
import Picker from './pickimage';
import Forms from './forms';
import DetailItem from './detailitem';
import Disposisi from './disposisi';
import {
  DrawerLayoutAndroid,
  Image,
  PermissionsAndroid,
  Pressable,
  Text,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();
class Dashboard extends Component<RouterInterface> {
  state: Readonly<{}>;
  constructor(props: RouterInterface) {
    super(props);
    this.state = {};
  }
  drawer = React.createRef<DrawerLayoutAndroid>();
  componentDidMount(): void {
    this.requestCameraPermission();
  }
  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message:
            'App needs access to your camera ' + 'so you can take pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  navigationView = () => (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#6A0C0A8D',
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/icon.png')}
          style={{
            width: 40,
            height: 40,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: 20,
            marginLeft: 20,
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          kpu kab.bintan
        </Text>
      </View>
      <View
        style={{
          marginVertical: 20,
          height: 0.8,
          width: '100%',
          backgroundColor: 'white',
        }}></View>
      <Pressable
        style={{
          marginBottom: 15,
        }}
        onPress={() => {
          this.drawer.current?.closeDrawer();
          this.props.navigasi.navigate('Home');
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://img.icons8.com/metro/26/home.png',
            }}
            style={{
              width: 30,
              height: 30,
              tintColor: 'white',
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 24,
              marginLeft: 20,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Dashboard
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          marginBottom: 15,
        }}
        onPress={() => {
          this.drawer.current?.closeDrawer();
          this.props.navigasi.navigate('InLetter');
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://img.icons8.com/material-rounded/24/filled-message.png',
            }}
            style={{
              width: 30,
              height: 30,
              tintColor: 'white',
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 24,
              marginLeft: 20,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Surat Masuk
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          marginBottom: 15,
        }}
        onPress={() => {
          this.drawer.current?.closeDrawer();
          this.props.navigasi.navigate('OutLetter');
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://img.icons8.com/material-rounded/24/filled-message.png',
            }}
            style={{
              width: 30,
              height: 30,
              tintColor: 'white',
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 24,
              marginLeft: 20,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Surat Keluar
          </Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          this.drawer.current?.closeDrawer();
          this.props.navigasi.navigate('OutLetter');
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-glyphs/30/document--v1.png',
            }}
            style={{
              width: 30,
              height: 30,
              tintColor: 'white',
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 24,
              marginLeft: 20,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Disposisi
          </Text>
        </View>
      </Pressable>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            marginVertical: 20,
            height: 0.8,
            width: '100%',
            backgroundColor: 'white',
          }}></View>
        <Pressable
          onPress={async () => {
            await AsyncStorage.removeItem('token');
            this.drawer.current?.closeDrawer();
            this.props.navigasi.navigate('Login');
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-glyphs/30/exit.png',
              }}
              style={{
                width: 30,
                height: 30,
                tintColor: 'white',
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                fontSize: 24,
                marginLeft: 20,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Log out
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );

  render(): ReactNode {
    return (
      <DrawerLayoutAndroid
        ref={this.drawer}
        drawerWidth={250}
        drawerPosition="left"
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
        renderNavigationView={this.navigationView}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 25,
            paddingVertical: 15,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#740000',
              fontWeight: 700,
              fontSize: 20,
              flex: 1,
            }}>
            DISPOSISI SURAT
          </Text>
          <Pressable onPress={() => this.drawer.current?.openDrawer()}>
            <Image
              source={{
                uri: 'https://img.icons8.com/material-two-tone/24/menu--v1.png',
              }}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
          </Pressable>
        </View>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen navigationKey="Home" name="Home" component={Home} />
          <Stack.Screen
            navigationKey="InLetter"
            name="InLetter"
            component={InLetter}
          />
          <Stack.Screen
            navigationKey="DetailLetter"
            name="DetailLetter"
            component={DetailLetter}
          />
          <Stack.Screen
            navigationKey="DetailItem"
            name="DetailItem"
            component={DetailItem}
          />
          <Stack.Screen
            navigationKey="Outletter"
            name="Outletter"
            component={OutLetter}
          />
          <Stack.Screen
            navigationKey="Disposisi"
            name="Disposisi"
            component={Disposisi}
          />
          <Stack.Screen
            navigationKey="Picker"
            name="Picker"
            component={Picker}
          />
          <Stack.Screen navigationKey="Forms" name="Forms" component={Forms} />
        </Stack.Navigator>
      </DrawerLayoutAndroid>
    );
  }
}

export default CustomRoute(Dashboard);
