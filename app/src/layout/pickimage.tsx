import {Component} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {CustomRoute, RouterInterface} from '../utils/router_component';
class Picker extends Component<RouterInterface> {
  state: Readonly<{
    image: string | null;
    path: any;
  }>;
  constructor(props: RouterInterface) {
    super(props);
    this.state = {
      image: null,
      path: null,
    };
    this.handleCameraLaunch = this.handleCameraLaunch.bind(this);
  }

  componentDidMount(): void {
    this.handleCameraLaunch();
  }

  handleCameraLaunch = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      },
      (response: any) => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.error) {
          console.log('Camera Error: ', response.error);
        } else {
          let imageUri = response.uri || response.assets?.[0]?.uri;
          this.setState({
            image: imageUri,
            path: response.assets?.[0],
          });
        }
      },
    );
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        {this.state.image && (
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              paddingBottom: 50,
            }}>
            <Image
              source={{uri: this.state.image}}
              style={{flex: 1}}
              resizeMode="contain"
            />
          </View>
        )}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}>
          <View
            style={{
              marginBottom: 30,
              paddingHorizontal: 20,
            }}>
            <Pressable
              onPress={() => {
                this.props.navigasi.navigate('Forms', {
                  image: this.state.image,
                  path: this.state.path,
                });
              }}
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#740000',
                paddingHorizontal: 20,
                paddingVertical: 13,
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                  alignItems: 'center',
                }}>
                SUBMIT
              </Text>
            </Pressable>
          </View>
          <Pressable
            onPress={() => this.handleCameraLaunch()}
            style={{
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
      </View>
    );
  }
}

export default CustomRoute(Picker);
