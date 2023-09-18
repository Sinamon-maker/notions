/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './src/Screens/catalogue/MainScreen';
import {TabNavigator} from './src/Navigation/TabNavigation/TabNavigation';
import type {PropsWithChildren} from 'react';
import {AuthNavigator} from './src/Navigation/StackNavigation/AuthNavigation';
import {useColorScheme} from 'react-native';
import navigationTheme from './src/Navigation/Theme';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import userStore from './src/store/auth/userStore';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App() {
  const setUser = userStore(s => s.setUser);
  const user = userStore(s => s.user);
  const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userState => {
      console.log('init', userState);
      setUser(userState);
      if (initializing) {
        setInitializing(false);
      }
    });
    return subscriber; // unsubscribe on unmount
  }, [initializing, setUser]);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default App;
