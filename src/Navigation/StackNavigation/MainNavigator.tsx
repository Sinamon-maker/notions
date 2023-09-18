import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from '../../Screens/catalogue/MainScreen';
import {FolderEditScreen} from '../../Screens/catalogue/FolderEditScreen';
import {FolderCreateScreen} from '../../Screens/catalogue/FolderCreateScreen';
import {StackMainParamList} from '../types';

const Stack = createNativeStackNavigator<StackMainParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={MainScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="EditFolder"
        component={FolderEditScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CreateFolder"
        component={FolderCreateScreen}
      />
    </Stack.Navigator>
  );
};
