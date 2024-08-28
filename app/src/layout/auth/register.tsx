import React, {Component} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {CustomRoute, RouterInterface} from '../../utils/router_component';
import CheckBox from '@react-native-community/checkbox';
interface Form {
  username: string;
  email: string;
  password: string;
  repassword: string;
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
      },
    };
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
                borderWidth: 1,
                borderColor: 'gray',
                color: 'black',
                borderRadius: 6,
                paddingLeft: 12,
                marginBottom: 15,
                fontSize: 17,
              }}
              placeholderTextColor={'gray'}
              placeholder="Masukan informasi disini ..."
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
                borderWidth: 1,
                borderColor: 'gray',
                color: 'black',
                borderRadius: 6,
                paddingLeft: 12,
                marginBottom: 15,
                fontSize: 17,
              }}
              placeholderTextColor={'gray'}
              placeholder="Masukan informasi disini ..."
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
                borderWidth: 1,
                borderColor: 'gray',
                color: 'black',
                borderRadius: 6,
                paddingLeft: 12,
                marginBottom: 15,
                fontSize: 17,
              }}
              placeholderTextColor={'gray'}
              placeholder="Masukan informasi disini ..."
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
                borderWidth: 1,
                borderColor: 'gray',
                color: 'black',
                borderRadius: 6,
                paddingLeft: 12,
                fontSize: 17,
              }}
              placeholderTextColor={'gray'}
              placeholder="Masukan informasi disini ..."
            />

            <CheckBox
              value={this.state.isChecked}
              onValueChange={(value: boolean) =>
                this.setState({isChecked: value})
              }
            />
            <View
              style={{
                marginTop: 35,
                width: '100%',
              }}>
              <Pressable
                onPress={() => {
                  this.props.navigasi.navigate('Register');
                }}
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
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  textAlign: 'center',
                  color: 'black',
                }}>
                Sign In from here
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default CustomRoute(Register);
