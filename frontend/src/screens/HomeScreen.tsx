import React, {memo, useEffect} from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import {Navigation} from '../types';
import userStorage from '../lib/user/storage';
import {useDispatch} from 'react-redux';
import {storeUserInfo} from '../store/actions';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();

  const checkAuthUser = async () => {
    const loginUser = await userStorage.getUser();
    if (loginUser !== null) {
      dispatch(storeUserInfo(loginUser));
      navigation.navigate('Dashboard');
    }
  };

  useEffect(() => {
    checkAuthUser();
  }, []);
  return (
    <Background>
      <Header>Todo App</Header>

      <Paragraph>Please login</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}>
        Sign Up
      </Button>
    </Background>
  );
};

export default memo(HomeScreen);
