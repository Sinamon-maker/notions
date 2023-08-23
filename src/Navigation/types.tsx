import type {CompositeScreenProps} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {RouteProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import type {
  CompositeNavigationProp,
  NavigationProp,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type StackParamList = {
  Main: undefined;
};

export type StackTasksList = {
  Tasks: undefined;
  TasksEdit: undefined;
};
export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
};

export type TabParamList = {
  TasksList: NavigatorScreenParams<StackTasksList>;
  Catalogue: NavigatorScreenParams<StackParamList>;
};

export type ProfileScreenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<StackTasksList, 'Tasks'>,
  BottomTabNavigationProp<TabParamList, 'Catalogue'>
>;

export type PropsWelcome = NativeStackScreenProps<
  AuthStackParamList,
  'Welcome'
>;

export type PropsToEditTask = NativeStackNavigationProp<
  StackTasksList,
  'Tasks'
>;

//use in EditTaskScreens
export type PropsNavigationTasksEdit = NativeStackScreenProps<
  StackTasksList,
  'TasksEdit',
  'Tasks'
>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'Main'
>;
// for route params
export type TasksScreenRouteProp = RouteProp<TabParamList, 'TasksList'>;
