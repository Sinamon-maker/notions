import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TasksScreen} from '../../Screens/TasksScreen';
import {StackParamList, StackTasksList} from '../types';
import {TasksEditScreen} from '../../Screens/TasksEditScreen';

const Stack = createNativeStackNavigator<StackTasksList>();

export const TasksNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Tasks"
        component={TasksScreen}
      />
      <Stack.Screen name="TasksEdit" component={TasksEditScreen} />
    </Stack.Navigator>
  );
};
