import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUserResourceData() {
  const resourcesData: any = await AsyncStorage.getItem('resources');

  if (resourcesData !== null) {
    return JSON.parse(resourcesData);
  }
}
