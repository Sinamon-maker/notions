/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './src/Screens/MainScreen';
import {TabNavigator} from './src/Navigation/TabNavigation/TabNavigation';
import type {PropsWithChildren} from 'react';
import {AuthNavigator} from './src/Navigation/StackNavigation/AuthNavigation';
import {useColorScheme} from 'react-native';
import navigationTheme from './src/Navigation/Theme';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const isLogged = false;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      {isLogged ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default App;
