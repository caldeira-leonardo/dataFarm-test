import {ToastAndroid} from 'react-native';

export function showToast(message: string) {
  ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.TOP);
}
