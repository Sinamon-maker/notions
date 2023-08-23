import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainNavigator} from '../StackNavigation/MainNavigator';
import {TasksNavigator} from '../StackNavigation/TasksNavigator';
import {IconComponent} from '../../Modules/IconComponent/IconComponent';
import {IconsNames} from '../../../globalTypes';

import {TabParamList} from '../types';

const Tab = createBottomTabNavigator<TabParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {position: 'absolute', backgroundColor: '#2563eb'},
      }}>
      <Tab.Screen
        options={{
          tabBarAccessibilityLabel: 'Catalogues',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#f8fafc',

          tabBarIcon: ({color}) => (
            <IconComponent icon={IconsNames.FOLDER} color={color} />
          ),
        }}
        name="Catalogue"
        component={MainNavigator}
      />
      <Tab.Screen
        options={{
          tabBarAccessibilityLabel: 'Tasks',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#f8fafc',
          tabBarIcon: ({color}) => (
            <IconComponent icon={IconsNames.TASKS} color={color} />
          ),
        }}
        name="TasksList"
        component={TasksNavigator}
      />
    </Tab.Navigator>
  );
}
