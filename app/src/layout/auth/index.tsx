import {Component} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {CustomRoute, RouterInterface} from '../../utils/router_component';
class Index extends Component<RouterInterface> {
  constructor(props: RouterInterface) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: '#740000',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 27,
            verticalAlign: 'middle',
            flex: 0.5,
            textAlign: 'center',
            color: '#ffffff',
          }}>
          Welcome to Disposisi Surat
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/icon.png')}
            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Pressable
            onPress={() => {
              this.props.navigasi.navigate('Register');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              marginBottom: 30,
              backgroundColor: '#D7D7D7',
              paddingHorizontal: 20,
              paddingVertical: 13,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                alignItems: 'center',
              }}>
              SIGN UP
            </Text>
          </Pressable>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 22,
              textAlign: 'center',
              color: '#ffffff',
            }}>
            Already have on account ?
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 15,
              fontSize: 22,
              textAlign: 'center',
              color: '#ffffff',
            }}>
            Log In
          </Text>
        </View>
      </View>
    );
  }
}
export default CustomRoute(Index);
