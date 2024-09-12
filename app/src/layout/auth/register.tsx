import React, {Component} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {CustomRoute, RouterInterface} from '../../utils/router_component';
import CheckBox from '@react-native-community/checkbox';
import client from '../../service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
interface Form {
  username: string;
  email: string;
  password: string;
  repassword: string;
  m_access_tabs_id: number;
}
class Register extends Component<RouterInterface> {
  state: Readonly<{
    form: Form;
    loading: boolean;
    isChecked: boolean;
  }>;
  constructor(props: RouterInterface) {
    super(props);
    this.state = {
      loading: false,
      isChecked: false,
      form: {
        username: '',
        repassword: '',
        email: '',
        password: '',
        m_access_tabs_id: 1,
      },
    };
  }

  async authRegister() {
    if (this.state.form.repassword !== this.state.form.password) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Password not match',
        textBody: 'Periksa kembali password anda',
      });
      return;
    }
    await client.post('/user/register', this.state.form).then(async res => {
      await AsyncStorage.setItem('token', res.data.response_data?.token);
      return this.props.navigasi.navigate('Login');
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
            flex: 1,
            backgroundColor: '#740000',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
          }}>
          <Image
            source={require('../../assets/icon.png')}
            style={{
              width: 110,
              height: 110,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 3,
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 20,
          }}>
          <View
            style={{
              marginVertical: 'auto',
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginBottom: 20,
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                alignItems: 'center',
              }}>
              Create Account
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 5,
                marginBottom: 15,
                borderRadius: 6,
              }}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/material-sharp/24/user.png',
                }}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <TextInput
                defaultValue={this.state.form.username}
                inputMode="text"
                onChangeText={value => {
                  this.setState((prevState: any) => ({
                    form: {...prevState.form, username: value},
                  }));
                }}
                style={{
                  flex: 1,
                  height: 50,
                  color: 'black',
                  paddingLeft: 12,
                  fontSize: 17,
                }}
                placeholderTextColor={'gray'}
                placeholder="Username"
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 5,
                marginBottom: 15,
                borderRadius: 6,
              }}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/material-rounded/24/new-post.png',
                }}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <TextInput
                defaultValue={this.state.form.email}
                inputMode="text"
                onChangeText={value => {
                  this.setState((prevState: any) => ({
                    form: {...prevState.form, email: value},
                  }));
                }}
                style={{
                  height: 50,
                  flex: 1,
                  color: 'black',
                  paddingLeft: 12,
                  fontSize: 17,
                }}
                placeholderTextColor={'gray'}
                placeholder="Email"
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 5,
                marginBottom: 15,
                borderRadius: 6,
              }}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/material-rounded/24/lock--v1.png',
                }}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <TextInput
                defaultValue={this.state.form.password}
                inputMode="text"
                secureTextEntry={true}
                onChangeText={value => {
                  this.setState((prevState: any) => ({
                    form: {...prevState.form, password: value},
                  }));
                }}
                style={{
                  height: 50,
                  color: 'black',
                  flex: 1,
                  paddingLeft: 12,
                  fontSize: 17,
                }}
                placeholderTextColor={'gray'}
                placeholder="Password"
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 5,
                marginBottom: 15,
                borderRadius: 6,
              }}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/material-rounded/24/lock--v1.png',
                }}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <TextInput
                defaultValue={this.state.form.repassword}
                inputMode="text"
                secureTextEntry={true}
                onChangeText={value => {
                  this.setState((prevState: any) => ({
                    form: {...prevState.form, repassword: value},
                  }));
                }}
                style={{
                  height: 50,
                  color: 'black',
                  flex: 1,
                  paddingLeft: 12,
                  fontSize: 17,
                }}
                placeholderTextColor={'gray'}
                placeholder="Repeat Password"
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <CheckBox
                tintColors={{true: '#9F0C0C', false: 'black'}}
                disabled={false}
                value={this.state.isChecked}
                onValueChange={(value: boolean) =>
                  this.setState({isChecked: value})
                }
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                }}>
                I agree to the Terms and Conditions
              </Text>
            </View>
            <View
              style={{
                marginTop: 35,
                width: '100%',
              }}>
              <Pressable
                disabled={!this.state.isChecked}
                onPress={() => this.authRegister()}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: '100%',
                  marginBottom: 15,
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
                  SIGN UP
                </Text>
              </Pressable>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  textAlign: 'center',
                  color: 'black',
                }}>
                Already have on account ?
              </Text>
              <Pressable onPress={() => this.props.navigasi.navigate('Login')}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    textAlign: 'center',
                    color: 'black',
                  }}>
                  Sign In from here
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default CustomRoute(Register);
