import React, {memo, useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';
import {emailValidator, passwordValidator} from '../core/utils';
import {Navigation} from '../types';
import {login} from '../store/auth/actions';
import {useDispatch, useSelector} from 'react-redux';
import {storeUserInfo} from '../store/actions';
import userStorage from '../lib/user/storage';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const {user, error, loggedIn} = useSelector(
    (state: any) => state.authReducer,
  );
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

  useEffect(() => {
    if (loggedIn) {
      if (!error) {
        navigation.navigate('Dashboard');
      } else {
        // global.showErrorToast('Error', 'Invalid username or password')
      }
    }
  }, [user, error, loggedIn]);

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    dispatch(
      login({
        Email: email.value,
        Password: password.value,
      }),
    );
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Header>Welcome back.</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
