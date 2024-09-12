import {Component} from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CustomRoute, RouterInterface} from '../utils/router_component';
import {launchCamera} from 'react-native-image-picker';
import client from '../service';
import mime from 'mime';

class Forms extends Component<RouterInterface> {
  state: Readonly<{
    listImage: Array<string>;
    forms: {
      no_surat: string;
      tanggal_surat: string;
      asal_surat: string;
      image: Array<any>;
    };
  }>;
  constructor(props: RouterInterface) {
    super(props);
    this.state = {
      listImage: [(this.props.route.params as any).image],
      forms: {
        no_surat: '',
        tanggal_surat: '',
        asal_surat: '',
        image: [(this.props.route.params as any).path],
      },
    };
    this.saveData = this.saveData.bind(this);
  }

  openCamera() {
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
          this.setState((prevState: any) => ({
            listImage: [...prevState.listImage, imageUri],
            forms: {
              ...prevState.forms,
              image: [...prevState.forms.image, response.assets?.[0]],
            },
          }));
        }
      },
    );
  }

  saveData() {
    const forms = new FormData();
    forms.append('no_surat', this.state.forms.no_surat);
    forms.append('tanggal_surat', this.state.forms.tanggal_surat);
    forms.append('asal_surat', this.state.forms.asal_surat);
    this.state.forms.image.forEach((v, i) => {
      forms.append(`image[${i}][path]`, {
        name: 'image_' + i + '_' + this.state.forms.no_surat + '.png',
        type: 'image/jpg',
        uri: Platform.OS === 'android' ? v.uri : 'file://' + v.uri,
      });
    });
    client
      .post('/letter/store', forms, {
        headers: {
          accept: 'application/json',
          'content-type': 'multipart/form-data',
        },
      })
      .then(res => {
        this.props.navigasi.navigate('Home');
      });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: 'auto',
            height: 'auto',
            paddingVertical: 10,
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: '#C6C6C6',
          }}>
          <ScrollView horizontal={true}>
            {this.state.listImage.map(image => (
              <View
                key={image}
                style={{
                  position: 'relative',
                  height: 'auto',
                  width: 'auto',
                }}>
                <Image
                  source={{uri: image}}
                  style={{height: 120, width: 100}}
                  resizeMode="contain"
                />
                <Pressable
                  onPress={() => {
                    let filteredArray = this.state.listImage.filter(
                      item => item !== image,
                    );
                    this.setState({listImage: filteredArray});
                  }}>
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/color/48/delete-forever.png',
                    }}
                    style={{
                      height: 30,
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 8,
                    }}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>
            ))}
          </ScrollView>

          <Pressable onPress={() => this.openCamera()}>
            <Image
              source={{
                uri: 'https://img.icons8.com/material-outlined/24/add.png',
              }}
              style={{height: 30, width: 30, marginLeft: 8}}
              resizeMode="contain"
            />
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 30,
            paddingHorizontal: 20,
          }}>
          <Text style={{fontWeight: '800', fontSize: 25, color: '#740000'}}>
            To Do
          </Text>
          <TextInput
            inputMode="text"
            value={this.state.forms.no_surat}
            onChangeText={value =>
              this.setState((prevState: any) => ({
                forms: {...prevState.forms, no_surat: value},
              }))
            }
            style={{
              marginTop: 20,
              marginBottom: 10,
              height: 50,
              borderWidth: 1,
              borderColor: 'gray',
              color: 'black',
              borderRadius: 6,
              paddingLeft: 12,
              fontSize: 17,
            }}
            placeholderTextColor={'gray'}
            placeholder="No Surat ..."
          />
          <TextInput
            inputMode="text"
            value={this.state.forms.tanggal_surat}
            onChangeText={value =>
              this.setState((prevState: any) => ({
                forms: {...prevState.forms, tanggal_surat: value},
              }))
            }
            style={{
              marginBottom: 10,
              height: 50,
              borderWidth: 1,
              borderColor: 'gray',
              color: 'black',
              borderRadius: 6,
              paddingLeft: 12,
              fontSize: 17,
            }}
            placeholderTextColor={'gray'}
            placeholder="Tanggal Surat ..."
          />
          <TextInput
            inputMode="text"
            value={this.state.forms.asal_surat}
            onChangeText={value =>
              this.setState((prevState: any) => ({
                forms: {...prevState.forms, asal_surat: value},
              }))
            }
            style={{
              marginBottom: 10,
              height: 50,
              borderWidth: 1,
              borderColor: 'gray',
              color: 'black',
              borderRadius: 6,
              paddingLeft: 12,
              fontSize: 17,
            }}
            placeholderTextColor={'gray'}
            placeholder="Asal Surat ..."
          />
          <Pressable
            onPress={() => {
              this.saveData();
            }}
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: '#740000',
              paddingHorizontal: 20,
              marginTop: 30,
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
      </View>
    );
  }
}

export default CustomRoute(Forms);
