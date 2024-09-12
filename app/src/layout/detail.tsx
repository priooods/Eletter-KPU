import {Component, ReactNode} from 'react';
import {Pressable, Text, View} from 'react-native';
import {CustomRoute, RouterInterface} from '../utils/router_component';

class DetailLetter extends Component<RouterInterface> {
  render(): ReactNode {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            marginVertical: 20,
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#740000',
          }}>
          Surat Masuk
        </Text>
        <View
          style={{
            padding: 20,
            borderWidth: 1,
            borderColor: '#515151',
            borderRadius: 10,
          }}>
          <View
            style={{
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
        <Pressable
          onPress={() => {
            this.props.navigasi.navigate('DetailItem', {
              data: (this.props.route.params as any).data,
            });
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
            Lihat Detail
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            this.props.navigasi.navigate('Disposisi', {
              data: (this.props.route.params as any).data,
            });
          }}
          style={{
            position: 'absolute',
            right: 20,
            bottom: 20,
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
            Disposisi
          </Text>
        </Pressable>
      </View>
    );
  }
}

export default CustomRoute(DetailLetter);
