import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from '../Modules/ScreenWrapper/ScreenWrapper';
import {AppButton} from '../Modules/AppButton/AppButton';
import {Text, View} from 'react-native';
import {PropsWelcome} from '../Navigation/types';

export const WelcomeScreen = ({navigation}: PropsWelcome) => {
  return (
    <ScreenWrapper>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#2563eb', '#fb923c']}
        className="h-full p-2">
        <View className="grow">
          <Text className="text-center pt-20 text-xl text-slate-50">
            Make your notes
          </Text>
        </View>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate('Login')}
          className="flex items-center justify-center bg-orange-400 rounded-xl py-2 mb-2"
          titleStyle="text-lg text-slate-50"
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate('Signup')}
          className="flex items-center justify-center rounded-xl py-2"
          titleStyle="text-lg text-slate-50"
        />
      </LinearGradient>
    </ScreenWrapper>
  );
};
