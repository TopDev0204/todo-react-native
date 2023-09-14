/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'user';
const ALREADYLOGGEDIN = 'already_logged_in';

const storeUser = async (user: User) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(user));
  } catch (error) {
    // console.log('DEBUG :: Error storing the user ::', error);
  }
};

const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem(KEY);
    return (user ? JSON.parse(user) : null) as User;
  } catch (error) {
    // console.log('DEBUG :: Error getting the user  ::', error);
    return null;
  }
};

const removeUser = async () => {
  try {
    return await AsyncStorage.removeItem(KEY);
  } catch (error) {
    return null;
  }
};

const checkAlreadyLoggedIn = async () => {
  try {
    const isAlreadyLoggedIn = await AsyncStorage.getItem(ALREADYLOGGEDIN);
    return isAlreadyLoggedIn ? true : false;
  } catch (error) {
    return null;
  }
};

const setAlreadyLoggedIn = async () => {
  try {
    await AsyncStorage.setItem(ALREADYLOGGEDIN, 'true');
  } catch (error) {
    return null
  }
};

export default {
  storeUser,
  getUser,
  removeUser,
  checkAlreadyLoggedIn,
  setAlreadyLoggedIn,
};
