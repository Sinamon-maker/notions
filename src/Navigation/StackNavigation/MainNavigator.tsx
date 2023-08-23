import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from '../../Screens/MainScreen';
import {StackParamList} from '../types';

const Stack = createNativeStackNavigator<StackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={MainScreen}
      />
    </Stack.Navigator>
  );
};
