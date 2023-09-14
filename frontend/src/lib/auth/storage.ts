import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'authToken';
const storeToken = async (tokens: string) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(tokens));
  } catch (error) {
    console.log('DEBUG :: Error storing the authToken ::', error);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(KEY);
    return (token ? JSON.parse(token) : null) as string;
  } catch (error) {
    return null;
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch (error) {}
};

export default {
  storeToken,
  getToken,
  removeToken,
};
