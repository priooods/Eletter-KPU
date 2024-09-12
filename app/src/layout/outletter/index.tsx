import {Component, ReactNode} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {CustomRoute, RouterInterface} from '../../utils/router_component';
import client from '../../service';

class OutLetter extends Component<RouterInterface> {
  state: Readonly<{
    letter: Array<any>;
  }>;
  constructor(props: any) {
    super(props);
    this.state = {
      letter: [],
    };

    this.listing = this.listing.bind(this);
  }

  componentDidMount(): void {
    this.listing();
  }

  listing() {
    client.get('/letter/outletter').then(res => {
      this.setState({
        letter: res.data.response_data,
      });
    });
  }
  render(): ReactNode {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <ScrollView
          style={{
            paddingTop: 15,
            paddingHorizontal: 10,
          }}>
          {this.state.letter.map(res => (
            <Pressable
              onPress={() => {
                this.props.navigasi.navigate('DetailItem', {
                  data: res,
                });
              }}
              key={res.id}
              style={{
                marginBottom: 10,
                padding: 15,
                borderWidth: 1,
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 5,
                borderColor: '#ddd',
              }}>
              <Image
                source={require('../../assets/mail.png')}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                  marginRight: 20,
                }}
              />
              <View>
                <Text
                  style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
                  Surat Masuk
                </Text>
                <Text style={{color: 'black', fontSize: 14}}>
                  {res.tanggal_surat}
                </Text>
                <Text
                  style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                  Surat Masuk Baru
                </Text>
                <Text style={{color: 'black', fontSize: 14}}>
                  {res.asal_surat}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default CustomRoute(OutLetter);
