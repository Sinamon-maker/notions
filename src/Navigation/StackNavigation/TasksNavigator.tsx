import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TasksScreen} from '../../Screens/tasks/TasksScreen';
import {StackTasksList} from '../types';
import {TasksEditScreen} from '../../Screens/tasks/TasksEditScreen';

const Stack = createNativeStackNavigator<StackTasksList>();

export const TasksNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="TasksList"
        component={TasksScreen}
      />
      <Stack.Screen name="TasksEdit" component={TasksEditScreen} />
    </Stack.Navigator>
  );
};
