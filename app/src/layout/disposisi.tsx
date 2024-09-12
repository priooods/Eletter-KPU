import {Component, ReactNode} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {CustomRoute, RouterInterface} from '../utils/router_component';
import Selected from '../components/select/select';
import client from '../service';

class Disposisi extends Component<RouterInterface> {
  state: Readonly<{
    listuser: Array<any>;
    forms: {
      tujuan: string;
      disposisi: string;
      t_surat_tabs_id: string;
    };
  }>;

  constructor(props: RouterInterface) {
    super(props);
    this.state = {
      listuser: [],
      forms: {
        tujuan: '',
        disposisi: '',
        t_surat_tabs_id: (this.props.route.params as any).data?.id,
      },
    };
    this.listUser = this.listUser.bind(this);
    this.disposisi = this.disposisi.bind(this);
  }

  componentDidMount(): void {
    this.listUser();
  }

  listUser() {
    client.get('/user/index').then(res => {
      this.setState({
        listuser: res.data.response_data,
      });
    });
  }
  disposisi() {
    client.post('/letter/disposisi', this.state.forms).then(res => {
      this.props.navigasi.navigate('Home');
    });
  }
  render(): ReactNode {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 20,
        }}>
        <Selected
          styleContainer={{
            marginTop: 30,
            flex: 0.18,
          }}
          label="Tujuan Disposisi"
          optionKey="id"
          optionLabel={'username'}
          optionSelect="id"
          options={this.state.listuser}
          onSelected={value => {
            this.setState((prevState: any) => ({
              forms: {...prevState.forms, tujuan: value},
            }));
          }}
        />
        <Text
          style={{
            marginBottom: 15,
            fontSize: 18,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Isi Disposisi
        </Text>
        <TextInput
          defaultValue={this.state.forms.disposisi}
          inputMode="text"
          multiline={true}
          onChangeText={value => {
            this.setState((prevState: any) => ({
              forms: {...prevState.forms, disposisi: value},
            }));
          }}
          style={{
            height: 200,
            borderWidth: 1,
            borderColor: 'gray',
            color: 'black',
            paddingLeft: 12,
            borderRadius: 6,
            fontSize: 17,
          }}
          placeholderTextColor={'gray'}
        />
        <Pressable
          onPress={() => {
            this.disposisi();
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            marginTop: 25,
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
    );
  }
}

export default CustomRoute(Disposisi);
