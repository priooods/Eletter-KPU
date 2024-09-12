import axios from 'axios';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import * as AxiosLogger from 'axios-logger-plus';
import AsyncStorage from '@react-native-async-storage/async-storage';

let token: string = '';
AsyncStorage.getItem('token').then(res => {
  token = `Bearer ${res}`;
  return token;
})

const client = axios.create({
  baseURL: 'https://angelineuniverse.my.id/kpu/api/v1',
});
client.interceptors.request.use(
  async function (request) {
    console.log(request);
    
    await AsyncStorage.getItem('token').then(res => {
      if (res) {
        request.headers.Authorization = 'Bearer ' + res
      }
    });
    return AxiosLogger.requestLogger(request, {
      prefixText: 'your prefix',
      dateFormat: 'HH:MM:ss',
      headers: true,
    }) as any;
  },
  function (error) {
    return Promise.resolve(new Error(error));
  }
);



client.interceptors.response.use(
  async function (response) {
    const res = await response.data;
    if (res?.response_notifikasi) {
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: res.response_notifikasi.title,
        textBody: res.response_notifikasi.body,
      })
    }
    return response;
  },
  function (error) {
    console.log(error,"errors");
    Toast.show({
      type: ALERT_TYPE.DANGER,
      title: 'Failure Request',
      textBody: 'Ada kesalahan server dalam mengirim informasi',
    })
    if(error.status === 402) { return false; }
    return Promise.resolve(new Error(error));
  },
);

export default client;
