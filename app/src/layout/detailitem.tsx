import {Component, ReactNode} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {CustomRoute, RouterInterface} from '../utils/router_component';

class DetailItem extends Component<RouterInterface> {
  state: Readonly<{
    list: Array<any>;
  }>;

  constructor(props: RouterInterface) {
    super(props);
    this.state = {
      list: (this.props.route.params as any).data?.document,
    };
  }
  componentDidMount(): void {
    console.log(this.state.list, 'list');
  }
  render(): ReactNode {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <Pressable
          onPress={() => {
            this.props.navigasi.goBack();
          }}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/left.png',
            }}
            style={{
              width: 35,
              height: 35,
              tintColor: '#560404',
              resizeMode: 'contain',
              marginRight: 20,
            }}
          />
        </Pressable>
        <View>
          <ScrollView
            horizontal={true}
            style={{
              marginTop: 15,
            }}>
            {this.state.list &&
              this.state.list?.map(res => (
                <View
                  key={res.id}
                  style={{
                    height: 'auto',
                    width: 'auto',
                  }}>
                  <Image
                    source={{
                      uri:
                        'https://angelineuniverse.my.id/kpuserver/public/image/' +
                        res.filename,
                    }}
                    style={{
                      width: 228,
                      height: 300,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              ))}
          </ScrollView>
        </View>
        <View>
          <View
            style={{
              marginTop: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              No Surat
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              {(this.props.route.params as any).data?.no_surat}
            </Text>
          </View>
          <View
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              Tanggal Surat
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              {(this.props.route.params as any).data?.tanggal_surat}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              Asal Surat
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              {(this.props.route.params as any).data?.asal_surat}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CustomRoute(DetailItem);
