import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen, RegisterScreen, Dashboard} from './screens';
import {Provider} from 'react-redux';
import {configureStore} from './store/index';

const Stack = createNativeStackNavigator();

function NavigationStack() {
  return (
    <Provider store={configureStore({})}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default NavigationStack;
