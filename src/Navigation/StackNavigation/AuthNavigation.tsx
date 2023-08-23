import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../../Screens/LoginScreen';
import {WelcomeScreen} from '../../Screens/WelcomeScreen';
import {SignupScreen} from '../../Screens/SignupScreen';
import {AuthStackParamList} from '../types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
