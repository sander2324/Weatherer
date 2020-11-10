import AsyncStorage from '@react-native-async-storage/async-storage';


// eslint-disable-next-line import/prefer-default-export
export const asyncStorageSyncMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (result.type.startsWith('LOCATION')) {
    const { locations } = store.getState();
    AsyncStorage.setItem('WEATHERER_LOCATIONS', JSON.stringify(locations));
  } else if (result.type.startsWith('SETTINGS')) {
    const { settings } = store.getState();
    AsyncStorage.setItem('WEATHERER_SETTINGS', JSON.stringify(settings));
  }

  return result;
};
