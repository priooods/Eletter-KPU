import {Component, ReactNode} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {CustomRoute, RouterInterface} from '../utils/router_component';

class Home extends Component<RouterInterface> {
  constructor(props: RouterInterface) {
    super(props);
  }
  render(): ReactNode {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <View
          style={{
            width: 'auto',
            height: 'auto',
            marginBottom: 20,
          }}>
          <ScrollView
            horizontal={true}
            style={{
              paddingStart: 20,
              rowGap: 10,
            }}>
            <Image
              style={{
                width: 200,
                height: 150,
                borderRadius: 20,
                marginRight: 20,
              }}
              source={require('../assets/slideone.png')}
            />
            <Image
              style={{
                width: 200,
                height: 150,
                borderRadius: 20,
                marginRight: 20,
              }}
              source={require('../assets/slideone.png')}
            />
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
          }}>
          <Pressable
            onPress={() => {
              this.props.navigasi.navigate('InLetter');
            }}
            style={{
              width: '50%',
              margin: 8,
              flex: 1,
              borderWidth: 1,
              borderColor: '#757575',
              borderRadius: 20,
              paddingVertical: 15,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',
                flex: 1,
                marginLeft: 12,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Surat Masuk
            </Text>
            <Image
              source={require('../assets/letter.png')}
              style={{
                marginRight: -23,
                width: 80,
                height: 80,
                resizeMode: 'contain',
              }}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              this.props.navigasi.navigate('Outletter');
            }}
            style={{
              width: '50%',
              margin: 8,
              flex: 1,
              borderWidth: 1,
              borderColor: '#757575',
              borderRadius: 20,
              paddingVertical: 15,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',
                flex: 1,
                marginLeft: 12,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Surat Keluar
            </Text>
            <Image
              source={require('../assets/letter.png')}
              style={{
                marginRight: -23,
                width: 80,
                height: 80,
                resizeMode: 'contain',
              }}
            />
          </Pressable>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            width: '43%',
            margin: 8,
            borderWidth: 1,
            borderColor: '#757575',
            borderRadius: 20,
            paddingVertical: 15,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: 'black',
              flex: 1,
              marginLeft: 12,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Disposisi
          </Text>
          <Image
            source={require('../assets/letter.png')}
            style={{
              marginRight: -23,
              width: 80,
              height: 80,
              resizeMode: 'contain',
            }}
          />
        </View>
        <Pressable
          onPress={() => this.props.navigasi.navigate('Picker')}
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: '#740000',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 100,
              padding: 1,
              marginBottom: 46,
            }}>
            <Image
              source={require('../assets/scan_icon.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
              }}
            />
          </View>
        </Pressable>
      </View>
    );
  }
}

export default CustomRoute(Home);
