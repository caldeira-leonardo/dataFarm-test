import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUserResourceData() {
  const resourcesData: any = await AsyncStorage.getItem('resources');
  console.log('resourcesData', resourcesData); // remove logs

  if (resourcesData !== null) {
    console.log('resources AsyncStorage', resourcesData); // remove logs
    return JSON.parse(resourcesData);
  }
}
